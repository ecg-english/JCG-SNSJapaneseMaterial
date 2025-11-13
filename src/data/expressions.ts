// 共通の表現データ（英語解説版）
import { Expression, FormalityLevel } from '../types';

export const commonExpressions: { [key: string]: Expression } = {
  'マジで': {
    text: 'マジで',
    reading: 'まじで',
    meaning: 'Seriously, Really (very casual)',
    explanation: 'A very casual way to say "really" or "seriously". Commonly used by young people. Do not use in formal situations.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'マジで疲れた (I\'m really tired)',
      'マジでおいしい！ (Seriously delicious!)',
      'マジで？（Really?）'
    ],
    notes: 'Do not use with superiors or people you just met. Only for friends or people of the same age.',
    synonyms: ['本当に', 'めっちゃ', 'ホントに']
  },
  'やばい': {
    text: 'やばい',
    reading: 'やばい',
    meaning: 'Crazy, Intense, Amazing (context-dependent)',
    explanation: 'Originally meant "dangerous", but now used for both positive and negative meanings. Context determines the meaning.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'このラーメン、やばいおいしい！ (This ramen is crazy good!)',
      'テスト、やばい… (The test is terrible...)',
      'やばい、遅刻する！ (Oh no, I\'m going to be late!)'
    ],
    notes: 'Very versatile word, frequently used among young people. Context is important.',
    synonyms: ['すごい', 'ひどい', '大変']
  },
  'エモい': {
    text: 'エモい',
    reading: 'えもい',
    meaning: 'Emotional, Nostalgic (from English "emotional")',
    explanation: 'Derived from English "emotional". Expresses sentimental, moving, or nostalgic feelings.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'この曲エモい (This song is so emotional)',
      '夕焼けがエモい (The sunset is nostalgic)',
      'エモい写真撮れた (I took an emotional photo)'
    ],
    notes: 'A relatively new expression that became popular among young people in the late 2010s.',
    synonyms: ['感動的', 'しみじみする', 'ノスタルジック']
  },
  'おつかれ': {
    text: 'おつかれ',
    reading: 'おつかれ',
    meaning: 'Good job, Thanks for your work (casual)',
    explanation: 'Shortened form of "お疲れ様です" (otsukaresama desu). Very casual greeting used between friends.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'おつかれ〜 (Good work!)',
      'おつかれさまでした (More polite version)',
      'おつです (Even shorter version)'
    ],
    notes: 'Used after work or completing something. "お疲れ様です" is the formal version.',
    synonyms: ['お疲れ様', 'ご苦労様']
  },
  'サクッと': {
    text: 'サクッと',
    reading: 'さくっと',
    meaning: 'Quickly, Casually, Lightly',
    explanation: 'Means to do something quickly, casually, or easily. Derived from onomatopoeia.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'サクッと終わらせる (Finish it quickly)',
      'サクッと食べる (Eat quickly)',
      'サクッと会おう (Let\'s meet up quickly)'
    ],
    notes: 'Expression that gives a light, quick impression. Often used on SNS.',
    synonyms: ['手早く', '軽く', 'ちゃちゃっと']
  },
  'それな': {
    text: 'それな',
    reading: 'それな',
    meaning: 'Exactly, I agree, That\'s right',
    explanation: 'Shortened form of "それはそうだね" (sore wa sou da ne). Used to strongly agree with someone. Very common on SNS.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'A: 今日暑いね B: それな (A: It\'s hot today B: Exactly)',
      'ほんとそれな (Seriously, that\'s right)',
      'まじでそれな (For real, that\'s right)'
    ],
    notes: 'A representative example of youth slang. Use "そうですね" in formal situations.',
  },
  'わかりみが深い': {
    text: 'わかりみが深い',
    reading: 'わかりみがふかい',
    meaning: 'I really understand, Very relatable',
    explanation: 'A coined word combining "わかる" (understand) + "み" (suffix) + "深い" (deep). Means "I really understand" or "very relatable".',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'わかりみが深すぎる (Too relatable)',
      'わかりみしかない (I can only relate)',
      'つらみが深い (Same pattern: very painful)'
    ],
    notes: 'Internet slang. The suffix "〜み" can be attached to various words (つらみ, うれしみ, etc.).',
    synonyms: ['よくわかる', '共感する']
  },
  '映える': {
    text: '映える',
    reading: 'ばえる',
    meaning: 'Photogenic, looks good (on Instagram)',
    explanation: 'Derived from "インスタ映え" (Instagram-worthy). Means something looks good when photographed.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'この料理、めっちゃ映える (This dish is so photogenic)',
      '映えスポット (Photogenic spot)',
      '映え写真 (Instagram-worthy photo)'
    ],
    notes: 'Word of the Year 2017. Expression born from SNS culture.',
    synonyms: ['見栄えが良い', 'フォトジェニック']
  },
  'めちゃくちゃ': {
    text: 'めちゃくちゃ',
    reading: 'めちゃくちゃ',
    meaning: 'Very, Extremely, So much',
    explanation: 'Casual emphatic expression meaning "very" or "extremely".',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'めちゃくちゃおいしい (Extremely delicious)',
      'めちゃくちゃ楽しい (So much fun)',
      'めちゃ (Even shorter version)'
    ],
    notes: 'Also said as "めっちゃ". Frequently used among young people.',
    synonyms: ['とても', 'すごく', 'めっちゃ', '超']
  },
  'おけまる': {
    text: 'おけまる',
    reading: 'おけまる',
    meaning: 'OK (very casual slang)',
    explanation: 'Cute way to say "OK" by combining "OK" + "まる" (circle, ◯). Mainly used in LINE and other messaging apps.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'A: 明日3時でいい？ B: おけまる (A: Is 3pm tomorrow okay? B: OK)',
      'おけまる水産 (Playful variation)'
    ],
    notes: 'Youth slang. Gives a cute impression. Some men also use it.',
    synonyms: ['OK', 'オッケー', 'いいよ']
  },
  'りょ': {
    text: 'りょ',
    reading: 'りょ',
    meaning: 'Got it, Roger (from 了解)',
    explanation: 'Ultra-shortened form of "了解" (ryoukai). Used when quickly replying in messaging apps.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'りょ (Got it)',
      'りょうかい (Full form)',
      '了解 (Standard form)'
    ],
    notes: 'Very short, so only use with close friends. Use "承知しました" (shouchishimashita) with superiors.',
    synonyms: ['了解', 'わかった', 'OK']
  },
  'バズる': {
    text: 'バズる',
    reading: 'ばずる',
    meaning: 'To go viral, to become trending',
    explanation: 'From English "buzz". Means something spreads rapidly on SNS and becomes a topic of conversation.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'この動画がバズった (This video went viral)',
      'バズり狙い (Trying to go viral)',
      'プチバズ (Small viral moment)'
    ],
    notes: 'Essential term in the SNS era. Especially common on Twitter.',
    synonyms: ['話題になる', '拡散される']
  },
  'えぐい': {
    text: 'えぐい',
    reading: 'えぐい',
    meaning: 'Intense, Extreme, Harsh',
    explanation: 'Originally meant "strongly stimulating", but now also used to mean "amazing" or "intense".',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'えぐいくらい難しい (Intensely difficult)',
      'えぐいほどおいしい (Extremely delicious)',
      'えぐいてぇ (Same as えぐい)'
    ],
    notes: 'Similar usage to "やばい". Can be used for both positive and negative meanings.',
  },
  'ｗ': {
    text: 'ｗ',
    reading: 'わら / だぶりゅー',
    meaning: 'lol, haha (from 笑い)',
    explanation: 'First letter of "warai" (laugh) in romaji. Equivalent to English "lol".',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'それなｗ (That\'s right lol)',
      'まじでｗｗｗ (Seriously lol)',
      '草 (kusa, because www looks like grass)'
    ],
    notes: 'When multiple "w"s are used like "wwwww", it represents loud laughter. Also called "草" (kusa).',
  },
  '尊い': {
    text: '尊い',
    reading: 'とうとい',
    meaning: 'Precious, Blessed (in fan context)',
    explanation: 'Originally meant "sacred", but in otaku culture means "so wonderful it\'s divine".',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '尊い… (So precious...)',
      '尊すぎる (Too precious)',
      '尊み (Noun form)'
    ],
    notes: 'Used for anime, idols, favorite characters, etc. Expresses emotion and excitement.',
    synonyms: ['素晴らしい', '神']
  },
  '推し': {
    text: '推し',
    reading: 'おし',
    meaning: 'Favorite, One\'s favorite idol/character',
    explanation: 'From "推薦する" (recommend). Refers to the person or character you especially support.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '私の推しは〇〇 (My favorite is XX)',
      '推し活 (Activities supporting your favorite)',
      '推しが尊い (My favorite is precious)'
    ],
    notes: 'Essential term in idol, voice actor, and character culture.',
    synonyms: ['お気に入り', '好きな人']
  },
  'ガチ恋': {
    text: 'ガチ恋',
    reading: 'がちこい',
    meaning: 'Serious love/crush (genuine romantic feelings)',
    explanation: '"ガチ" (serious) + "恋" (love). Having genuine romantic feelings for an idol or character.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'ガチ恋になった (I fell seriously in love)',
      'ガチ恋勢 (People with serious crushes)',
      'ガチ恋案件 (Serious crush situation)'
    ],
    notes: 'Term from otaku culture. Sometimes used half-jokingly.',
  },
  'おk': {
    text: 'おk',
    reading: 'おけ / おけい',
    meaning: 'OK (internet slang)',
    explanation: 'Japanese internet slang notation for "OK". Used when quickly replying.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'おk (OK)',
      'おｋ (Same)',
      'ok (Same)'
    ],
    notes: 'Commonly used in messaging apps and chat.',
    synonyms: ['OK', 'おけまる', 'りょ']
  },
  'ｗｋｔｋ': {
    text: 'ｗｋｔｋ',
    reading: 'わくわくてかてか / わくてか',
    meaning: 'Excited, Can\'t wait (from わくわくテカテカ)',
    explanation: 'Initials of "わくわくテカテカ" (wakuwaku tekateka). Expresses a state of great excitement and anticipation.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      '明日のイベントwktk (Excited for tomorrow\'s event)',
      'wktkが止まらない (Can\'t stop being excited)'
    ],
    notes: 'From 2000s internet bulletin board culture. Still used online today.',
    synonyms: ['わくわく', '楽しみ']
  },
  'チル': {
    text: 'チル',
    reading: 'ちる',
    meaning: 'Chill, Relax (from English "chill")',
    explanation: 'From English "chill". Means to relax or take it easy.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'チルする (To chill)',
      'チルい (Adjective form)',
      'チル旅 (Chill trip)'
    ],
    notes: 'Became popular among young people around 2020. Expresses a relaxed atmosphere.',
    synonyms: ['リラックス', 'まったり', 'のんびり']
  },
  '癒やされる': {
    text: '癒やされる',
    reading: 'いやされる',
    meaning: 'To be healed, To feel relaxed/comforted',
    explanation: 'Means to feel calm or relaxed. Often used on SNS.',
    formality: '普通' as FormalityLevel,
    examples: [
      '景色に癒やされる (Healed by the scenery)',
      '猫に癒やされる (Healed by cats)',
      '癒やし系 (Healing type)'
    ],
    notes: 'Common expression on SNS. Important concept in stressful modern society.',
    synonyms: ['リラックスする', '心が落ち着く']
  },
  'なう': {
    text: 'なう',
    reading: 'なう',
    meaning: 'Now (from English "now")',
    explanation: 'From English "now". Means "currently doing ~" when attached after a verb.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '渋谷なう (Currently in Shibuya)',
      '授業なう (Currently in class)',
      'ランチなう (Currently having lunch)'
    ],
    notes: 'Expression used since the early days of Twitter. Somewhat old but still used.',
    synonyms: ['今', '〜中']
  },
  '詰む': {
    text: '詰む',
    reading: 'つむ',
    meaning: 'To be stuck, Game over (from 詰み in chess/shogi)',
    explanation: 'From "詰み" (checkmate) in shogi/chess. Means a situation is at a dead end with no way out.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '課題が詰んだ (I\'m stuck with my homework)',
      '人生詰んだ (Life is over)',
      '積む (Different meaning: buying games/books and leaving them unplayed/unread)'
    ],
    notes: 'From gaming terminology to everyday conversation. Expresses a hopeless situation.',
    synonyms: ['行き詰まる', '手詰まり']
  },
  '無理ゲー': {
    text: '無理ゲー',
    reading: 'むりげー',
    meaning: 'Impossible, Mission impossible (from "impossible game")',
    explanation: 'Abbreviation of "無理なゲーム" (impossible game). Refers to a situation or task that\'s impossibly difficult.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'このテスト無理ゲー (This test is impossible)',
      '無理ゲーすぎる (Too impossible)',
      '無理ゲーを強いられる (Forced into an impossible situation)'
    ],
    notes: 'Expression from gaming culture. Lightly and humorously expresses difficult situations.',
    synonyms: ['不可能', '無理']
  },
  '超': {
    text: '超',
    reading: 'ちょう',
    meaning: 'Super, Ultra, Very',
    explanation: 'Prefix meaning "super" or "ultra". Used to emphasize something.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '超おいしい (Super delicious)',
      '超かわいい (Super cute)',
      '超やばい (Super crazy)'
    ],
    notes: 'Very common among young people. Can be attached to many adjectives.',
    synonyms: ['めっちゃ', 'すごく', 'とても']
  },
  'めっちゃ': {
    text: 'めっちゃ',
    reading: 'めっちゃ',
    meaning: 'Very, Extremely',
    explanation: 'Kansai dialect that became popular nationwide. Means "very" or "extremely".',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'めっちゃおいしい (Extremely delicious)',
      'めっちゃ楽しい (So fun)',
      'めっちゃかわいい (Super cute)'
    ],
    notes: 'Originally from Kansai region, now used nationwide by young people.',
    synonyms: ['とても', 'すごく', '超']
  },
  '草': {
    text: '草',
    reading: 'くさ',
    meaning: 'lol, haha (from www looking like grass)',
    explanation: 'Because "www" looks like grass (草), this became a slang term for laughter.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'それ草 (That\'s funny)',
      '草生える (Grass is growing = that\'s funny)',
      '大草原 (Big grassland = very funny)'
    ],
    notes: 'Internet slang. More recent than "w".',
    synonyms: ['ｗ', '笑']
  },
  'わろた': {
    text: 'わろた',
    reading: 'わろた',
    meaning: 'I laughed (Kansai dialect)',
    explanation: 'Kansai dialect form of "笑った" (waratta, I laughed). Used to express laughter.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'わろた (I laughed)',
      'わろたわろた (Laughed a lot)'
    ],
    notes: 'Kansai dialect that became popular online.',
    synonyms: ['笑った', 'わらた']
  },
  '神': {
    text: '神',
    reading: 'かみ',
    meaning: 'God, Amazing, Perfect',
    explanation: 'Literally means "god", but used to mean something is amazing or perfect.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'この曲神 (This song is god-tier)',
      '神すぎる (Too god-like)',
      '神対応 (Perfect response)'
    ],
    notes: 'Used to express that something is exceptionally good.',
    synonyms: ['素晴らしい', '完璧']
  },
  'ぴえん': {
    text: 'ぴえん',
    reading: 'ぴえん',
    meaning: 'Sad, Crying (emoji-like expression)',
    explanation: 'Onomatopoeia representing crying. Used to express sadness or disappointment in a cute way.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'テスト失敗してぴえん (Failed the test, so sad)',
      'ぴえん超えてぱおん (Beyond sad, now surprised)'
    ],
    notes: 'Very casual expression, mainly used by young people. Derived from emoji culture.',
    synonyms: ['悲しい', '泣く']
  },
  'ぱおん': {
    text: 'ぱおん',
    reading: 'ぱおん',
    meaning: 'Surprised, Shocked',
    explanation: 'Onomatopoeia representing surprise. Used after "ぴえん" to show even more emotion.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'ぴえん超えてぱおん (Beyond sad, now surprised)',
      'ぱおん (Surprised)'
    ],
    notes: 'Very casual, mainly used by young people.',
    synonyms: ['驚いた', 'びっくり']
  },
  'てぇてぇ': {
    text: 'てぇてぇ',
    reading: 'てぇてぇ',
    meaning: 'Cute, Sweet (from 尊い)',
    explanation: 'Variation of "尊い" (touii). Expresses that something is cute or sweet.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'このカップルてぇてぇ (This couple is so sweet)',
      'てぇてぇすぎる (Too cute)'
    ],
    notes: 'Very casual, used in fan culture.',
    synonyms: ['尊い', 'かわいい']
  },
  'うぽつ': {
    text: 'うぽつ',
    reading: 'うぽつ',
    meaning: 'Thanks for the upload (from うpおつ)',
    explanation: 'Abbreviation of "うpおつ" (up otsu, thanks for uploading). Used to thank someone for uploading content.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'うぽつ (Thanks for the upload)',
      'うぽつです (Thanks for the upload)'
    ],
    notes: 'Internet slang, mainly used on image boards.',
    synonyms: ['ありがとう']
  },
  '乙': {
    text: '乙',
    reading: 'おつ',
    meaning: 'Thanks, Good job (from おつかれ)',
    explanation: 'Shortened form of "おつかれ" (otsukare). Used to say thanks or good job.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '乙 (Thanks)',
      '乙です (Thanks)'
    ],
    notes: 'Very casual, mainly used online.',
    synonyms: ['おつかれ', 'ありがとう']
  },
  'わかる': {
    text: 'わかる',
    reading: 'わかる',
    meaning: 'I understand, I know',
    explanation: 'Means "I understand" or "I know". Very common in casual conversation.',
    formality: '普通' as FormalityLevel,
    examples: [
      'わかる (I understand)',
      'わかるわかる (I totally get it)',
      'わかる〜 (I know~)'
    ],
    notes: 'Basic expression. Can be used in various situations.',
    synonyms: ['理解する', '知っている']
  },
  'わかるわかる': {
    text: 'わかるわかる',
    reading: 'わかるわかる',
    meaning: 'I totally get it, I completely understand',
    explanation: 'Repeated form of "わかる" to emphasize strong agreement or understanding.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'わかるわかる (I totally get it)',
      'わかるわかるそれな (I totally get it, exactly)'
    ],
    notes: 'Very casual, shows strong empathy.',
    synonyms: ['わかる', 'それな']
  },
  'つらい': {
    text: 'つらい',
    reading: 'つらい',
    meaning: 'Hard, Difficult, Painful',
    explanation: 'Means something is hard, difficult, or painful. Often used to express emotional difficulty.',
    formality: '普通' as FormalityLevel,
    examples: [
      'つらい (It\'s hard)',
      'つらすぎる (Too hard)',
      'つらみが深い (Very painful)'
    ],
    notes: 'Common expression for expressing difficulty.',
    synonyms: ['難しい', '大変']
  },
  'つらみ': {
    text: 'つらみ',
    reading: 'つらみ',
    meaning: 'Pain, Difficulty (noun form)',
    explanation: 'Noun form of "つらい". Expresses pain or difficulty.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'つらみが深い (Very painful)',
      'つらみしかない (Only pain)'
    ],
    notes: 'Internet slang pattern using "〜み" suffix.',
    synonyms: ['つらい', '苦しみ']
  },
  'うれしみ': {
    text: 'うれしみ',
    reading: 'うれしみ',
    meaning: 'Happiness, Joy (noun form)',
    explanation: 'Noun form of "うれしい" (happy). Expresses happiness or joy.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'うれしみが深い (Very happy)',
      'うれしみしかない (Only happiness)'
    ],
    notes: 'Internet slang pattern using "〜み" suffix.',
    synonyms: ['うれしい', '喜び']
  },
  'かわいい': {
    text: 'かわいい',
    reading: 'かわいい',
    meaning: 'Cute, Adorable',
    explanation: 'Means cute or adorable. Very common expression.',
    formality: '普通' as FormalityLevel,
    examples: [
      'かわいい (Cute)',
      'かわいすぎる (Too cute)',
      'かわいい〜 (So cute~)'
    ],
    notes: 'Basic expression for cuteness.',
    synonyms: ['可愛らしい', 'キュート']
  },
  'かわいすぎる': {
    text: 'かわいすぎる',
    reading: 'かわいすぎる',
    meaning: 'Too cute, Extremely cute',
    explanation: 'Emphatic form of "かわいい". Means something is extremely cute.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'かわいすぎる (Too cute)',
      'かわいすぎて無理 (Too cute, I can\'t handle it)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['かわいい', '超かわいい']
  },
  '無理': {
    text: '無理',
    reading: 'むり',
    meaning: 'Impossible, Can\'t do it',
    explanation: 'Means something is impossible or you can\'t do it.',
    formality: '普通' as FormalityLevel,
    examples: [
      '無理 (Impossible)',
      '無理ゲー (Impossible game)',
      '無理すぎる (Too impossible)'
    ],
    notes: 'Common expression for impossibility.',
    synonyms: ['不可能', 'できない']
  },
  '無理すぎる': {
    text: '無理すぎる',
    reading: 'むりすぎる',
    meaning: 'Too impossible, Way too hard',
    explanation: 'Emphatic form of "無理". Means something is way too impossible.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '無理すぎる (Too impossible)',
      '無理すぎて無理 (Too impossible, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['無理', '無理ゲー']
  },
  '最高': {
    text: '最高',
    reading: 'さいこう',
    meaning: 'The best, Awesome',
    explanation: 'Means "the best" or "awesome". Used to express something is excellent.',
    formality: '普通' as FormalityLevel,
    examples: [
      '最高 (The best)',
      '最高すぎる (Too awesome)',
      '最高だ (It\'s the best)'
    ],
    notes: 'Common expression for excellence.',
    synonyms: ['素晴らしい', '最良']
  },
  '最悪': {
    text: '最悪',
    reading: 'さいあく',
    meaning: 'The worst, Terrible',
    explanation: 'Means "the worst" or "terrible". Used to express something is very bad.',
    formality: '普通' as FormalityLevel,
    examples: [
      '最悪 (The worst)',
      '最悪すぎる (Too terrible)',
      '最悪だ (It\'s the worst)'
    ],
    notes: 'Common expression for something very bad.',
    synonyms: ['ひどい', '最低']
  },
  'やばすぎる': {
    text: 'やばすぎる',
    reading: 'やばすぎる',
    meaning: 'Too crazy, Way too intense',
    explanation: 'Emphatic form of "やばい". Means something is way too crazy or intense.',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'やばすぎる (Too crazy)',
      'やばすぎて無理 (Too crazy, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['やばい', '超やばい']
  },
  'まじ': {
    text: 'まじ',
    reading: 'まじ',
    meaning: 'Seriously, Really (shortened)',
    explanation: 'Shortened form of "マジで". Means "seriously" or "really".',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'まじ (Seriously)',
      'まじで (Seriously)',
      'まじか (Really?)'
    ],
    notes: 'Very casual, even shorter than "マジで".',
    synonyms: ['マジで', '本当に']
  },
  'まじか': {
    text: 'まじか',
    reading: 'まじか',
    meaning: 'Really? Seriously?',
    explanation: 'Question form of "まじ". Means "really?" or "seriously?".',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'まじか (Really?)',
      'まじかよ (Seriously?)',
      'まじか... (Really...?)'
    ],
    notes: 'Very casual question form.',
    synonyms: ['本当？', 'マジで？']
  },
  'やば': {
    text: 'やば',
    reading: 'やば',
    meaning: 'Crazy, Intense (shortened)',
    explanation: 'Shortened form of "やばい". Means "crazy" or "intense".',
    formality: 'とてもカジュアル' as FormalityLevel,
    examples: [
      'やば (Crazy)',
      'やばい (Crazy)',
      'やばすぎ (Too crazy)'
    ],
    notes: 'Very casual, even shorter than "やばい".',
    synonyms: ['やばい', 'すごい']
  },
  'おいしい': {
    text: 'おいしい',
    reading: 'おいしい',
    meaning: 'Delicious, Tasty',
    explanation: 'Means delicious or tasty. Basic expression for food.',
    formality: '普通' as FormalityLevel,
    examples: [
      'おいしい (Delicious)',
      'おいしすぎる (Too delicious)',
      'おいしい〜 (So delicious~)'
    ],
    notes: 'Basic expression for food.',
    synonyms: ['うまい', '美味']
  },
  'おいしすぎる': {
    text: 'おいしすぎる',
    reading: 'おいしすぎる',
    meaning: 'Too delicious, Extremely tasty',
    explanation: 'Emphatic form of "おいしい". Means something is extremely delicious.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'おいしすぎる (Too delicious)',
      'おいしすぎて無理 (Too delicious, I can\'t handle it)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['おいしい', '超おいしい']
  },
  'うまい': {
    text: 'うまい',
    reading: 'うまい',
    meaning: 'Delicious, Good (casual)',
    explanation: 'Casual way to say "delicious" or "good". More casual than "おいしい".',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'うまい (Good)',
      'うますぎる (Too good)',
      'うまい！ (Good!)'
    ],
    notes: 'Casual expression, mainly used by men.',
    synonyms: ['おいしい', '美味']
  },
  'うますぎる': {
    text: 'うますぎる',
    reading: 'うますぎる',
    meaning: 'Too good, Extremely good',
    explanation: 'Emphatic form of "うまい". Means something is extremely good.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'うますぎる (Too good)',
      'うますぎて無理 (Too good, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['うまい', '超うまい']
  },
  '楽しい': {
    text: '楽しい',
    reading: 'たのしい',
    meaning: 'Fun, Enjoyable',
    explanation: 'Means fun or enjoyable. Basic expression for enjoyment.',
    formality: '普通' as FormalityLevel,
    examples: [
      '楽しい (Fun)',
      '楽しすぎる (Too fun)',
      '楽しい〜 (So fun~)'
    ],
    notes: 'Basic expression for fun.',
    synonyms: ['面白い', '愉快']
  },
  '楽しすぎる': {
    text: '楽しすぎる',
    reading: 'たのしすぎる',
    meaning: 'Too fun, Extremely fun',
    explanation: 'Emphatic form of "楽しい". Means something is extremely fun.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '楽しすぎる (Too fun)',
      '楽しすぎて無理 (Too fun, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['楽しい', '超楽しい']
  },
  '面白い': {
    text: '面白い',
    reading: 'おもしろい',
    meaning: 'Interesting, Funny',
    explanation: 'Means interesting or funny. Can mean both.',
    formality: '普通' as FormalityLevel,
    examples: [
      '面白い (Interesting/Funny)',
      '面白すぎる (Too interesting/funny)',
      '面白い〜 (So interesting~)'
    ],
    notes: 'Basic expression, can mean both interesting and funny.',
    synonyms: ['楽しい', '興味深い']
  },
  '面白すぎる': {
    text: '面白すぎる',
    reading: 'おもしろすぎる',
    meaning: 'Too interesting/funny, Extremely interesting',
    explanation: 'Emphatic form of "面白い". Means something is extremely interesting or funny.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '面白すぎる (Too interesting)',
      '面白すぎて無理 (Too interesting, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['面白い', '超面白い']
  },
  '疲れた': {
    text: '疲れた',
    reading: 'つかれた',
    meaning: 'Tired, Exhausted',
    explanation: 'Means tired or exhausted. Past tense of "疲れる".',
    formality: '普通' as FormalityLevel,
    examples: [
      '疲れた (Tired)',
      '疲れすぎた (Too tired)',
      '疲れた〜 (So tired~)'
    ],
    notes: 'Common expression for being tired.',
    synonyms: ['くたびれた', '疲労']
  },
  '疲れすぎた': {
    text: '疲れすぎた',
    reading: 'つかれすぎた',
    meaning: 'Too tired, Extremely exhausted',
    explanation: 'Emphatic form of "疲れた". Means extremely tired.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '疲れすぎた (Too tired)',
      '疲れすぎて無理 (Too tired, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['疲れた', '超疲れた']
  },
  '眠い': {
    text: '眠い',
    reading: 'ねむい',
    meaning: 'Sleepy, Drowsy',
    explanation: 'Means sleepy or drowsy.',
    formality: '普通' as FormalityLevel,
    examples: [
      '眠い (Sleepy)',
      '眠すぎる (Too sleepy)',
      '眠い〜 (So sleepy~)'
    ],
    notes: 'Common expression for being sleepy.',
    synonyms: ['眠たい', '睡い']
  },
  '眠すぎる': {
    text: '眠すぎる',
    reading: 'ねむすぎる',
    meaning: 'Too sleepy, Extremely drowsy',
    explanation: 'Emphatic form of "眠い". Means extremely sleepy.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '眠すぎる (Too sleepy)',
      '眠すぎて無理 (Too sleepy, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['眠い', '超眠い']
  },
  '暑い': {
    text: '暑い',
    reading: 'あつい',
    meaning: 'Hot (weather)',
    explanation: 'Means hot (for weather).',
    formality: '普通' as FormalityLevel,
    examples: [
      '暑い (Hot)',
      '暑すぎる (Too hot)',
      '暑い〜 (So hot~)'
    ],
    notes: 'Basic expression for hot weather.',
    synonyms: ['熱い', '高温']
  },
  '暑すぎる': {
    text: '暑すぎる',
    reading: 'あつすぎる',
    meaning: 'Too hot, Extremely hot',
    explanation: 'Emphatic form of "暑い". Means extremely hot.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '暑すぎる (Too hot)',
      '暑すぎて無理 (Too hot, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['暑い', '超暑い']
  },
  '寒い': {
    text: '寒い',
    reading: 'さむい',
    meaning: 'Cold (weather)',
    explanation: 'Means cold (for weather).',
    formality: '普通' as FormalityLevel,
    examples: [
      '寒い (Cold)',
      '寒すぎる (Too cold)',
      '寒い〜 (So cold~)'
    ],
    notes: 'Basic expression for cold weather.',
    synonyms: ['冷たい', '低温']
  },
  '寒すぎる': {
    text: '寒すぎる',
    reading: 'さむすぎる',
    meaning: 'Too cold, Extremely cold',
    explanation: 'Emphatic form of "寒い". Means extremely cold.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '寒すぎる (Too cold)',
      '寒すぎて無理 (Too cold, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['寒い', '超寒い']
  },
  'かっこいい': {
    text: 'かっこいい',
    reading: 'かっこいい',
    meaning: 'Cool, Handsome',
    explanation: 'Means cool or handsome.',
    formality: '普通' as FormalityLevel,
    examples: [
      'かっこいい (Cool)',
      'かっこよすぎる (Too cool)',
      'かっこいい〜 (So cool~)'
    ],
    notes: 'Common expression for coolness.',
    synonyms: ['クール', '格好いい']
  },
  'かっこよすぎる': {
    text: 'かっこよすぎる',
    reading: 'かっこよすぎる',
    meaning: 'Too cool, Extremely cool',
    explanation: 'Emphatic form of "かっこいい". Means extremely cool.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'かっこよすぎる (Too cool)',
      'かっこよすぎて無理 (Too cool, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['かっこいい', '超かっこいい']
  },
  'すごい': {
    text: 'すごい',
    reading: 'すごい',
    meaning: 'Amazing, Great',
    explanation: 'Means amazing or great. Very versatile word.',
    formality: '普通' as FormalityLevel,
    examples: [
      'すごい (Amazing)',
      'すごすぎる (Too amazing)',
      'すごい〜 (So amazing~)'
    ],
    notes: 'Very common and versatile expression.',
    synonyms: ['すばらしい', '素晴らしい']
  },
  'すごすぎる': {
    text: 'すごすぎる',
    reading: 'すごすぎる',
    meaning: 'Too amazing, Extremely great',
    explanation: 'Emphatic form of "すごい". Means extremely amazing.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'すごすぎる (Too amazing)',
      'すごすぎて無理 (Too amazing, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['すごい', '超すごい']
  },
  '好き': {
    text: '好き',
    reading: 'すき',
    meaning: 'Like, Love',
    explanation: 'Means to like or love something.',
    formality: '普通' as FormalityLevel,
    examples: [
      '好き (Like)',
      '好きすぎる (Too much like)',
      '好き〜 (So like~)'
    ],
    notes: 'Basic expression for liking something.',
    synonyms: ['好む', '愛する']
  },
  '好きすぎる': {
    text: '好きすぎる',
    reading: 'すきすぎる',
    meaning: 'Too much like, Love too much',
    explanation: 'Emphatic form of "好き". Means to like or love something too much.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '好きすぎる (Love too much)',
      '好きすぎて無理 (Love too much, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['好き', '超好き']
  },
  '嫌い': {
    text: '嫌い',
    reading: 'きらい',
    meaning: 'Dislike, Hate',
    explanation: 'Means to dislike or hate something.',
    formality: '普通' as FormalityLevel,
    examples: [
      '嫌い (Dislike)',
      '嫌いすぎる (Too much dislike)',
      '嫌い〜 (So dislike~)'
    ],
    notes: 'Basic expression for disliking something.',
    synonyms: ['嫌う', '憎む']
  },
  '嫌いすぎる': {
    text: '嫌いすぎる',
    reading: 'きらいすぎる',
    meaning: 'Too much dislike, Hate too much',
    explanation: 'Emphatic form of "嫌い". Means to dislike or hate something too much.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '嫌いすぎる (Hate too much)',
      '嫌いすぎて無理 (Hate too much, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['嫌い', '超嫌い']
  },
  '苦手': {
    text: '苦手',
    reading: 'にがて',
    meaning: 'Not good at, Weak at',
    explanation: 'Means not good at or weak at something.',
    formality: '普通' as FormalityLevel,
    examples: [
      '苦手 (Not good at)',
      '苦手すぎる (Too not good at)',
      '苦手だ (I\'m not good at it)'
    ],
    notes: 'Common expression for being weak at something.',
    synonyms: ['不得意', '下手']
  },
  '苦手すぎる': {
    text: '苦手すぎる',
    reading: 'にがてすぎる',
    meaning: 'Too not good at, Extremely weak',
    explanation: 'Emphatic form of "苦手". Means extremely not good at something.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '苦手すぎる (Too not good at)',
      '苦手すぎて無理 (Too not good at, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['苦手', '超苦手']
  },
  '得意': {
    text: '得意',
    reading: 'とくい',
    meaning: 'Good at, Skilled at',
    explanation: 'Means good at or skilled at something.',
    formality: '普通' as FormalityLevel,
    examples: [
      '得意 (Good at)',
      '得意すぎる (Too good at)',
      '得意だ (I\'m good at it)'
    ],
    notes: 'Common expression for being good at something.',
    synonyms: ['上手', '得意']
  },
  '得意すぎる': {
    text: '得意すぎる',
    reading: 'とくいすぎる',
    meaning: 'Too good at, Extremely skilled',
    explanation: 'Emphatic form of "得意". Means extremely good at something.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '得意すぎる (Too good at)',
      '得意すぎて無理 (Too good at, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['得意', '超得意']
  },
  '難しい': {
    text: '難しい',
    reading: 'むずかしい',
    meaning: 'Difficult, Hard',
    explanation: 'Means difficult or hard.',
    formality: '普通' as FormalityLevel,
    examples: [
      '難しい (Difficult)',
      '難しすぎる (Too difficult)',
      '難しい〜 (So difficult~)'
    ],
    notes: 'Basic expression for difficulty.',
    synonyms: ['困難', '大変']
  },
  '難しすぎる': {
    text: '難しすぎる',
    reading: 'むずかしすぎる',
    meaning: 'Too difficult, Extremely hard',
    explanation: 'Emphatic form of "難しい". Means extremely difficult.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '難しすぎる (Too difficult)',
      '難しすぎて無理 (Too difficult, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['難しい', '超難しい']
  },
  '簡単': {
    text: '簡単',
    reading: 'かんたん',
    meaning: 'Easy, Simple',
    explanation: 'Means easy or simple.',
    formality: '普通' as FormalityLevel,
    examples: [
      '簡単 (Easy)',
      '簡単すぎる (Too easy)',
      '簡単だ (It\'s easy)'
    ],
    notes: 'Basic expression for easiness.',
    synonyms: ['易しい', '平易']
  },
  '簡単すぎる': {
    text: '簡単すぎる',
    reading: 'かんたんすぎる',
    meaning: 'Too easy, Extremely simple',
    explanation: 'Emphatic form of "簡単". Means extremely easy.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '簡単すぎる (Too easy)',
      '簡単すぎて無理 (Too easy, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['簡単', '超簡単']
  },
  '大変': {
    text: '大変',
    reading: 'たいへん',
    meaning: 'Hard, Difficult, Serious',
    explanation: 'Means hard, difficult, or serious.',
    formality: '普通' as FormalityLevel,
    examples: [
      '大変 (Hard)',
      '大変すぎる (Too hard)',
      '大変だ (It\'s hard)'
    ],
    notes: 'Common expression for difficulty.',
    synonyms: ['困難', '難しい']
  },
  '大変すぎる': {
    text: '大変すぎる',
    reading: 'たいへんすぎる',
    meaning: 'Too hard, Extremely difficult',
    explanation: 'Emphatic form of "大変". Means extremely hard.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '大変すぎる (Too hard)',
      '大変すぎて無理 (Too hard, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['大変', '超大変']
  },
  '忙しい': {
    text: '忙しい',
    reading: 'いそがしい',
    meaning: 'Busy',
    explanation: 'Means busy.',
    formality: '普通' as FormalityLevel,
    examples: [
      '忙しい (Busy)',
      '忙しすぎる (Too busy)',
      '忙しい〜 (So busy~)'
    ],
    notes: 'Common expression for being busy.',
    synonyms: ['多忙', '繁忙']
  },
  '忙しすぎる': {
    text: '忙しすぎる',
    reading: 'いそがしすぎる',
    meaning: 'Too busy, Extremely busy',
    explanation: 'Emphatic form of "忙しい". Means extremely busy.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '忙しすぎる (Too busy)',
      '忙しすぎて無理 (Too busy, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['忙しい', '超忙しい']
  },
  '暇': {
    text: '暇',
    reading: 'ひま',
    meaning: 'Free time, Not busy',
    explanation: 'Means free time or not busy.',
    formality: '普通' as FormalityLevel,
    examples: [
      '暇 (Free)',
      '暇すぎる (Too free)',
      '暇だ (I\'m free)'
    ],
    notes: 'Common expression for having free time.',
    synonyms: ['余暇', '空き時間']
  },
  '暇すぎる': {
    text: '暇すぎる',
    reading: 'ひますぎる',
    meaning: 'Too much free time, Extremely not busy',
    explanation: 'Emphatic form of "暇". Means extremely not busy.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '暇すぎる (Too free)',
      '暇すぎて無理 (Too free, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['暇', '超暇']
  },
  'うれしい': {
    text: 'うれしい',
    reading: 'うれしい',
    meaning: 'Happy, Glad',
    explanation: 'Means happy or glad.',
    formality: '普通' as FormalityLevel,
    examples: [
      'うれしい (Happy)',
      'うれしすぎる (Too happy)',
      'うれしい〜 (So happy~)'
    ],
    notes: 'Basic expression for happiness.',
    synonyms: ['喜ばしい', '愉快']
  },
  'うれしすぎる': {
    text: 'うれしすぎる',
    reading: 'うれしすぎる',
    meaning: 'Too happy, Extremely glad',
    explanation: 'Emphatic form of "うれしい". Means extremely happy.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'うれしすぎる (Too happy)',
      'うれしすぎて無理 (Too happy, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['うれしい', '超うれしい']
  },
  '悲しい': {
    text: '悲しい',
    reading: 'かなしい',
    meaning: 'Sad',
    explanation: 'Means sad.',
    formality: '普通' as FormalityLevel,
    examples: [
      '悲しい (Sad)',
      '悲しすぎる (Too sad)',
      '悲しい〜 (So sad~)'
    ],
    notes: 'Basic expression for sadness.',
    synonyms: ['哀しい', '憂鬱']
  },
  '悲しすぎる': {
    text: '悲しすぎる',
    reading: 'かなしすぎる',
    meaning: 'Too sad, Extremely sad',
    explanation: 'Emphatic form of "悲しい". Means extremely sad.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '悲しすぎる (Too sad)',
      '悲しすぎて無理 (Too sad, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['悲しい', '超悲しい']
  },
  '寂しい': {
    text: '寂しい',
    reading: 'さびしい',
    meaning: 'Lonely, Lonesome',
    explanation: 'Means lonely or lonesome.',
    formality: '普通' as FormalityLevel,
    examples: [
      '寂しい (Lonely)',
      '寂しすぎる (Too lonely)',
      '寂しい〜 (So lonely~)'
    ],
    notes: 'Common expression for loneliness.',
    synonyms: ['孤独', '一人']
  },
  '寂しすぎる': {
    text: '寂しすぎる',
    reading: 'さびしすぎる',
    meaning: 'Too lonely, Extremely lonesome',
    explanation: 'Emphatic form of "寂しい". Means extremely lonely.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '寂しすぎる (Too lonely)',
      '寂しすぎて無理 (Too lonely, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['寂しい', '超寂しい']
  },
  '怖い': {
    text: '怖い',
    reading: 'こわい',
    meaning: 'Scary, Frightening',
    explanation: 'Means scary or frightening.',
    formality: '普通' as FormalityLevel,
    examples: [
      '怖い (Scary)',
      '怖すぎる (Too scary)',
      '怖い〜 (So scary~)'
    ],
    notes: 'Basic expression for fear.',
    synonyms: ['恐ろしい', '恐怖']
  },
  '怖すぎる': {
    text: '怖すぎる',
    reading: 'こわすぎる',
    meaning: 'Too scary, Extremely frightening',
    explanation: 'Emphatic form of "怖い". Means extremely scary.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '怖すぎる (Too scary)',
      '怖すぎて無理 (Too scary, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['怖い', '超怖い']
  },
  '痛い': {
    text: '痛い',
    reading: 'いたい',
    meaning: 'Painful, It hurts',
    explanation: 'Means painful or it hurts.',
    formality: '普通' as FormalityLevel,
    examples: [
      '痛い (It hurts)',
      '痛すぎる (Too painful)',
      '痛い〜 (So painful~)'
    ],
    notes: 'Basic expression for pain.',
    synonyms: ['苦痛', '痛み']
  },
  '痛すぎる': {
    text: '痛すぎる',
    reading: 'いたすぎる',
    meaning: 'Too painful, Extremely painful',
    explanation: 'Emphatic form of "痛い". Means extremely painful.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '痛すぎる (Too painful)',
      '痛すぎて無理 (Too painful, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['痛い', '超痛い']
  },
  '気持ちいい': {
    text: '気持ちいい',
    reading: 'きもちいい',
    meaning: 'Feels good, Comfortable',
    explanation: 'Means feels good or comfortable.',
    formality: '普通' as FormalityLevel,
    examples: [
      '気持ちいい (Feels good)',
      '気持ちよすぎる (Too good)',
      '気持ちいい〜 (So good~)'
    ],
    notes: 'Common expression for feeling good.',
    synonyms: ['快適', '心地よい']
  },
  '気持ちよすぎる': {
    text: '気持ちよすぎる',
    reading: 'きもちよすぎる',
    meaning: 'Too good, Extremely comfortable',
    explanation: 'Emphatic form of "気持ちいい". Means extremely good.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '気持ちよすぎる (Too good)',
      '気持ちよすぎて無理 (Too good, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['気持ちいい', '超気持ちいい']
  },
  '気持ち悪い': {
    text: '気持ち悪い',
    reading: 'きもちわるい',
    meaning: 'Feels bad, Uncomfortable, Gross',
    explanation: 'Means feels bad, uncomfortable, or gross.',
    formality: '普通' as FormalityLevel,
    examples: [
      '気持ち悪い (Gross)',
      '気持ち悪すぎる (Too gross)',
      '気持ち悪い〜 (So gross~)'
    ],
    notes: 'Common expression for feeling bad or gross.',
    synonyms: ['不快', '不愉快']
  },
  '気持ち悪すぎる': {
    text: '気持ち悪すぎる',
    reading: 'きもちわるすぎる',
    meaning: 'Too gross, Extremely uncomfortable',
    explanation: 'Emphatic form of "気持ち悪い". Means extremely gross.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      '気持ち悪すぎる (Too gross)',
      '気持ち悪すぎて無理 (Too gross, impossible)'
    ],
    notes: 'Very casual, shows strong emotion.',
    synonyms: ['気持ち悪い', '超気持ち悪い']
  },
  'だるい': {
    text: 'だるい',
    reading: 'だるい',
    meaning: 'Lazy, Sluggish, Tired',
    explanation: 'Means lazy, sluggish, or tired.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'だるい (Lazy)',
      'だるすぎる (Too lazy)',
      'だるい〜 (So lazy~)'
    ],
    notes: 'Casual expression for feeling lazy.',
    synonyms: ['怠惰', '無気力']
  },
  'だるすぎる': {
    text: 'だるすぎる',
    reading: 'だるすぎる',
    meaning: 'Too lazy, Extremely sluggish',
    explanation: 'Emphatic form of "だるい". Means extremely lazy.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'だるすぎる (Too lazy)',
      'だるすぎて無理 (Too lazy, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['だるい', '超だるい']
  },
  'めんどくさい': {
    text: 'めんどくさい',
    reading: 'めんどくさい',
    meaning: 'Troublesome, Annoying',
    explanation: 'Means troublesome or annoying.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'めんどくさい (Troublesome)',
      'めんどくさすぎる (Too troublesome)',
      'めんどくさい〜 (So troublesome~)'
    ],
    notes: 'Casual expression for something troublesome.',
    synonyms: ['面倒', '煩わしい']
  },
  'めんどくさすぎる': {
    text: 'めんどくさすぎる',
    reading: 'めんどくさすぎる',
    meaning: 'Too troublesome, Extremely annoying',
    explanation: 'Emphatic form of "めんどくさい". Means extremely troublesome.',
    formality: 'カジュアル' as FormalityLevel,
    examples: [
      'めんどくさすぎる (Too troublesome)',
      'めんどくさすぎて無理 (Too troublesome, impossible)'
    ],
    notes: 'Very casual, shows strong emphasis.',
    synonyms: ['めんどくさい', '超めんどくさい']
  }
};
