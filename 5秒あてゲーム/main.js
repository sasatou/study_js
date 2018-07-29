(function() {
  'use strict';

  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime; // startボタンが押された時の時間用
  var isStarted = false; // ゲームが始まっているかどうかの判定


  start.addEventListener('click', function() {
    // ボタンを何回も押させない処理 1-1
    // ゲームが始まっている場合は処理を返す
    if(isStarted === true) {
      return;
    }
    // ゲームが開始されたと判定させる。
    isStarted = true;

    // 現在からの経過時間を取得
    startTime = Date.now();

    // ボタンの押し込み動作
    this.className = 'pushed';
    stop.className = '';
    // リスタート用に結果を元の数値に戻します
    result.textContent = '0.000';
    result.className = 'standby';
  });

  stop.addEventListener('click', function() {
    var elapsedTime;
    var diff;

    // ボタンを何回も押させない処理 1-2
    // ゲームが始まっていない場合は処理を返す
    if(isStarted === false) {
      return;
    }
    // ゲームが終了された判定
    isStarted = false;

    // 現在の時間から経過時間を引く(1000で割ってミリ秒から秒にしておく)
    elapsedTime = (Date.now() - startTime) / 1000;
    // elapsedTime = 4;
    // result.textContent = elapsedTime;
    // toFixed 小数点以下3まで表示
    result.textContent = elapsedTime.toFixed(3);

    // ボタンの押し込み動作
    this.className = 'pushed';
    start.className = '';
    // stopボタンを押した際にスタンバイを解除classを外す
    result.className = '';

    // 押した秒数によってスタイルを変更する
    diff = elapsedTime -5.0;
    // if (diff > -1.0 && diff < 1.0){
    // 絶対値で書く場合は 概念があんまりよく理解できていないので後で調べるMath.abs
    if (Math.abs(diff) < 1.0){
      result.className = 'perfect';
    }

  });
})();
