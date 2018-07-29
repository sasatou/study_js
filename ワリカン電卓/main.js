(function() {
  'use strict';

  // classの取得
  var price = document.getElementById('price');
  var num = document.getElementById('num');
  var unit = document.getElementById('unit');
  var btn = document.getElementById('btn');
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');

  // チェック機能 1-2
  function checkInput () {
    // /^[1-9][0-9]*$/
    // 正規表現の内容、1桁目に1-9のどれか
    // 2桁目以降があるなら0-9のどれかがくるといったパターンでチェック
    if (// matchメソッド 後でチェック
      price.value.match(/^[1-9][0-9]*$/) !== null &&
      num.value.match(/^[1-9][0-9]*$/) !== null
    ) {
      btn.classList.remove('disabled');
    } else {
      btn.classList.add('disabled');
    }
  }

  btn.addEventListener('click', function () {
    var payLess;
    var short;
    var payMore;
    var over;
    var str;

    // チェック機能 1-3
    // もしこのクラスにdisabledが含まれていたら
    if (this.classList.contains('disabled') === true) {
      // 返してあげる。要するに結果を出さないことを返す。
      return;
    }

    // 金額計算 1
    // A. 300(payLess) ... 100(short)不足
    // B. 400(payMore) ... 200(over) 余り
    // payLess = 1000 / 3; // 333.333...
    // payLess = 1000 / 3 / 10; // 3.33333...
    // 置き換え前
    // payLess = Math.floor(1000 / 3 / 100) * 100 // 300
    // short = 1000 - (300 * 3); // 300
    // payMore = Math.ceil(1000 / 2 / 100) * 100 // 400
    // over = Math.abs(1000 - (400 * 3)); // 200
    // 置き換え後
    payLess = Math.floor(price.value / num.value / unit.value) * unit.value; // 300
    short = price.value - (payLess * num.value); // 300
    payMore = Math.ceil(price.value / num.value / unit.value) * unit.value; // 400
    over = Math.abs(price.value - (payMore * num.value));
    if (over === 0 && short === 0) {
      str = '一人' + (price.value / num.value) + ' 円ちょうどです！';
    } else {
      str =
      '一人 ' + payLess + ' 円だと ' + short + ' 円足りません。' +
      '一人 ' + payMore + ' 円だと ' + short + ' 円余ります。';
    }
    result.textContent = str;
    // リセット機能 1-1
    reset.classList.remove('hidden');
  });
  // チェック機能 1-1
  price.addEventListener('keyup', checkInput);
  num.addEventListener('keyup', checkInput);
  // リセット機能 1-2
  reset.addEventListener('click', function () {
    // それぞれの状態を初期値に戻します。
    result.textContent = 'ここに結果を表示します';
    price.value = '';
    num.value = '';
    unit.value = 100;
    btn.classList.add('disabled');
    this.classList.add('hidden');
    price.focus();
  });
  // プライスエリアをフォーカスしておく
  price.focus();
})();
