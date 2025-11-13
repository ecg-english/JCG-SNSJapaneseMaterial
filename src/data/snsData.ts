import { SNSPost, Quiz } from '../types';
import { generatePosts } from './generatePosts';

// 200個以上の投稿を生成
export const snsPosts: SNSPost[] = generatePosts();

/* 既存の投稿データ（参考用、実際にはgeneratePosts()で生成される）
const originalPosts: SNSPost[] = [
  // Twitter投稿例
  {
    id: 'tw-001',
    platform: 'twitter',
    username: 'さくら',
    avatar: '🌸',
    content: '今日のテスト、マジでやばかった😭 でも終わったからエモい〜！これから友達とカフェ行ってくる☕️',
    timestamp: '2時間前',
    likes: 234,
    level: 'N3',
    category: '若者言葉',
    tags: ['マジで', 'やばい', 'エモい'],
    expressions: [
      {
        text: 'マジで',
        reading: 'まじで',
        meaning: 'Seriously, Really (very casual)',
        explanation: '「本当に」の非常にカジュアルな言い方です。若者がよく使います。フォーマルな場面では使わないでください。',
        formality: 'とてもカジュアル',
        examples: [
          'マジで疲れた',
          'マジでおいしい！',
          'マジで？（本当に？）'
        ],
        notes: '目上の人や初対面の人には使わない。友達や同年代との会話限定。',
        synonyms: ['本当に', 'めっちゃ', 'ホントに']
      },
      {
        text: 'やばい',
        reading: 'やばい',
        meaning: 'Crazy, Intense, Amazing (context-dependent)',
        explanation: '元々は「危険」という意味でしたが、現在は良い意味でも悪い意味でも使われます。文脈で判断します。',
        formality: 'とてもカジュアル',
        examples: [
          'このラーメン、やばいおいしい！（とてもおいしい）',
          'テスト、やばい…（難しい/準備不足）',
          'やばい、遅刻する！（大変）'
        ],
        notes: 'とても汎用性が高い言葉で、若者の間では頻繁に使われます。文脈が重要。',
        synonyms: ['すごい', 'ひどい', '大変']
      },
      {
        text: 'エモい',
        reading: 'えもい',
        meaning: 'Emotional, Nostalgic (from English "emotional")',
        explanation: '英語の「emotional」から来た新しい言葉。感傷的、感動的、ノスタルジックな気持ちを表します。',
        formality: 'とてもカジュアル',
        examples: [
          'この曲エモい',
          '夕焼けがエモい',
          'エモい写真撮れた'
        ],
        notes: '2010年代後半から若者の間で広まった比較的新しい表現です。',
        synonyms: ['感動的', 'しみじみする', 'ノスタルジック']
      }
    ]
  },
  {
    id: 'tw-002',
    platform: 'twitter',
    username: 'たけし',
    avatar: '🎮',
    content: 'おつかれ〜！今日は飲みに行く？ サクッと一杯どう？🍻',
    timestamp: '30分前',
    likes: 45,
    level: 'N4',
    category: '日常会話',
    tags: ['おつかれ', 'サクッと'],
    expressions: [
      {
        text: 'おつかれ',
        reading: 'おつかれ',
        meaning: 'Good job, Thanks for your work (casual)',
        explanation: '「お疲れ様です」の短縮形。友達同士で使うとてもカジュアルな挨拶です。',
        formality: 'カジュアル',
        examples: [
          'おつかれ〜',
          'おつかれさまでした（より丁寧）',
          'おつです（さらに短縮）'
        ],
        notes: '仕事終わりや何かを終えた後に使います。「お疲れ様です」が正式な形。',
        synonyms: ['お疲れ様', 'ご苦労様']
      },
      {
        text: 'サクッと',
        reading: 'さくっと',
        meaning: 'Quickly, Casually, Lightly',
        explanation: '短時間で、気軽に、簡単に何かをするという意味です。擬音語から来ています。',
        formality: 'カジュアル',
        examples: [
          'サクッと終わらせる',
          'サクッと食べる',
          'サクッと会おう'
        ],
        notes: '軽快な印象を与える表現で、SNSでよく使われます。',
        synonyms: ['手早く', '軽く', 'ちゃちゃっと']
      }
    ]
  },
  {
    id: 'tw-003',
    platform: 'twitter',
    username: 'みお',
    avatar: '🐱',
    content: 'これな。ほんとそれな。わかりみが深い🤝',
    timestamp: '1時間前',
    likes: 892,
    level: 'N3',
    category: 'リアクション',
    tags: ['それな', 'わかりみ'],
    expressions: [
      {
        text: 'それな',
        reading: 'それな',
        meaning: 'Exactly, I agree, That\'s right',
        explanation: '「それはそうだね」の短縮形。強く同意するときに使います。SNSで非常によく見る表現です。',
        formality: 'とてもカジュアル',
        examples: [
          'A: 今日暑いね B: それな',
          'ほんとそれな',
          'まじでそれな'
        ],
        notes: '若者言葉の代表的な表現。フォーマルな場面では「そうですね」を使いましょう。'
      },
      {
        text: 'わかりみが深い',
        reading: 'わかりみがふかい',
        meaning: 'I really understand, Very relatable',
        explanation: '「わかる」+「み（接尾辞）」+「深い」。非常によくわかる、共感できるという意味の造語です。',
        formality: 'とてもカジュアル',
        examples: [
          'わかりみが深すぎる',
          'わかりみしかない',
          'つらみが深い（同じパターン）'
        ],
        notes: 'インターネットスラングで、「〜み」は様々な言葉に付けられます（つらみ、うれしみなど）。',
        synonyms: ['よくわかる', '共感する']
      }
    ]
  },
  {
    id: 'ig-001',
    platform: 'instagram',
    username: 'あやか_cafe',
    avatar: '☕',
    content: '今日のランチ🍽✨\nめちゃくちゃ映える〜！インスタ映え最高💕\n\n#カフェ巡り #おしゃれカフェ #映え',
    timestamp: '4時間前',
    likes: 1203,
    level: 'N3',
    category: 'トレンド',
    tags: ['映える', 'インスタ映え', 'めちゃくちゃ'],
    expressions: [
      {
        text: '映える',
        reading: 'ばえる',
        meaning: 'Photogenic, looks good (on Instagram)',
        explanation: '「インスタ映え」から来た動詞。写真に撮って見栄えが良いという意味です。',
        formality: 'カジュアル',
        examples: [
          'この料理、めっちゃ映える',
          '映えスポット',
          '映え写真'
        ],
        notes: '2017年の流行語大賞。SNS文化から生まれた表現です。',
        synonyms: ['見栄えが良い', 'フォトジェニック']
      },
      {
        text: 'めちゃくちゃ',
        reading: 'めちゃくちゃ',
        meaning: 'Very, Extremely, So much',
        explanation: '「とても」「非常に」のカジュアルな強調表現です。',
        formality: 'カジュアル',
        examples: [
          'めちゃくちゃおいしい',
          'めちゃくちゃ楽しい',
          'めちゃ（さらに短縮）'
        ],
        notes: '「めっちゃ」とも言います。若者の間で頻繁に使われます。',
        synonyms: ['とても', 'すごく', 'めっちゃ', '超']
      }
    ]
  },
  {
    id: 'line-001',
    platform: 'line',
    username: 'ゆうき',
    avatar: '🏀',
    content: 'おけまる〜！\nりょ！\n了解です👌',
    timestamp: '今',
    likes: 0,
    level: 'N4',
    category: '略語',
    tags: ['おけまる', 'りょ', '了解'],
    expressions: [
      {
        text: 'おけまる',
        reading: 'おけまる',
        meaning: 'OK (very casual slang)',
        explanation: '「OK」+「まる（丸、◯）」。OKの可愛い言い方です。主にLINEなどのメッセージで使います。',
        formality: 'とてもカジュアル',
        examples: [
          'A: 明日3時でいい？ B: おけまる',
          'おけまる水産（ふざけた言い方）'
        ],
        notes: '若者言葉。可愛らしい印象を与えます。男性でも使う人がいます。',
        synonyms: ['OK', 'オッケー', 'いいよ']
      },
      {
        text: 'りょ',
        reading: 'りょ',
        meaning: 'Got it, Roger (from 了解)',
        explanation: '「了解」の超短縮形。メッセージアプリで素早く返事をするときに使います。',
        formality: 'とてもカジュアル',
        examples: [
          'りょ',
          'りょうかい',
          '了解'
        ],
        notes: '非常に短いので、親しい間柄でのみ使用。目上の人には「承知しました」などを使いましょう。',
        synonyms: ['了解', 'わかった', 'OK']
      }
    ]
  },
  {
    id: 'tw-004',
    platform: 'twitter',
    username: 'けんた',
    avatar: '🎸',
    content: 'バズってる！！！\nえぐいてぇ〜😂\nまさかのバズり方してるｗ',
    timestamp: '15分前',
    likes: 5432,
    level: 'N2',
    category: 'ネットスラング',
    tags: ['バズる', 'えぐい', 'ｗ'],
    expressions: [
      {
        text: 'バズる',
        reading: 'ばずる',
        meaning: 'To go viral, to become trending',
        explanation: '英語の「buzz」から。SNSで急激に拡散され、話題になることを意味します。',
        formality: 'カジュアル',
        examples: [
          'この動画がバズった',
          'バズり狙い',
          'プチバズ'
        ],
        notes: 'SNS時代の必須用語。Twitterで特によく使われます。',
        synonyms: ['話題になる', '拡散される']
      },
      {
        text: 'えぐい',
        reading: 'えぐい',
        meaning: 'Intense, Extreme, Harsh',
        explanation: '元々は「刺激が強い」という意味でしたが、「すごい」「激しい」という意味でも使われます。',
        formality: 'カジュアル',
        examples: [
          'えぐいくらい難しい',
          'えぐいほどおいしい',
          'えぐいてぇ（えぐいという意味）'
        ],
        notes: '「やばい」と似た使い方。良い意味でも悪い意味でも使います。'
      },
      {
        text: 'ｗ',
        reading: 'わら / だぶりゅー',
        meaning: 'lol, haha (from 笑い)',
        explanation: '「笑い」のローマ字「warai」の頭文字。英語の「lol」に相当します。',
        formality: 'カジュアル',
        examples: [
          'それなｗ',
          'まじでｗｗｗ',
          '草（くさ、wwwが草に見えることから）'
        ],
        notes: '複数並べて「wwwww」とすると、大笑いを表します。「草」とも言います。'
      }
    ]
  },
  {
    id: 'tw-005',
    platform: 'twitter',
    username: 'まりな',
    avatar: '🎀',
    content: '尊い…この推しカップル尊すぎて無理😭💕\n推せる〜！ガチ恋案件です',
    timestamp: '45分前',
    likes: 678,
    level: 'N2',
    category: '感情表現',
    tags: ['尊い', '推し', 'ガチ恋'],
    expressions: [
      {
        text: '尊い',
        reading: 'とうとい',
        meaning: 'Precious, Blessed (in fan context)',
        explanation: '元々は「神聖な」という意味ですが、オタク文化では「素晴らしすぎて神々しい」という意味で使います。',
        formality: 'カジュアル',
        examples: [
          '尊い…',
          '尊すぎる',
          '尊み（名詞形）'
        ],
        notes: 'アニメ、アイドル、推しキャラなどに対して使います。感動や興奮を表現。',
        synonyms: ['素晴らしい', '神']
      },
      {
        text: '推し',
        reading: 'おし',
        meaning: 'Favorite, One\'s favorite idol/character',
        explanation: '「推薦する」から。自分が特に応援している人やキャラクターのことです。',
        formality: 'カジュアル',
        examples: [
          '私の推しは〇〇',
          '推し活（推しを応援する活動）',
          '推しが尊い'
        ],
        notes: 'アイドル・声優・キャラクター文化で必須の言葉。',
        synonyms: ['お気に入り', '好きな人']
      },
      {
        text: 'ガチ恋',
        reading: 'がちこい',
        meaning: 'Serious love/crush (genuine romantic feelings)',
        explanation: '「ガチ（本気）」+「恋」。アイドルやキャラクターに本気で恋愛感情を持つこと。',
        formality: 'とてもカジュアル',
        examples: [
          'ガチ恋になった',
          'ガチ恋勢',
          'ガチ恋案件'
        ],
        notes: 'オタク文化の用語。冗談半分で使うこともあります。'
      }
    ]
  },
  {
    id: 'line-002',
    platform: 'line',
    username: 'ひろし',
    avatar: '🍜',
    content: 'おk\nそれで👍\nｗｋｔｋ',
    timestamp: '2分前',
    likes: 0,
    level: 'N3',
    category: '略語',
    tags: ['おk', 'ｗｋｔｋ'],
    expressions: [
      {
        text: 'おk',
        reading: 'おけ / おけい',
        meaning: 'OK (internet slang)',
        explanation: '「OK」の日本語インターネットスラング表記。素早く返事するときに使います。',
        formality: 'とてもカジュアル',
        examples: [
          'おk',
          'おｋ',
          'ok'
        ],
        notes: 'メッセージアプリやチャットでよく使われる表記。',
        synonyms: ['OK', 'おけまる', 'りょ']
      },
      {
        text: 'ｗｋｔｋ',
        reading: 'わくわくてかてか / わくてか',
        meaning: 'Excited, Can\'t wait (from わくわくテカテカ)',
        explanation: '「わくわくテカテカ」の頭文字。非常に期待して興奮している状態を表します。',
        formality: 'とてもカジュアル',
        examples: [
          '明日のイベントwktk',
          'wktkが止まらない'
        ],
        notes: '2000年代のインターネット掲示板文化から。今でもネット上で使われます。',
        synonyms: ['わくわく', '楽しみ']
      }
    ]
  },
  {
    id: 'ig-002',
    platform: 'instagram',
    username: 'たかし_travel',
    avatar: '✈️',
    content: 'ここ、マジで絶景すぎる🏔✨\nチル旅最高！\n癒やされる〜\n\n#旅行 #絶景 #チル',
    timestamp: '6時間前',
    likes: 2341,
    level: 'N3',
    category: '感情表現',
    tags: ['絶景', 'チル', '癒やされる'],
    expressions: [
      {
        text: 'チル',
        reading: 'ちる',
        meaning: 'Chill, Relax (from English "chill")',
        explanation: '英語の「chill」から。リラックスする、まったりすることを意味します。',
        formality: 'カジュアル',
        examples: [
          'チルする',
          'チルい（形容詞）',
          'チル旅'
        ],
        notes: '2020年前後から若者の間で流行。落ち着いた雰囲気を表現。',
        synonyms: ['リラックス', 'まったり', 'のんびり']
      },
      {
        text: '癒やされる',
        reading: 'いやされる',
        meaning: 'To be healed, To feel relaxed/comforted',
        explanation: '心が穏やかになる、リラックスすることを表します。',
        formality: '普通',
        examples: [
          '景色に癒やされる',
          '猫に癒やされる',
          '癒やし系'
        ],
        notes: 'SNSでよく使われる表現。ストレス社会での重要な概念。',
        synonyms: ['リラックスする', '心が落ち着く']
      }
    ]
  },
  {
    id: 'tw-006',
    platform: 'twitter',
    username: 'りか',
    avatar: '📚',
    content: 'テスト勉強なう📝\n詰んだ…もう無理ゲー\n誰か助けて〜！！',
    timestamp: '1時間前',
    likes: 234,
    level: 'N3',
    category: 'ネットスラング',
    tags: ['なう', '詰む', '無理ゲー'],
    expressions: [
      {
        text: 'なう',
        reading: 'なう',
        meaning: 'Now (from English "now")',
        explanation: '英語の「now」。「今〜している」という意味で、動詞の後ろに付けます。',
        formality: 'カジュアル',
        examples: [
          '渋谷なう',
          '授業なう',
          'ランチなう'
        ],
        notes: 'Twitter黎明期から使われている表現。やや古いですが今でも使われます。',
        synonyms: ['今', '〜中']
      },
      {
        text: '詰む',
        reading: 'つむ',
        meaning: 'To be stuck, Game over (from 詰み in chess/shogi)',
        explanation: '将棋の「詰み」から。状況が行き詰まり、どうしようもない状態を表します。',
        formality: 'カジュアル',
        examples: [
          '課題が詰んだ',
          '人生詰んだ',
          '積む（別の意味：ゲームや本を買って放置）'
        ],
        notes: 'ゲーム用語から日常会話へ。絶望的な状況を表現。',
        synonyms: ['行き詰まる', '手詰まり']
      },
      {
        text: '無理ゲー',
        reading: 'むりげー',
        meaning: 'Impossible, Mission impossible (from "impossible game")',
        explanation: '「無理なゲーム」の略。クリア不可能なほど難しい状況や課題を指します。',
        formality: 'とてもカジュアル',
        examples: [
          'このテスト無理ゲー',
          '無理ゲーすぎる',
          '無理ゲーを強いられる'
        ],
        notes: 'ゲーム文化から生まれた表現。困難な状況を軽くユーモラスに表現。',
        synonyms: ['不可能', '無理']
      }
    ]
  }
];
*/

// クイズデータ
export const quizzes: Quiz[] = [
  {
    id: 'quiz-001',
    type: 'multiple-choice',
    question: 'What is the most appropriate meaning of "マジで"?',
    options: ['Really', 'Maybe', 'A little', 'Not at all'],
    correctAnswer: 0,
    explanation: '"マジで" is a very casual expression for "really". It is often used among young people.',
    relatedPostId: 'tw-001'
  },
  {
    id: 'quiz-002',
    type: 'fill-in-blank',
    question: '"この写真、めっちゃ____！"\n(This photo is very beautiful and perfect for posting on SNS)',
    correctAnswer: '映える',
    explanation: '"映える" means that something looks good in photos and has great visual appeal. It is commonly used on SNS platforms like Instagram.',
    relatedPostId: 'ig-001'
  },
  {
    id: 'quiz-003',
    type: 'multiple-choice',
    question: 'Your friend asked you "明日3時でおけまる？". What does this mean?',
    options: ['Is 3 PM tomorrow OK?', 'Is 3 PM tomorrow impossible?', 'Is 3 PM tomorrow round?', 'Will it end at 3 PM tomorrow?'],
    correctAnswer: 0,
    explanation: '"おけまる" is a cute way of saying "OK" in youth slang. It is mainly used in messaging apps like LINE.',
    relatedPostId: 'line-001'
  },
  {
    id: 'quiz-004',
    type: 'multiple-choice',
    question: 'When do you use "それな"?',
    options: ['When strongly agreeing with someone', 'When disagreeing with someone', 'When asking a question', 'When apologizing'],
    correctAnswer: 0,
    explanation: '"それな" is a casual expression used when strongly agreeing with someone\'s opinion. You often see it on SNS.',
    relatedPostId: 'tw-003'
  },
  {
    id: 'quiz-005',
    type: 'fill-in-blank',
    question: '"この投稿が____て、フォロワーが1000人増えた！"\n(This post went viral on SNS)',
    correctAnswer: 'バズっ',
    explanation: '"バズる" comes from the English word "buzz" and means that something spreads rapidly and becomes a topic on SNS.',
    relatedPostId: 'tw-004'
  }
];

