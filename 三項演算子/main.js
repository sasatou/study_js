
/*
信義値
  文字列: 空文字以外だったらtrue
  数字: 0かNaN(ノットアナンバー)以外だったらtrue
  ture / false
  object: null 以外だったらtrue
  undefined, null -> false
*/
// 下記は同じ動作
if (x) {
  // 処理
}
// 最初はわかりやすく下の感じで書くといい。
if (x !=== '') {
  // 処理
}

/*
  三項演算子

  var a, b, c;
  if (条件) {
    a = b;
  } else {
    a = c
  }

  以下のように書き換えることができる
  a = (条件) ? b : c;
*/
  var max, x, y;
  if (x > y) {
    x = max;
  } else {
    y = max;
  }

  var max, x, y;
  max = (x > y) ? x : y;
