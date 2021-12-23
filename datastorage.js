const quizzes = [
    {
        name: 'eatplaynap',
        message: 'eatplaynapの好きなグルメ漫画は次のうちどれ？',
        choices: ['美味しんぼ', 'クッキングパパ', '孤独のグルメ', '江戸前の旬'],
        correctChoice: 0,
        comment: '小学生のとき、友達のお父さんが持ってる漫画を借りてハマりました。'
    },
    {
        name: 'eatplaynap',
        message: '以下は実在する日本の音楽グループとその出身サークルです。eatplaynapが入っていたのは次のうちどれ？',
        choices: ['GEC (輩出:真心ブラザーズ)', 'GALAXY (輩出:ライムスター)', 'トラベリングライト (輩出:ノーナ・リーヴス)', 'British Beat Club (輩出:スクービードゥー)'],
        correctChoice: 2,
        comment: '飲み会だけに参加していました。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapの好きな食べ物は次のうちどれ？',
        choices: ['チーズ', '梅干し', 'パクチー', '讃岐うどん'],
        correctChoice: 1,
        comment: '梅干しに限らず、酸っぱくてしょっぱいものが好きです。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが幼少期住んでいたドイツの都市はどこ？',
        choices: ['デュッセルドルフ', 'ミュンヘン', 'フランクフルト', 'ハンブルク'],
        correctChoice: 3,
        comment: '父親の転勤で小3から中1まで住んでいました。日本人学校に通ってたのでドイツ語は喋れません。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが嫌いな食べ物は次のうちどれ？',
        choices: ['パセリ', 'ネギ', 'パクチー', 'ニラ'],
        correctChoice: 3,
        comment: '餃子を作るときはニラなしで作ります。'
    },
    {
        name: 'eatplaynap',
        message: '学生時代のeatplaynapがテストで取った最低点数は次のうちどれ？',
        choices: ['0', '6', '11', '28'],
        correctChoice: 1,
        comment: '中1のとき音楽で、高2のとき物理でそれぞれ6点を取りました。'
    },
    {
        name: 'eatplaynap',
        message: '高校時代のeatplaynapが熱中していたことは次のうちどれ？',
        choices: ['リアルな消しゴムはんこを彫る', '山手線の各駅を散歩する', 'ジャンプ漫画の二次創作サイト運営', '深夜ラジオのハガキ職人'],
        correctChoice: 0,
        comment: '先生に頼まれて似顔絵スタンプを作ったりしていました。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが行ったことのない県は次のうちどれ？',
        choices: ['新潟県', '沖縄県', '高知県', '宮崎県'],
        correctChoice: 3,
        comment: '宮崎県は映画『鉄砲玉の美学』のロケ地らしいので、いつか行ってみたいです。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが1番好きな映画は次のうちどれ？',
        choices: ['『ファイト・クラブ』', '『ハロルドとモード 少年は虹を渡る』', '『仁義なき戦い 広島死闘篇』', '『ボヘミアンラプソディ』'],
        correctChoice: 1,
        comment: '"やりたいことをやろう！自分のユニークさを愛そう"というメッセージが大好きで、人生の指針になっている映画です。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが行ったことのある国は次のうちどれ？',
        choices: ['ベトナム', 'マレーシア', 'シンガポール', '韓国'],
        correctChoice: 0,
        comment: '事前に調べず、ホーチミン市の雨季(7月)に行ってずっと雨に降られていました。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapの身長は何cm？',
        choices: ['155', '160', '165', '170'],
        correctChoice: 1,
        comment: '小6で身長が止まってからずっと伸びていません…。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapの出身地は？',
        choices: ['茨城県', '群馬県', '埼玉県', '栃木県'],
        correctChoice: 0,
        comment: '今も茨城県在住です！関東地方から出るのは勇気がいります！'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapの生まれた年は？',
        choices: ['1990', '1991', '1992', '1993'],
        correctChoice: 3,
        comment: 'Rubyと同い年です。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapには1歳違いのきょうだいがいます。次のうちどれがいる？',
        choices: ['兄', '姉', '弟', '妹'],
        correctChoice: 0,
        comment: '兄はLinuxと同じ誕生日(1991年9月17日)です。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが怖いと思っているものは次のうちどれ？',
        choices: ['雷', '火', '虫', '犬'],
        correctChoice: 1,
        comment: '火が怖くてマッチが擦れないし、花火が持てません。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが嫌いな季節は次のうちどれ？',
        choices: ['春', '夏', '秋', '冬'],
        correctChoice: 1,
        comment: '暑いのが大嫌いなので夏の分の寿命を返納してもいいと思っています。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapというアカウント名はある小説家のエッセイに由来します。その小説家は次のうちどれ？',
        choices: ['村上春樹', '江國香織', '小川洋子', '村上龍'],
        correctChoice: 0,
        comment: '『うずまき猫のみつけかた』というエッセイに、文字盤に(数字の代わりに)eat play napが書かれた時計の挿話が出てきます。そこから付けました。'
    },
    {
        name: 'eatplaynap',
        message: '『カラマーゾフの兄弟』の登場人物の中で、eatplaynapの推しカラマーゾフは次のうち誰？',
        choices: ['親父: フョードル・カラマーゾフ', '長男: ドミートリイ・カラマーゾフ', '次男: イヴァン・カラマーゾフ', '三男: アレクセイ・カラマーゾフ'],
        correctChoice: 1,
        comment: '身近にいたら迷惑なのは分かるけど、陽キャだしいいヤツ。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapの趣味は語学学習です。eatplaynapが勉強したことのない言語は次のうちどれ？',
        choices: ['ドイツ語', '中国語', 'ロシア語', 'ポルトガル語'],
        correctChoice: 3,
        comment: 'いつかポルトガルに行ってみたいので、Duolingoで勉強してみようかな。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが自分と性格が似ていると思っている漫画のキャラクターは次のうちどれ？',
        choices: ['『あずまんが大王』のともちゃん', '『ドラえもん』のスネ夫', '『美味しんぼ』の富井副部長', '『働かないふたり』の春子'],
        correctChoice: 0,
        comment: 'ともちゃんがマラソン大会で最初だけ全力疾走して一瞬1位になろうとするシーンを見て共感しました。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが2020年2月に行った海外旅行先は次のうちどこ？',
        choices: ['ドバイ', 'タイ', 'ドイツ', 'オーストラリア'],
        correctChoice: 0,
        comment: 'コロナ前最後の旅行でした。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが直接見たことのある芸能人は次のうち誰？',
        choices: ['成海璃子', '二階堂ふみ', '橋本愛', '前田敦子'],
        correctChoice: 2,
        comment: '池袋の新文芸坐のトイレで、隣で手を洗っているのが橋本愛さんでした。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapは大学時代映画館でバイトをしていました。eatplaynapの担当セクションは次のうちどれ？',
        choices: ['BOX(チケット売り場)', 'コンセ(ポップコーン売り場)', 'PJ(映写)', 'フロア(チケットもぎり)'],
        correctChoice: 3,
        comment: 'もぎりは雑用が多いけどお金を扱わないし責任が軽いので気楽でした。'
    },
    {
        name: 'eatplaynap',
        message: '高校時代のeatplaynapが修学旅行で行った場所は次のうちどこ？',
        choices: ['ロンドン', '沖縄', '長崎', '北京'],
        correctChoice: 1,
        comment: '友達がインフルエンザで来れなかったので、踊るゴーヤのおもちゃをお土産にあげました。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが愛するスーパーチェーンは次のうちどれ？',
        choices: ['OKストア', 'SEIYU', 'ロピア', '成城石井'],
        correctChoice: 2,
        comment: 'ロピアは神奈川県発祥のスーパーで、寿司が大きい。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapがくじ引きで当たったことのないものは次のうちどれ？',
        choices: ['SIX-PAD', 'トマト1箱', '1万円分の商品券', 'ディズニーペアチケット'],
        correctChoice: 0,
        comment: 'トマトはスーパーのくじ引きで当たりました。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが愛するコーヒーチェーンは次のうちどれ？',
        choices: ['ドトールコーヒーショップ', 'スターバックスコーヒー', 'サザコーヒー', 'コメダ珈琲'],
        correctChoice: 0,
        comment: 'ドトールは食べ物が美味しいので好きです。'
    },
    {
        name: 'eatplaynap',
        message: 'フィヨルドブートキャンプのプラクティスでeatplaynapが1番に辛かったと思っているのは次のうちどれ？',
        choices: ['Linux', 'DB設計', 'Sinatra', 'Rails'],
        correctChoice: 3,
        comment: 'Railsが難しくて辛すぎるので、現実逃避にDiscord Botを作っていました。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapが最初に参加した地域Rubyコミュニティは次のうちどこ？',
        choices: ['Fukuoka.rb', 'maebashi.rb', 'Sendagaya.rb', 'mitaka.rb'],
        correctChoice: 0,
        comment: '2021年1月頃に参加したのが最初でした！'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapの好きな小説家は次のうち誰？',
        choices: ['ガブリエル・ガルシア＝マルケス', 'マリオ・バルガス＝リョサ', 'フリオ・コルタサル', 'ロベルト・ボラーニョ'],
        correctChoice: 3,
        comment: '『第三帝国』という長編がめちゃくちゃ怖くてロマンチックで面白いので大好きです。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapは商社で輸入業務に携わっていたことがあります。eatplaynapが輸入していたものは次のうちどれ？',
        choices: ['ワイン', 'ビール', 'キーボード', 'Tシャツ'],
        correctChoice: 0,
        comment: '食品を輸入するときは必要書類がたくさんあって大変でした。'
    },
    {
        name: 'eatplaynap',
        message: 'eatplaynapは漢字検定何級を持っているでしょうか？',
        choices: ['1級', '3級', '5級', '8級' ],
        correctChoice: 3,
        comment: '小学3年生のとき猛勉強して取りました。えらい。'
    }
]

module.exports = quizzes
