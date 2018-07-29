(function () {
  'use strict'

  var comment = document.getElementById('comment');
  var label = document.getElementById('label');
  var btn = document.getElementById('btn');

  // 定数っぽいものは大文字で書いたりするらしい
  var LIMIT = 20;
  var WARNING = 10;

  label.innerHTML = LIMIT;

  // テキストエリアに入力されたらLIMITに文字数を返す
  comment.addEventListener('keyup', function() {
    // 変数remainingに規定数LIMITから入力文字数の値をとってマイナスしたものを代入
    var remaining = LIMIT - this.value.length;
    label.innerHTML = remaining;
    // if文の場合
    // 残り文字数を指定された数字になったらスタイルを変える
    // if(remaining < WARNING){
    //   label.className = 'warning';
    // } else {
    //   label.className = '';
    // }
    // 三項演算子の場合
    label.className = remaining < WARNING ? 'warning' : '';
  });
})();
