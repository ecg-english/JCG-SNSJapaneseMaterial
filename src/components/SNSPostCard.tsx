import { useState } from 'react';
import { Heart, MessageCircle, Share2, BookmarkPlus, BookmarkCheck, CheckCircle2, Info } from 'lucide-react';
import { SNSPost } from '../types';
import ExpressionModal from './ExpressionModal';

interface SNSPostCardProps {
  post: SNSPost;
  isLearned: boolean;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onMarkAsLearned: () => void;
}

function SNSPostCard({ post, isLearned, isFavorite, onToggleFavorite, onMarkAsLearned }: SNSPostCardProps) {
  const [selectedExpression, setSelectedExpression] = useState<number | null>(null);
  const [showAllExpressions, setShowAllExpressions] = useState(false);

  const platformStyles = {
    twitter: {
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
      border: 'border-blue-200',
      icon: '𝕏',
      color: 'text-blue-600'
    },
    instagram: {
      bg: 'bg-gradient-to-br from-pink-50 to-purple-100',
      border: 'border-pink-200',
      icon: '📷',
      color: 'text-pink-600'
    },
    line: {
      bg: 'bg-gradient-to-br from-green-50 to-green-100',
      border: 'border-green-200',
      icon: '💬',
      color: 'text-green-600'
    }
  };

  const style = platformStyles[post.platform];

  // 投稿内容から表現をハイライト
  const highlightExpressions = (text: string) => {
    let highlightedText = text;
    const expressions = post.expressions.map(exp => exp.text);
    
    expressions.forEach((exp, index) => {
      const regex = new RegExp(`(${exp})`, 'g');
      highlightedText = highlightedText.replace(
        regex,
        `<span class="expression-highlight cursor-pointer" data-index="${index}">$1</span>`
      );
    });
    
    return highlightedText;
  };

  const handleContentClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('expression-highlight')) {
      const index = parseInt(target.getAttribute('data-index') || '0');
      setSelectedExpression(index);
    }
  };

  return (
    <>
      <div className={`${style.bg} border-2 ${style.border} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${isLearned ? 'opacity-90' : ''}`}>
        {/* ヘッダー */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-md">
              {post.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-800">{post.username}</h3>
                <span className="text-xl">{style.icon}</span>
              </div>
              <p className="text-sm text-gray-500">{post.timestamp}</p>
            </div>
          </div>
          
          {/* バッジ */}
          <div className="flex flex-col gap-2 items-end">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${style.color} bg-white shadow-sm`}>
              {post.level}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-700 shadow-sm">
              {post.category}
            </span>
          </div>
        </div>

        {/* 投稿内容 */}
        <div 
          className="mb-4 text-gray-800 whitespace-pre-wrap leading-relaxed"
          onClick={handleContentClick}
          dangerouslySetInnerHTML={{ __html: highlightExpressions(post.content) }}
        />

        {/* タグ */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* アクション */}
        <div className="flex items-center gap-6 mb-4 text-gray-600 border-t border-gray-200 pt-4">
          <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
            <Heart size={18} />
            <span className="text-sm">{post.likes}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
            <MessageCircle size={18} />
          </button>
          <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
            <Share2 size={18} />
          </button>
          <div className="flex-1" />
          <button
            onClick={onToggleFavorite}
            className={`flex items-center gap-2 transition-all ${
              isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
            }`}
          >
            {isFavorite ? <BookmarkCheck size={20} /> : <BookmarkPlus size={20} />}
          </button>
        </div>

        {/* 学習表現リスト */}
        <div className="bg-white bg-opacity-70 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-gray-800 flex items-center gap-2">
              <Info size={18} />
              Learning Points ({post.expressions.length})
            </h4>
            {!isLearned && (
              <button
                onClick={onMarkAsLearned}
                className="flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
              >
                <CheckCircle2 size={16} />
                Mark as Learned
              </button>
            )}
            {isLearned && (
              <span className="flex items-center gap-2 text-green-600 text-sm font-medium">
                <CheckCircle2 size={16} />
                Learned
              </span>
            )}
          </div>
          
          <div className="space-y-2">
            {post.expressions.slice(0, showAllExpressions ? undefined : 3).map((expression, index) => (
              <button
                key={index}
                onClick={() => setSelectedExpression(index)}
                className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-all border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-gray-800 text-lg">{expression.text}</span>
                    <span className="text-sm text-gray-500 ml-2">({expression.reading})</span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                    {expression.formality}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{expression.meaning}</p>
              </button>
            ))}
          </div>
          
          {post.expressions.length > 3 && (
            <button
              onClick={() => setShowAllExpressions(!showAllExpressions)}
              className="w-full mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              {showAllExpressions ? '▲ Close' : `▼ Show ${post.expressions.length - 3} more expressions`}
            </button>
          )}
        </div>
      </div>

      {/* 表現詳細モーダル */}
      {selectedExpression !== null && (
        <ExpressionModal
          expression={post.expressions[selectedExpression]}
          onClose={() => setSelectedExpression(null)}
        />
      )}

      <style>{`
        .expression-highlight {
          background-color: rgba(59, 130, 246, 0.2);
          padding: 2px 4px;
          border-radius: 4px;
          font-weight: 600;
          transition: all 0.2s;
        }
        .expression-highlight:hover {
          background-color: rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </>
  );
}

export default SNSPostCard;

