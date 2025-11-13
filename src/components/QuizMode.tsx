import { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';
import { quizzes } from '../data/snsData';
import { useLocalStorage } from '../hooks/useLocalStorage';

function QuizMode() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizResults, setQuizResults] = useLocalStorage<{[key: string]: boolean}>('quizResults', {});

  const currentQuiz = quizzes[currentQuizIndex];
  const completedQuizzes = Object.keys(quizResults).length;
  const correctAnswers = Object.values(quizResults).filter(v => v).length;

  const handleSubmit = () => {
    let correct = false;

    if (currentQuiz.type === 'multiple-choice') {
      correct = selectedOption === currentQuiz.correctAnswer;
    } else if (currentQuiz.type === 'fill-in-blank') {
      const userAnswerClean = userAnswer.trim().toLowerCase();
      const correctAnswerClean = (currentQuiz.correctAnswer as string).toLowerCase();
      correct = userAnswerClean === correctAnswerClean;
    }

    setIsCorrect(correct);
    setShowResult(true);
    setQuizResults({ ...quizResults, [currentQuiz.id]: correct });
  };

  const handleNext = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      resetQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(currentQuizIndex - 1);
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setUserAnswer('');
    setSelectedOption(null);
    setShowResult(false);
    setIsCorrect(false);
  };

  const restartAllQuizzes = () => {
    setCurrentQuizIndex(0);
    setQuizResults({});
    resetQuiz();
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* 進捗状況 */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-purple-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Trophy className="text-yellow-500" />
            クイズモード
          </h2>
          <button
            onClick={restartAllQuizzes}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-all"
          >
            <RotateCcw size={16} />
            最初から
          </button>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>進捗: {completedQuizzes} / {quizzes.length}</span>
            <span>正解率: {completedQuizzes > 0 ? Math.round((correctAnswers / completedQuizzes) * 100) : 0}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(completedQuizzes / quizzes.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* クイズカード */}
      <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-purple-600">
              問題 {currentQuizIndex + 1} / {quizzes.length}
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold">
              {currentQuiz.type === 'multiple-choice' ? '選択問題' : '記述問題'}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 leading-relaxed whitespace-pre-wrap">
            {currentQuiz.question}
          </h3>
        </div>

        {/* 選択肢（multiple-choice） */}
        {currentQuiz.type === 'multiple-choice' && currentQuiz.options && (
          <div className="space-y-3 mb-6">
            {currentQuiz.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && setSelectedOption(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  showResult
                    ? index === currentQuiz.correctAnswer
                      ? 'bg-green-50 border-green-500 text-green-800'
                      : selectedOption === index
                      ? 'bg-red-50 border-red-500 text-red-800'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                    : selectedOption === index
                    ? 'bg-purple-50 border-purple-500 text-purple-800 shadow-md'
                    : 'bg-gray-50 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* 入力欄（fill-in-blank） */}
        {currentQuiz.type === 'fill-in-blank' && (
          <div className="mb-6">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={showResult}
              placeholder="答えを入力してください"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 text-lg"
            />
          </div>
        )}

        {/* 結果表示 */}
        {showResult && (
          <div className={`p-6 rounded-xl mb-6 ${
            isCorrect ? 'bg-green-50 border-2 border-green-300' : 'bg-red-50 border-2 border-red-300'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="text-green-600" size={28} />
                  <span className="text-xl font-bold text-green-800">正解！</span>
                </>
              ) : (
                <>
                  <XCircle className="text-red-600" size={28} />
                  <span className="text-xl font-bold text-red-800">不正解</span>
                </>
              )}
            </div>
            
            {!isCorrect && currentQuiz.type === 'fill-in-blank' && (
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">正解: </span>
                {currentQuiz.correctAnswer}
              </p>
            )}
            
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">解説: </span>
              {currentQuiz.explanation}
            </p>
          </div>
        )}

        {/* ボタン */}
        <div className="flex gap-3">
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={
                (currentQuiz.type === 'multiple-choice' && selectedOption === null) ||
                (currentQuiz.type === 'fill-in-blank' && userAnswer.trim() === '')
              }
              className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              回答する
            </button>
          ) : (
            <>
              {currentQuizIndex > 0 && (
                <button
                  onClick={handlePrevious}
                  className="px-6 py-4 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-all"
                >
                  ← 前へ
                </button>
              )}
              {currentQuizIndex < quizzes.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  次の問題
                  <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  onClick={restartAllQuizzes}
                  className="flex-1 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw size={20} />
                  もう一度挑戦
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* 完了メッセージ */}
      {completedQuizzes === quizzes.length && (
        <div className="mt-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl shadow-lg p-6 border-2 border-yellow-300 text-center">
          <div className="text-5xl mb-3">🎉</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">すべてのクイズが完了しました！</h3>
          <p className="text-gray-700 mb-4">
            正解率: <span className="text-2xl font-bold text-orange-600">{Math.round((correctAnswers / completedQuizzes) * 100)}%</span>
          </p>
          <p className="text-gray-600">
            {correctAnswers === completedQuizzes
              ? '完璧です！すべての問題に正解しました！🏆'
              : '素晴らしい！この調子で学習を続けましょう！💪'}
          </p>
        </div>
      )}
    </div>
  );
}

export default QuizMode;

