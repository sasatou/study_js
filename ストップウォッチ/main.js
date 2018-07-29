(function () {
  'use strict'

  var timer = document.getElementById('timer');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');

  var startTime;
  var elapsedTime = 0;
  // setTimeoutの戻り値
  var timerId;
  // ストップ時間の足し上げ用
  var timeToAdd = 0;
  // スタートが発火したかどうかを管理
  var isRunning = false;

  function updateTimerText() {
    // 135.2秒経過したとして(135200ミリ秒)
    // 135200 -> 0.2:15.200
    // m = 135200 / 60000 の商
    // s = 135200 % 60000 / 1000
    // ms = 135200 % 1000
    var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;
    // それぞれの桁数を固定化させる
    // 3分の時  -> '03'
    // 12分の時 -> '12'

    // 3  -> '0' + '3'  -> '03'
    // 12 -> '0' + '12' -> '012'
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);
    timer.textContent = m + ':' + s + '.' + ms;
  }

  function countUp() {
    timerId = setTimeout(function() {
      // 現在の時刻からスタートボタンを押した時間を引く
      // elapsedTime = Date.now() - startTime;
      // 現在の時刻(Date.now())から
      // スタートボタンを押した時間(startTime)を引き
      // ストップ時間を足しあげる(timeToAdd)
      elapsedTime = Date.now() - startTime + timeToAdd;
      updateTimerText()
      countUp();
    }, 10);// 10ミリ秒ごとに処理を繰り返す
  }

  // start.className = 'btn';
  // stop.className = 'btn inactive';
  // reset.className = 'btn inactive';

  function updateButtonState(startButtonState, stopButtonState, resetButtonState) {
    start.className = startButtonState ? 'btn' : 'btn inactive';
    stop.className = stopButtonState ? 'btn' : 'btn inactive';
    reset.className = resetButtonState ? 'btn' : 'btn inactive';
  }
  updateButtonState(true, false, false);

  // タイマースタート
  start.addEventListener('click', function() {
    // 起動中は処理を繰り返させない
    if (isRunning === true){
      return;
    }
    // 起動している判定
    isRunning = true;
    // ボタンの状態 start: false, stop: ture, reset: false
    updateButtonState(false, true, false);
    startTime = Date.now();
    countUp();
  });
  // 途中で止まる処理
  stop.addEventListener('click', function() {
    // 停止中は処理を繰り返させない
    if (isRunning === false){
      return;
    }
    // 止まっている判定
    isRunning = false;
    // ボタンの状態 start: ture, stop: false, reset: ture
    updateButtonState(true, false, true);
    clearTimeout(timerId);
    // ストップを押された時点の時間をスタートした時点の時間を引く
    timeToAdd += Date.now() - startTime;
  });
  // ０に戻す
  reset.addEventListener('click', function() {
    // 起動中は処理を繰り返させない
    if (isRunning === true){
      return;
    }
    // ボタンの状態 start: ture, stop: false, reset: false
    updateButtonState(true, false, false);
    // 経過時間を０に戻す
    elapsedTime = 0;
    timeToAdd = 0;
    updateTimerText();
  });
})();
