import { useState, useMemo } from 'react';
import { Search, Filter, BookMarked, Trophy, Home } from 'lucide-react';
import { JLPTLevel, Category, SNSPlatform } from './types';
import { snsPosts } from './data/snsData';
import SNSPostCard from './components/SNSPostCard';
import FilterPanel from './components/FilterPanel';
import QuizMode from './components/QuizMode';
import FavoritesPanel from './components/FavoritesPanel';
import { useLocalStorage } from './hooks/useLocalStorage';

type ViewMode = 'feed' | 'quiz' | 'favorites';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // フィルター
  const [selectedLevels, setSelectedLevels] = useState<JLPTLevel[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<SNSPlatform[]>([]);
  
  // 学習進捗管理
  const [learnedPosts, setLearnedPosts] = useLocalStorage<string[]>('learnedPosts', []);
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  
  // フィルタリングされた投稿
  const filteredPosts = useMemo(() => {
    return snsPosts.filter(post => {
      // 検索クエリ
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesContent = post.content.toLowerCase().includes(query);
        const matchesTags = post.tags.some(tag => tag.toLowerCase().includes(query));
        const matchesExpressions = post.expressions.some(exp => 
          exp.text.toLowerCase().includes(query) || 
          exp.meaning.toLowerCase().includes(query)
        );
        if (!matchesContent && !matchesTags && !matchesExpressions) return false;
      }
      
      // レベルフィルター
      if (selectedLevels.length > 0 && !selectedLevels.includes(post.level)) {
        return false;
      }
      
      // カテゴリーフィルター
      if (selectedCategories.length > 0 && !selectedCategories.includes(post.category)) {
        return false;
      }
      
      // プラットフォームフィルター
      if (selectedPlatforms.length > 0 && !selectedPlatforms.includes(post.platform)) {
        return false;
      }
      
      return true;
    });
  }, [searchQuery, selectedLevels, selectedCategories, selectedPlatforms]);
  
  const toggleFavorite = (postId: string) => {
    setFavorites(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };
  
  const markAsLearned = (postId: string) => {
    setLearnedPosts(prev => 
      prev.includes(postId) ? prev : [...prev, postId]
    );
  };
  
  const clearFilters = () => {
    setSelectedLevels([]);
    setSelectedCategories([]);
    setSelectedPlatforms([]);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
              📱 SNS Japanese Master
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 whitespace-nowrap">
                Learned: {learnedPosts.length} / {snsPosts.length}
              </span>
            </div>
          </div>
          
          {/* ナビゲーションタブ */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setViewMode('feed')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'feed'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Home size={18} />
              Feed
            </button>
            <button
              onClick={() => setViewMode('quiz')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'quiz'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Trophy size={18} />
              Quiz
            </button>
            <button
              onClick={() => setViewMode('favorites')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'favorites'
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <BookMarked size={18} />
              Favorites ({favorites.length})
            </button>
          </div>
          
          {/* 検索バー（フィードモードのみ） */}
          {viewMode === 'feed' && (
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search expressions, tags, content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  showFilters
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Filter size={18} />
                Filter
              </button>
            </div>
          )}
        </div>
      </header>
      
      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {viewMode === 'feed' && (
          <>
            {/* フィルターパネル */}
            {showFilters && (
              <FilterPanel
                selectedLevels={selectedLevels}
                selectedCategories={selectedCategories}
                selectedPlatforms={selectedPlatforms}
                onLevelsChange={setSelectedLevels}
                onCategoriesChange={setSelectedCategories}
                onPlatformsChange={setSelectedPlatforms}
                onClear={clearFilters}
              />
            )}
            
            {/* 投稿フィード */}
            <div className="space-y-6">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No posts found</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-blue-600 hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                filteredPosts.map(post => (
                  <SNSPostCard
                    key={post.id}
                    post={post}
                    isLearned={learnedPosts.includes(post.id)}
                    isFavorite={favorites.includes(post.id)}
                    onToggleFavorite={() => toggleFavorite(post.id)}
                    onMarkAsLearned={() => markAsLearned(post.id)}
                  />
                ))
              )}
            </div>
          </>
        )}
        
        {viewMode === 'quiz' && <QuizMode />}
        
        {viewMode === 'favorites' && (
          <FavoritesPanel
            favorites={favorites}
            posts={snsPosts}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </main>
      
      {/* フッター */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p className="text-sm">
            SNS Japanese Master - Learn practical SNS Japanese expressions 🎌
          </p>
          <p className="text-xs mt-2 text-gray-500">
            For effective learning, we recommend studying a little bit every day
          </p>
          <p className="text-xs mt-4 text-gray-400">
            © 2025 JCG Japanese Conversation Gym. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

