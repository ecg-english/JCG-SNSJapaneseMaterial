// 投稿生成用のヘルパー関数
import { SNSPost, JLPTLevel, Category, SNSPlatform } from '../types';
import { commonExpressions } from './expressions';

// ユーザー名とアバターのテンプレート
const usernames = {
  twitter: ['さくら', 'たけし', 'みお', 'けんた', 'まりな', 'りか', 'ゆうき', 'あやか', 'たかし', 'ひろし', 'あきら', 'みき', 'なおみ', 'だいき', 'みゆき', 'けいご', 'まい', 'りく', 'えり', 'そうた'],
  instagram: ['あやか_cafe', 'たかし_travel', 'みき_fashion', 'なおみ_food', 'だいき_photo', 'みゆき_life', 'けいご_music', 'まい_beauty', 'りく_sports', 'えり_art'],
  line: ['ゆうき', 'ひろし', 'あきら', 'みき', 'なおみ', 'だいき', 'みゆき', 'けいご', 'まい', 'りく']
};

const avatars = ['🌸', '🎮', '🐱', '🎸', '🎀', '📚', '🏀', '🍜', '☕', '✈️', '🎨', '🎵', '🍔', '📷', '🎬', '🏃', '🎯', '🌟', '💫', '🔥'];

const timestamps = ['今', '1分前', '2分前', '5分前', '10分前', '30分前', '1時間前', '2時間前', '3時間前', '4時間前', '5時間前', '6時間前', '1日前', '2日前'];

// 投稿テンプレート（完全な投稿文をそのまま定義）
const postTemplates: Array<{
  content: string;
  level: JLPTLevel;
  category: Category;
  platform: SNSPlatform;
  expressionKeys: string[];
  tags: string[];
}> = [
  // 完全な投稿文をそのまま定義
  { content: '今日のテスト、マジでやばかった😭 でも終わったからエモい〜！', level: 'N3', category: '若者言葉', platform: 'twitter', expressionKeys: ['マジで', 'エモい'], tags: ['マジで', 'やばい', 'エモい'] },
  { content: 'おつかれ〜！今日は飲みに行く？ サクッと一杯どう？🍻', level: 'N4', category: '日常会話', platform: 'twitter', expressionKeys: ['おつかれ', 'サクッと'], tags: ['おつかれ', 'サクッと'] },
  { content: '今日のランチ🍽✨\nめちゃくちゃ映える〜！インスタ映え最高💕', level: 'N3', category: 'トレンド', platform: 'instagram', expressionKeys: ['めちゃくちゃ', '最高'], tags: ['映える', 'インスタ映え', 'めちゃくちゃ'] },
  { content: 'おけまる〜！\nりょ！\n了解です👌', level: 'N4', category: '略語', platform: 'line', expressionKeys: ['おけまる', 'りょ'], tags: ['おけまる', 'りょ', '了解'] },
  { content: 'バズってる！！！\nえぐいてぇ〜😂\nまさかのバズり方してるｗ', level: 'N2', category: 'ネットスラング', platform: 'twitter', expressionKeys: ['えぐいてぇ', 'ｗ'], tags: ['バズる', 'えぐい', 'ｗ'] },
  { content: '尊い…この推しカップル尊すぎて無理😭💕\n推せる〜！ガチ恋案件です', level: 'N2', category: '感情表現', platform: 'twitter', expressionKeys: ['尊い', 'ガチ恋'], tags: ['尊い', '推し', 'ガチ恋'] },
  { content: 'おk\nそれで👍\nｗｋｔｋ', level: 'N3', category: '略語', platform: 'line', expressionKeys: ['おk', 'ｗｋｔｋ'], tags: ['おk', 'ｗｋｔｋ'] },
  { content: 'テスト勉強なう📝\n詰む…もう無理ゲー\n誰か助けて〜！！', level: 'N3', category: 'ネットスラング', platform: 'twitter', expressionKeys: ['なう', '詰む', '無理ゲー'], tags: ['なう', '詰む', '無理ゲー'] },
];

// 追加の投稿テンプレート（完全な投稿文をそのまま定義）
const additionalTemplates: Array<{
  content: string;
  level: JLPTLevel;
  category: Category;
  platform: SNSPlatform;
  expressionKeys: string[];
  tags: string[];
}> = [
  // 若者言葉
  { content: 'マジでおいしい！このラーメンやばい😋', level: 'N3', category: '若者言葉', platform: 'twitter', expressionKeys: ['マジで', 'やばい'], tags: ['マジで', 'やばい'] },
  { content: 'マジで疲れた…でもエモい！', level: 'N3', category: '若者言葉', platform: 'twitter', expressionKeys: ['マジで', 'エモい'], tags: ['マジで', 'エモい'] },
  { content: 'めっちゃかわいい〜！かわいすぎて無理💕', level: 'N3', category: '若者言葉', platform: 'instagram', expressionKeys: ['めっちゃ', 'かわいすぎる'], tags: ['めっちゃ', 'かわいい'] },
  { content: 'めっちゃ楽しい！楽しすぎる🎉', level: 'N3', category: '若者言葉', platform: 'twitter', expressionKeys: ['めっちゃ', '楽しすぎる'], tags: ['めっちゃ', '楽しい'] },
  { content: '超面白い！面白すぎてわろた😭', level: 'N3', category: '若者言葉', platform: 'twitter', expressionKeys: ['超', '面白すぎる', 'わろた'], tags: ['超', '面白い', 'わろた'] },
  
  // 日常会話
  { content: 'おつかれ〜！今日はサクッと会おう？', level: 'N4', category: '日常会話', platform: 'line', expressionKeys: ['おつかれ', 'サクッと'], tags: ['おつかれ', 'サクッと'] },
  { content: 'おつかれ！サクッと終わらせよう', level: 'N4', category: '日常会話', platform: 'line', expressionKeys: ['おつかれ', 'サクッと'], tags: ['おつかれ', 'サクッと'] },
  { content: 'おつかれ〜！サクッと一杯飲もう🍻', level: 'N4', category: '日常会話', platform: 'twitter', expressionKeys: ['おつかれ', 'サクッと'], tags: ['おつかれ', 'サクッと'] },
  
  // リアクション
  { content: 'それな！わかるわかる！', level: 'N3', category: 'リアクション', platform: 'twitter', expressionKeys: ['それな', 'わかるわかる'], tags: ['それな', 'わかる'] },
  { content: 'ほんとそれな。わかりみが深すぎる🤝', level: 'N3', category: 'リアクション', platform: 'twitter', expressionKeys: ['それな', 'わかりみ'], tags: ['それな', 'わかりみ'] },
  { content: 'それな！わかるわかる！それな！', level: 'N3', category: 'リアクション', platform: 'twitter', expressionKeys: ['それな', 'わかるわかる'], tags: ['それな', 'わかる'] },
  
  // 感情表現
  { content: '尊い…尊すぎて無理😭💕', level: 'N2', category: '感情表現', platform: 'twitter', expressionKeys: ['尊い', '無理'], tags: ['尊い', '無理'] },
  { content: 'この推し、かわいすぎる！ガチ恋案件💕', level: 'N2', category: '感情表現', platform: 'twitter', expressionKeys: ['推し', 'かわいすぎる', 'ガチ恋'], tags: ['推し', 'かわいい', 'ガチ恋'] },
  { content: 'つらすぎてぴえん😭', level: 'N3', category: '感情表現', platform: 'twitter', expressionKeys: ['つらい', 'ぴえん'], tags: ['つらい', 'ぴえん'] },
  { content: 'ぴえん超えてぱおん😱', level: 'N3', category: '感情表現', platform: 'twitter', expressionKeys: ['ぴえん', 'ぱおん'], tags: ['ぴえん', 'ぱおん'] },
  
  // ネットスラング
  { content: '詰みすぎて無理ゲー😭', level: 'N3', category: 'ネットスラング', platform: 'twitter', expressionKeys: ['詰む', '無理ゲー'], tags: ['詰む', '無理ゲー'] },
  { content: '勉強なう📝\n詰む…無理ゲー', level: 'N3', category: 'ネットスラング', platform: 'twitter', expressionKeys: ['なう', '詰む', '無理ゲー'], tags: ['なう', '詰む', '無理ゲー'] },
  { content: 'つらすぎて草😭', level: 'N3', category: 'ネットスラング', platform: 'twitter', expressionKeys: ['つらい', '草'], tags: ['つらい', '草'] },
  
  // 略語
  { content: 'おk\n了解👍\nｗｋｔｋ', level: 'N3', category: '略語', platform: 'line', expressionKeys: ['おk', 'ｗｋｔｋ'], tags: ['おk', 'ｗｋｔｋ'] },
  { content: 'おけまる〜！\nりょ！', level: 'N4', category: '略語', platform: 'line', expressionKeys: ['おけまる', 'りょ'], tags: ['おけまる', 'りょ'] },
  { content: 'おk\nりょ', level: 'N3', category: '略語', platform: 'line', expressionKeys: ['おk', 'りょ'], tags: ['おk', 'りょ'] },
  
  // トレンド
  { content: 'この写真めっちゃ映える〜！最高💕', level: 'N3', category: 'トレンド', platform: 'instagram', expressionKeys: ['めっちゃ', '最高'], tags: ['映える', 'めっちゃ'] },
  { content: 'めっちゃ映えスポット発見！最高✨', level: 'N3', category: 'トレンド', platform: 'instagram', expressionKeys: ['めっちゃ', '最高'], tags: ['映える', 'めっちゃ'] },
];

// より多様な投稿テンプレート（完全な投稿文をそのまま定義）
const diverseTemplates: Array<{
  content: string;
  level: JLPTLevel;
  category: Category;
  platform: SNSPlatform;
  expressionKeys: string[];
  tags: string[];
}> = [
  // 若者言葉 - 多様なシチュエーション
  { content: '朝起きたらマジで眠い😴 めっちゃコーヒー飲みたい', level: 'N3', category: '若者言葉', platform: 'twitter', expressionKeys: ['マジで', 'めっちゃ'], tags: ['マジで', 'めっちゃ'] },
  { content: 'この曲めっちゃエモい…やばい泣きそう😢', level: 'N3', category: '若者言葉', platform: 'twitter', expressionKeys: ['めっちゃ', 'やばい'], tags: ['エモい', 'めっちゃ'] },
  { content: '今日のランチめっちゃおいしい！超幸せ💕', level: 'N3', category: '若者言葉', platform: 'instagram', expressionKeys: ['めっちゃ', '超'], tags: ['おいしい', 'めっちゃ'] },
  { content: '友達とめっちゃ楽しい時間過ごした✨ 最高！', level: 'N3', category: '若者言葉', platform: 'twitter', expressionKeys: ['めっちゃ', '最高'], tags: ['楽しい', '最高'] },
  { content: 'この映画めっちゃ面白かった！超おすすめ🎬', level: 'N3', category: '若者言葉', platform: 'twitter', expressionKeys: ['めっちゃ', '超'], tags: ['面白い', 'めっちゃ'] },
  { content: '今日めっちゃ疲れたけど超充実してる😊', level: 'N3', category: '若者言葉', platform: 'twitter', expressionKeys: ['めっちゃ', '超'], tags: ['疲れた', '充実'] },
  { content: '新しいカフェ発見！めっちゃかわいい💕 めっちゃ映える📷', level: 'N3', category: '若者言葉', platform: 'instagram', expressionKeys: ['めっちゃ'], tags: ['かわいい', '映える'] },
  { content: 'この本めっちゃ面白い！やばい読み終わった📚', level: 'N3', category: '若者言葉', platform: 'twitter', expressionKeys: ['めっちゃ', 'やばい'], tags: ['面白い', 'めっちゃ'] },
  
  // 日常会話 - 多様なシチュエーション
  { content: 'おつかれ！今日もサクッと頑張ろう💪', level: 'N4', category: '日常会話', platform: 'line', expressionKeys: ['おつかれ', 'サクッと'], tags: ['おつかれ', 'サクッと'] },
  { content: 'おつかれ〜！サクッと会えるの楽しみ😊', level: 'N4', category: '日常会話', platform: 'line', expressionKeys: ['おつかれ', 'サクッと'], tags: ['おつかれ', '楽しみ'] },
  { content: 'おつかれ！サクッと帰ろう🚶', level: 'N4', category: '日常会話', platform: 'line', expressionKeys: ['おつかれ', 'サクッと'], tags: ['おつかれ', '帰る'] },
  { content: 'おつかれ〜！サクッとご飯食べに行こう🍽', level: 'N4', category: '日常会話', platform: 'twitter', expressionKeys: ['おつかれ', 'サクッと'], tags: ['おつかれ', 'ご飯'] },
  { content: 'おつかれ！サクッと終わらせて帰る🏠', level: 'N4', category: '日常会話', platform: 'line', expressionKeys: ['おつかれ', 'サクッと'], tags: ['おつかれ', '終わる'] },
  { content: 'おつかれ〜！サクッと買い物行こう🛍', level: 'N4', category: '日常会話', platform: 'line', expressionKeys: ['おつかれ', 'サクッと'], tags: ['おつかれ', '買い物'] },
  { content: 'おつかれ！サクッと映画見に行こう🎬', level: 'N4', category: '日常会話', platform: 'twitter', expressionKeys: ['おつかれ', 'サクッと'], tags: ['おつかれ', '映画'] },
  { content: 'おつかれ〜！サクッとカフェ行こう☕', level: 'N4', category: '日常会話', platform: 'line', expressionKeys: ['おつかれ', 'サクッと'], tags: ['おつかれ', 'カフェ'] },
  
  // リアクション - 多様なシチュエーション
  { content: 'ほんとそれな。わかりみが深すぎてわろた😭', level: 'N3', category: 'リアクション', platform: 'twitter', expressionKeys: ['それな', 'わかりみ', 'わろた'], tags: ['それな', 'わかりみ'] },
  { content: 'それな！わかるわかる！完全に同意🤝', level: 'N3', category: 'リアクション', platform: 'twitter', expressionKeys: ['それな', 'わかるわかる'], tags: ['それな', 'わかる'] },
  { content: 'それな！わかりみすぎる！わかるわかる！', level: 'N3', category: 'リアクション', platform: 'twitter', expressionKeys: ['それな', 'わかりみ', 'わかるわかる'], tags: ['それな', 'わかりみ'] },
  
  // 感情表現 - 多様なシチュエーション
  { content: '尊い…この推し、かわいすぎて無理😭💕', level: 'N2', category: '感情表現', platform: 'twitter', expressionKeys: ['尊い', '推し', 'かわいすぎる'], tags: ['尊い', '推し', 'かわいい'] },
  { content: 'つらすぎてぴえん😭 でも頑張る！', level: 'N3', category: '感情表現', platform: 'twitter', expressionKeys: ['つらい', 'ぴえん'], tags: ['つらい', 'ぴえん'] },
  { content: 'この推し、かわいすぎる！ガチ恋案件💕', level: 'N2', category: '感情表現', platform: 'twitter', expressionKeys: ['推し', 'かわいすぎる', 'ガチ恋'], tags: ['推し', 'かわいい', 'ガチ恋'] },
  
  // ネットスラング - 多様なシチュエーション
  { content: 'この動画バズってる！えぐい〜😂 まじでやばい', level: 'N2', category: 'ネットスラング', platform: 'twitter', expressionKeys: ['バズる', 'えぐい', 'やばい'], tags: ['バズる', 'えぐい'] },
  { content: '詰みすぎて無理ゲー😭 つらい…', level: 'N3', category: 'ネットスラング', platform: 'twitter', expressionKeys: ['詰む', '無理ゲー', 'つらい'], tags: ['詰む', '無理ゲー'] },
  { content: '課題なう📝 詰む…無理ゲー😭', level: 'N3', category: 'ネットスラング', platform: 'twitter', expressionKeys: ['なう', '詰む', '無理ゲー'], tags: ['なう', '詰む', '無理ゲー'] },
  { content: 'つらすぎて草😭 わろた！', level: 'N3', category: 'ネットスラング', platform: 'twitter', expressionKeys: ['つらい', '草', 'わろた'], tags: ['つらい', '草'] },
  { content: 'このゲームやばい！面白すぎる🎮', level: 'N3', category: 'ネットスラング', platform: 'twitter', expressionKeys: ['やばい', '面白すぎる'], tags: ['やばい', '面白い'] },
  
  // 略語 - 多様なシチュエーション
  { content: 'おk\n了解👍\nｗｋｔｋ！', level: 'N3', category: '略語', platform: 'line', expressionKeys: ['おk', 'ｗｋｔｋ'], tags: ['おk', 'ｗｋｔｋ'] },
  { content: 'おけまる〜！\nりょ！\n楽しみ！', level: 'N4', category: '略語', platform: 'line', expressionKeys: ['おけまる', 'りょ'], tags: ['おけまる', 'りょ'] },
  { content: 'おk\nりょ\n了解！', level: 'N3', category: '略語', platform: 'line', expressionKeys: ['おk', 'りょ'], tags: ['おk', 'りょ'] },
  
  // トレンド - 多様なシチュエーション
  { content: 'この写真めっちゃ映える〜！最高💕 インスタに投稿📷', level: 'N3', category: 'トレンド', platform: 'instagram', expressionKeys: ['めっちゃ', '最高'], tags: ['映える', 'めっちゃ'] },
  { content: 'めっちゃ映えスポット発見！最高✨ ここ最高', level: 'N3', category: 'トレンド', platform: 'instagram', expressionKeys: ['めっちゃ', '最高'], tags: ['映える', 'めっちゃ'] },
  { content: 'この料理めっちゃ映える！最高💕 めっちゃおいしい！', level: 'N3', category: 'トレンド', platform: 'instagram', expressionKeys: ['めっちゃ', '最高', 'おいしい'], tags: ['映える', 'めっちゃ', 'おいしい'] },
  { content: 'めっちゃ映え写真撮れた📷 最高✨', level: 'N3', category: 'トレンド', platform: 'instagram', expressionKeys: ['めっちゃ', '最高'], tags: ['映える', 'めっちゃ'] },
];

// コンテンツを正規化して重複チェック用のキーを生成
function normalizeContent(content: string): string {
  return content
    .replace(/\s+/g, ' ') // 連続する空白を1つに
    .replace(/[😭😊✨💕🔥🎉👍😎🌟💫🎯🚀💪🎨🎵🍔📷🎬🏃☕🍻📝🤝👌👍🚶🍽🛍🎬🏠💪😴😢🎬📚🏔💬]/g, '') // 絵文字を除去
    .replace(/[！？。、〜〜~]/g, '') // 句読点を除去
    .trim()
    .toLowerCase();
}

// 投稿を生成する関数
export function generatePosts(): SNSPost[] {
  const posts: SNSPost[] = [];
  const usedContents = new Set<string>(); // 重複チェック用（正規化されたコンテンツ）
  const usedExpressionCombinations = new Set<string>(); // 表現の組み合わせチェック用
  let postId = 1;
  
  // すべてのテンプレートを統合
  const allTemplates = [...postTemplates, ...additionalTemplates, ...diverseTemplates];
  
  // テンプレートをシャッフルしてランダムな順序で処理
  const shuffledTemplates = [...allTemplates].sort(() => Math.random() - 0.5);
  
  // 各テンプレートから1個のみ生成（重複を完全に避けるため）
  shuffledTemplates.forEach((template) => {
    // 表現を取得
    const expressions = template.expressionKeys
      .map(key => commonExpressions[key])
      .filter(exp => exp !== undefined);
    
    if (expressions.length === 0) return;
    
    // 表現の組み合わせチェック（同じ表現の組み合わせを避ける）
    const expressionCombo = template.expressionKeys.sort().join(',');
    if (usedExpressionCombinations.has(expressionCombo)) {
      // 既に同じ表現の組み合わせが使われている場合はスキップ
      return;
    }
    
    // テンプレートのコンテンツをそのまま使用（プレースホルダー置換なし）
    const content = template.content;
    
    // 重複チェック：正規化されたコンテンツでチェック
    const normalizedContent = normalizeContent(content);
    if (usedContents.has(normalizedContent)) {
      return; // 重複している場合はスキップ
    }
    usedContents.add(normalizedContent);
    usedExpressionCombinations.add(expressionCombo);
    
    // ユーザー名とアバターを選択
    const platformUsers = usernames[template.platform];
    const username = platformUsers[postId % platformUsers.length];
    const avatar = avatars[postId % avatars.length];
      
    // タイムスタンプとライク数を生成
    const timestamp = timestamps[postId % timestamps.length];
    const likes = Math.floor(Math.random() * 5000) + (template.platform === 'line' ? 0 : 10);
    
    // 投稿を作成
    const post: SNSPost = {
      id: `${template.platform}-${String(postId).padStart(3, '0')}`,
      platform: template.platform,
      username,
      avatar,
      content,
      timestamp,
      likes,
      level: template.level,
      category: template.category,
      tags: template.tags,
      expressions: expressions.map(exp => ({ ...exp }))
    };
    
    posts.push(post);
    postId++;
  });
  
  // テンプレートベースの投稿のみを返す（不自然な投稿を避けるため）
  return posts;
}

