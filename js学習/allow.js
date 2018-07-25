// 従来の関数
let f = function (x, y) {
  return x * y;
}
console.log(f(2, 3));

// アロー関数
let f = (x, y) => {
  return x * y;
}
console.log(f(2, 3));

// 関数の引数が1つ。引数部分の括弧を省略可能。
let f = x => {
  console.log(x);
}
f(2);

// 引数がない場合は、括弧を省略不可。
let f = () => {
  console.log('test');
}
f();
