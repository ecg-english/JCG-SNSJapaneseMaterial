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
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No favorites yet</h2>
        <p className="text-gray-600">
          Click the bookmark icon on posts<br />
          to add them to your favorites!
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-pink-200">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Heart className="text-pink-500" fill="currentColor" />
          Favorites
        </h2>
        <p className="text-gray-600 mt-2">
          {favoritePosts.length} post{favoritePosts.length !== 1 ? 's' : ''} saved as favorites
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

