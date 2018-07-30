(function () {
  'use strict';

  var timer = document.getElementById('timer');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var reset = document.getElementById('reset');
  var start = document.getElementById('start');

  // スタートボタンを押した時の時間
  var startTime;
  // 残り時間
  var timeLeft;
  //
  // var timeToCountDown = 4 * 1000;
  var timeToCountDown = 0;
  //
  var timerId;
  var isRunning = false;

  function updateTimer(t) {
    var d = new Date(t);
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ms = d.getMilliseconds();
    var timerString;
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);
    timerString = m + ':' + s + '.' + ms;
    // timer.textContent = m + ':' + s + '.' + ms;
    timer.textContent = timerString;
    document.title = timerString;
  }

  function countDown() {
    timerId = setTimeout(function() {
      // var elapsedTime = Date.now() - startTime;
      timeLeft = timeToCountDown - (Date.now() - startTime);
      // 残り時間が0より小さくなったら
      if (timeLeft < 0) {
        isRunning = false;
        start.textContent = 'Start';
        // setTimeoutの呼び出しを解除する
        clearTimeout(timerId);
        // 誤差を修正
        timeLeft = 0;
        //
        timeToCountDown = 0;
        // updateTimerを更新
        updateTimer(timeLeft);
        // で戻す
        return;
      }
      updateTimer(timeLeft);
      countDown();
    }, 10);
  }

  start.addEventListener('click', function() {
    if (isRunning === false){
      isRunning = true;
      start.textContent = 'Stop';
      startTime = Date.now();
      countDown();
    } else {
      isRunning = false;
      start.textContent = 'Start';
      timeToCountDown = timeLeft;
      clearTimeout(timerId);
    }
  });

  min.addEventListener('click', function() {
    if (isRunning === true) {
      return;
    }
    // minボタンが押された時、60秒(1分)増やしていく
    timeToCountDown += 60 * 1000;
    if (timeToCountDown >= 60 * 60 * 1000){
      timeToCountDown = 0;
    }
    updateTimer(timeToCountDown);
  });

  sec.addEventListener('click', function() {
    if (isRunning === true) {
      return;
    }
    // secボタンが押された時、1000ミリ秒(1秒)増やしていく
    timeToCountDown += 1000;
    if (timeToCountDown >= 60 * 60 * 1000){
      timeToCountDown = 0;
    }
    updateTimer(timeToCountDown);
  });

  reset.addEventListener('click', function() {
    // resetボタンが押された時、０にする。
    timeToCountDown = 0;
    updateTimer(timeToCountDown);
  });

})();
