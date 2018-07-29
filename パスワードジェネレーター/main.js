(function () {
  'use strict'

    var slider = document.getElementById('slider');
    var label = document.getElementById('label');
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');
    var symbols = document.getElementById('symbols');
    var umbers = document.getElementById('umbers');

    // password生成
    function getPassword() {
      var seed_letters = 'abcdefghijklmnopqrstuvwxyz';
      var seed_numbers = '0123456789';
      var seed_symbols = '!#$%()';
      var seed;

      var len = slider.value;
      var pwd = '';

      // toUpperCase 呼び出す文字列の値を大文字にして返す
      seed = seed_letters + seed_letters.toUpperCase();
      // seedに数字を加える
      if (numbers.checked === true) {
        seed += seed_numbers;
      }
      // seedに記号を加える
      // trueはなくでも大丈夫
      if (symbols.checked) {
        seed += seed_symbols;
      }

      // for文の場合
      // // 繰り返し処理 lenより大きくなるまで繰り返す
      // for (var i = 0; i < len; i++) {
      //   // seedの文字をランダムに抜き出してpwdに代入
      //   pwd += seed[Math.floor(Math.random() * seed.length)];
      // }
      // while文の場合
      while (len--){
        pwd += seed[Math.floor(Math.random() * seed.length)];
      }
      result.value = pwd;
    }

    // ラベルの文字数をLengthの値に反映
    slider.addEventListener('change', function() {
      // labelの中身にaliderの値を反映
      label.innerHTML = this.value;
    });
    // クリック時にresultに文字を吐き出す処理
    btn.addEventListener('click', function() {
    // クリック時にパスワードを取得して表示しておく
      getPassword();
    });
    // resultを選択した時に全選択になる処理
    result.addEventListener('click', function() {
      this.select();
    });

    // ページを開いた時にパスワードを取得して表示しておく
    getPassword();
})();
