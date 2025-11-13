// SNSプラットフォームの種類
export type SNSPlatform = 'twitter' | 'instagram' | 'line';

// JLPTレベル
export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

// カテゴリー
export type Category = 
  | '若者言葉'
  | 'ネットスラング'
  | '略語'
  | '絵文字・顔文字'
  | '挨拶'
  | 'リアクション'
  | '感情表現'
  | 'トレンド'
  | '日常会話';

// フォーマル度
export type FormalityLevel = 'とてもカジュアル' | 'カジュアル' | '普通' | 'フォーマル';

// SNS投稿データの型
export interface SNSPost {
  id: string;
  platform: SNSPlatform;
  username: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  
  // 学習コンテンツ
  expressions: Expression[];
  
  // メタデータ
  level: JLPTLevel;
  category: Category;
  tags: string[];
}

// 表現の詳細情報
export interface Expression {
  text: string; // 表現そのもの
  reading: string; // 読み方（ふりがな）
  meaning: string; // 意味（英語または簡単な日本語）
  explanation: string; // 詳しい解説
  formality: FormalityLevel;
  examples: string[]; // 他の使用例
  notes: string; // 注意点
  synonyms?: string[]; // 類似表現
  antonyms?: string[]; // 反対の表現
}

// クイズ問題の型
export interface Quiz {
  id: string;
  type: 'fill-in-blank' | 'multiple-choice' | 'match';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  relatedPostId: string;
}

// ユーザーの学習進捗
export interface UserProgress {
  learnedPosts: Set<string>;
  favorites: Set<string>;
  quizScores: { [quizId: string]: boolean };
}

