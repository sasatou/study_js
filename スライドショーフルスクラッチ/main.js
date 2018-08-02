(function() {
  'use strict';

  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var play = document.getElementById('play');
  var pause = document.getElementById('pause');
  var target = document.getElementById('target');

  var files = [
    'img/food0.jpg',
    'img/food1.jpg',
    'img/food2.jpg',
    'img/food3.jpg'
  ];
  // 画像の現在地
  var currentNum = 0;

// ・メイン画像
//    - 画像を配列化
//    - 画像の現在地を保持する変数を作成
// ・jsで動かすdomを変数化
//    - prevボタンを変数化
//    - nextボタンを変数化
// ・ボタンの挙動
//    - nextボタン
//      - 画像を１進める +1
//    - prevボタン
//      - 画像を1戻す -1
// ・サムネイル動かす
// ・サムネイルを押すとメイン画像が切り替わる
// ・サムネイルのリストを自動作成
// ・再生ボタンを実行する -> 押したら停止ボタンに切り替え
// ・停止ボタンを実行する -> 押したら再生ボタンに切り替え


  prev.addEventListener('click', function() {
    // 画像の位置がマイナスに進んでいく
    currentNum--;
    // 画像位置が 0より小さくなるまで処理を繰り返す
    if (currentNum < 0) {
      // 0より小さくなったら、画像を最大値に戻してあげる、要はループする
      currentNum = 3;
    }
    conxole.log(files[currentNum]);
  });

  next.addEventListener('click', function() {
    // 画像の位置がプラスに進んでいく
    currentNum++;
    // 画像の位置が3より大きくなるまで処理を繰り返す
    if (currentNum > 3){
        // 3より大きくなったら、画像を最小値に戻す
        currentNum = 0;
    }
    conxole.log(files[currentNum]);
  });


  play.addEventListener('click', function() {

    this.className = 'hidden';
    pause.className = '';
  });

  pause.addEventListener('click', function() {

    this.className = 'hidden';
    play.className = '';
  });

})();
