(function() {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    // var n = Math.floor(Math.random() * 3);// ランダムな整数を生成(今回は3)
    // if文の場合
    // if (n === 0) {
    //   this.textContent = '大吉';
    // } else if (n === 1) {
    //   this.textContent = '中吉';
    // } else {
    //   this.textContent = '凶';
    // }
    // switch文の場合
    // var n = Math.floor(Math.random() * 3);
    // switch (n) {
    //   case 0:
    //   this.textContent = '大吉';
    //   break;
    //   case 1:
    //   this.textContent = '中吉';
    //   break;
    //   case 2:
    //   this.textContent = '凶';
    //   break;
    // }
    // 配列の場合
    // var results = ['大吉', '中吉', '凶', '末吉'];
    // var n = Math.floor(Math.random() * results.length);
    // this.textContent = results[n];
    // 確率を操作する
    var n = Math.random();
    if (n < 0.05) {
      this.textContent = '大吉';
    } else if (n < 0.2) {
      this.textContent = '中吉';
    } else {
      this.textContent = '凶';
    }
  });
  btn.addEventListener('mousedown', function() {
  this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function() {
  this.className = '';
  });
})();
