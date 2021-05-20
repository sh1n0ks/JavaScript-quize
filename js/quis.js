const quiz = [
  {
    question:'①次のうち、俳句の季語として認定されていないものはどれ？',
    answers:[
      'A.サザン',
      'B.チューブ',
      'C.ユーミン',
      'D.山下達郎'
    ],
    correst:'B.チューブ'
  },{
    question:'②母の日に贈る花で有名な「カーネーション」。さて、黄色のカーネーションの花言葉は次のうちどれ？',
    answers:[
      'A.家族愛',
      'B.感謝',
      'C.嫉妬',
      'D.軽蔑'
    ],
    correst:'D.軽蔑'
  },{
    question:'③日常的に「マジ？」って言葉がよく使われますが、その「マジ」という言葉は、一体いつからあったでしょう？',
    answers:[
      'A.江戸時代',
      'B.明治時代',
      'C.昭和',
      'D.平成'
    ],
    correst:'A.江戸時代'
  },{
    question:'④次のうち、実際に北海道に存在する川はどれ？',
    answers:[
      'A.イトオシイ川',
      'B.クルオシイ川',
      'C.ヤリキレナイ川',
      'D.チョウシデナイ川'
    ],
    correst:'C.ヤリキレナイ川'
  },{
    question:'⑤天空の城ラピュタの敵役として登場するムスカ大佐。さて、彼の年齢はいくつでしょう？',
    answers:[
      'A.28歳',
      'B.32歳',
      'C.58歳',
      'D.62歳'
    ],
    correst:'A.28歳'
  },{
    question:'⑥では、サザエさんの、マスオさんの会社仲間のアナゴさんの年齢は？',
    answers:[
      'A.28歳',
      'B.32歳',
      'C.58歳',
      'D.62歳'
    ],
    correst:'A.28歳'
  },{
    question:'⑦続いては身長についてです。ドラゴンボールのべジータは何ｃｍでしょう？',
    answers:[
      'A.159cm',
      'B.164cm',
      'C.179cm',
      'D.184cm'
    ],
    correst:'B.164cm'
  },{
    question:'⑧巨人の星の星一徹がやる「ちゃぶ台返し」。彼はアニメの中で何回ちゃぶ台をひっくり返したでしょう？',
    answers:[
      'A.1回',
      'B.5回',
      'C.10回',
      'D.15回'
    ],
    correst:'A.1回'
  },{
    question:'⑨「ウォーリーを探せ」でお馴染みのウォーリー。彼の肩書きとされているのは、次のうちどれ？',
    answers:[
      'A.コックさん',
      'B.バックパッカー',
      'C.脱獄した囚人',
      'D.コメディアン'
    ],
    correst:'C.脱獄した囚人'
  },{
    question:'⑩世界で最も歌われている曲は次のうちどれ？',
    answers:[
      'A.ハッピーバースデートゥーユー',
      'B.きらきら星',
      'C.ジングルベル',
      'D.アメージンググレイス'
    ],
    correst:'A.ハッピーバースデートゥーユー'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢の定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex  < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correst === e.target.textContent){
    window.alert('正解');
    score++;
  }else{
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了！あなたの正解数は' +  score  + ' / ' +  quizLength  + ' です！　');
  }

};

//ボタンをクリックしたら正誤判定
let handlerindex = 0;
while (handlerindex < buttonLength){
  $button[handlerindex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerindex++;
}
