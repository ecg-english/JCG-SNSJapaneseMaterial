import { X, Volume2, BookOpen, Lightbulb, AlertCircle } from 'lucide-react';
import { Expression } from '../types';

interface ExpressionModalProps {
  expression: Expression;
  onClose: () => void;
}

function ExpressionModal({ expression, onClose }: ExpressionModalProps) {
  const formalityColors = {
    'とてもカジュアル': 'bg-red-100 text-red-800 border-red-300',
    'カジュアル': 'bg-orange-100 text-orange-800 border-orange-300',
    '普通': 'bg-blue-100 text-blue-800 border-blue-300',
    'フォーマル': 'bg-purple-100 text-purple-800 border-purple-300'
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(expression.text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
        {/* ヘッダー */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold">{expression.text}</h2>
                <button
                  onClick={handleSpeak}
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all"
                  title="Play audio"
                >
                  <Volume2 size={24} />
                </button>
              </div>
              <p className="text-lg opacity-90">{expression.reading}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-6 space-y-6">
          {/* Formality Level */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Formality Level</h3>
            <span className={`inline-block px-4 py-2 rounded-lg font-bold border-2 ${formalityColors[expression.formality]}`}>
              {expression.formality}
            </span>
          </div>

          {/* Meaning */}
          <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
            <h3 className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
              <BookOpen size={18} />
              Meaning
            </h3>
            <p className="text-lg text-gray-800">{expression.meaning}</p>
          </div>

          {/* Detailed Explanation */}
          <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
            <h3 className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
              <Lightbulb size={18} />
              Detailed Explanation
            </h3>
            <p className="text-gray-800 leading-relaxed">{expression.explanation}</p>
          </div>

          {/* Usage Examples */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
              💬 Usage Examples
            </h3>
            <div className="space-y-2">
              {expression.examples.map((example, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <p className="text-gray-800">{example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          {expression.notes && (
            <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-300">
              <h3 className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
                <AlertCircle size={18} className="text-yellow-600" />
                Notes
              </h3>
              <p className="text-gray-800">{expression.notes}</p>
            </div>
          )}

          {/* Synonyms */}
          {expression.synonyms && expression.synonyms.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Synonyms</h3>
              <div className="flex flex-wrap gap-2">
                {expression.synonyms.map((synonym, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-300">
                    {synonym}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Antonyms */}
          {expression.antonyms && expression.antonyms.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Antonyms</h3>
              <div className="flex flex-wrap gap-2">
                {expression.antonyms.map((antonym, index) => (
                  <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium border border-red-300">
                    {antonym}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* フッター */}
        <div className="sticky bottom-0 bg-gray-50 p-4 rounded-b-2xl border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Close
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default ExpressionModal;

