// 変数elemにpタグを問い合わせ、インナーテキストで文字列を変数に代入する。
// let elem = document.querySelector('p');
// elem.innerText = 'Javascriptでかく';

// let ipt = document.querySelector('input');
// let elem = document.querySelector('p');
// elem.innerText = ipt.value;

// // なんとなく書いてみたゴミ
// .addEventListner('click', () => {
// let ipt = document.querySelector('input');
// let elem = document.querySelector('p');
// elem.innerText = ipt.vaiue;
// });
// HTMLのbuttonタグのnが欠けていてうまく動いていなかった。
// jsが原因かと思って1時間くらい悩んでた・・・。
let ipt = document.querySelector('input');
let btn = document.querySelector('button');
let elem = document.querySelector('p');
btn.addEventListener('click', () => {
  elem.innerText = ipt.value;
});
