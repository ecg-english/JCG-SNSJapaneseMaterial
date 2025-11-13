import { SNSPost } from '../types';
import SNSPostCard from './SNSPostCard';
import { Heart } from 'lucide-react';

interface FavoritesPanelProps {
  favorites: string[];
  posts: SNSPost[];
  onToggleFavorite: (postId: string) => void;
}

function FavoritesPanel({ favorites, posts, onToggleFavorite }: FavoritesPanelProps) {
  const favoritePosts = posts.filter(post => favorites.includes(post.id));

  if (favoritePosts.length === 0) {
    return (
      <div className="text-center py-20">
        <Heart size={64} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">お気に入りはまだありません</h2>
        <p className="text-gray-600">
          投稿のブックマークアイコンをクリックして、<br />
          お気に入りに追加しましょう！
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-pink-200">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Heart className="text-pink-500" fill="currentColor" />
          お気に入り
        </h2>
        <p className="text-gray-600 mt-2">
          {favoritePosts.length}件の投稿がお気に入りに登録されています
        </p>
      </div>

      <div className="space-y-6">
        {favoritePosts.map(post => (
          <SNSPostCard
            key={post.id}
            post={post}
            isLearned={false}
            isFavorite={true}
            onToggleFavorite={() => onToggleFavorite(post.id)}
            onMarkAsLearned={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPanel;

