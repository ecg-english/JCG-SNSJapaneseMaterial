import { JLPTLevel, Category, SNSPlatform } from '../types';
import { X } from 'lucide-react';

interface FilterPanelProps {
  selectedLevels: JLPTLevel[];
  selectedCategories: Category[];
  selectedPlatforms: SNSPlatform[];
  onLevelsChange: (levels: JLPTLevel[]) => void;
  onCategoriesChange: (categories: Category[]) => void;
  onPlatformsChange: (platforms: SNSPlatform[]) => void;
  onClear: () => void;
}

function FilterPanel({
  selectedLevels,
  selectedCategories,
  selectedPlatforms,
  onLevelsChange,
  onCategoriesChange,
  onPlatformsChange,
  onClear
}: FilterPanelProps) {
  const levels: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];
  const categories: Category[] = [
    '若者言葉',
    'ネットスラング',
    '略語',
    '絵文字・顔文字',
    '挨拶',
    'リアクション',
    '感情表現',
    'トレンド',
    '日常会話'
  ];

  const getCategoryLabel = (category: Category): string => {
    const labels: { [key: string]: string } = {
      '若者言葉': 'Youth Language',
      'ネットスラング': 'Internet Slang',
      '略語': 'Abbreviations',
      '絵文字・顔文字': 'Emojis & Emoticons',
      '挨拶': 'Greetings',
      'リアクション': 'Reactions',
      '感情表現': 'Emotional Expressions',
      'トレンド': 'Trends',
      '日常会話': 'Daily Conversation'
    };
    return labels[category] || category;
  };
  const platforms: { value: SNSPlatform; label: string; icon: string }[] = [
    { value: 'twitter', label: 'Twitter/X', icon: '𝕏' },
    { value: 'instagram', label: 'Instagram', icon: '📷' },
    { value: 'line', label: 'LINE', icon: '💬' }
  ];

  const toggleLevel = (level: JLPTLevel) => {
    onLevelsChange(
      selectedLevels.includes(level)
        ? selectedLevels.filter(l => l !== level)
        : [...selectedLevels, level]
    );
  };

  const toggleCategory = (category: Category) => {
    onCategoriesChange(
      selectedCategories.includes(category)
        ? selectedCategories.filter(c => c !== category)
        : [...selectedCategories, category]
    );
  };

  const togglePlatform = (platform: SNSPlatform) => {
    onPlatformsChange(
      selectedPlatforms.includes(platform)
        ? selectedPlatforms.filter(p => p !== platform)
        : [...selectedPlatforms, platform]
    );
  };

  const hasActiveFilters = selectedLevels.length > 0 || selectedCategories.length > 0 || selectedPlatforms.length > 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">Filter</h3>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800 font-medium"
          >
            <X size={16} />
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* JLPTレベル */}
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-3">JLPT Level</h4>
          <div className="flex flex-wrap gap-2">
            {levels.map(level => (
              <button
                key={level}
                onClick={() => toggleLevel(level)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedLevels.includes(level)
                    ? 'bg-blue-600 text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* プラットフォーム */}
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-3">Platform</h4>
          <div className="flex flex-wrap gap-2">
            {platforms.map(platform => (
              <button
                key={platform.value}
                onClick={() => togglePlatform(platform.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  selectedPlatforms.includes(platform.value)
                    ? 'bg-purple-600 text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{platform.icon}</span>
                {platform.label}
              </button>
            ))}
          </div>
        </div>

        {/* カテゴリー */}
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-3">Category</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategories.includes(category)
                    ? 'bg-green-600 text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;

