
// var
var i = 10; // 宣言OK
i = 11; // 再代入OK
var i = 12; // 再宣言OK(エラーとならない)

// let
let j = 10; // 宣言 OK
j = 11; // 再代入 OK
let j = 12; // 再宣言 NG(エラー)

// const
const tax_rate = 0.08; // 定数の宣言 OK
tax_rate = 0.1; // 再代入 NG(エラー)
const tax_rate = 0.2; //再宣言 NG(エラー)
