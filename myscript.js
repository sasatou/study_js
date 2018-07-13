// メッセージを出力
// console.log("メッセージを出力")

// 変数を出力
// var i = 10;
// console.log(i);
// 出力はダブルクオーテーションいらない

// info, warn, error

// 情報として出力
// console.info("情報です");

// 警告として出力
// console.warn("警告です");

// エラーとして出力
// console.error("エラーです");

// アラートを出力
// alert("アラートです");

// 変数の出力
// var colorName = "red";
// console.log(colorName);

// 1.　消費税を格納する定数TAX_RATEを宣言し、初期値1.08をセット
// 2.　コンソールにTAX_RATEの値を出力

// const TAX_RATE = 1.08;
// console.log(TAX_RATE);

// console.log(10);
// console.log("she's happy.");

// null
// var x = null;
// console.log(x);

// undefined
// var y;
// console.log(y);

// 足し算
// console.log(10 + 3);

// 引き算
// console.log(10 - 3);

// 掛け算
// console.log(10 * 3);

// 割り算
// console.log(10 / 3);

// 余り
// console.log(10 % 3);

// // 後置演算
// var x = 10;
// var y = x++;
// console.log(x);
// console.log(y);

// // 前置演算
// var x = 10;
// var y = ++x;
// console.log(x);
// console.log(y);

// // 代入演算子

// // =
// // 変数などの値を代入
// x = 3;
// console.log(x);

// // +=
// // 左辺の値に右辺の値を足したものを代入
// x += 3; // x = x + 3;の意味
// console.log(x);

// // -=
// // 左辺の値に右辺の値を引いたものを代入
// x -= 3; // x = x - 3;の意味
// console.log(x);

// // *=
// // 左辺の値に右辺の値を掛けたものを代入
// x　*= 3; // x = x * 3;の意味
// console.log(x);

// // /=
// // 左辺の値に右辺の値を割ったものを代入
// x /= 3; // x = x /3;の意味
// console.log(x);

// // %=
// // 左辺の値に右辺の値を割った余りを代入
// x %= 3; // x = x % 3;の意味
// console.log(x);

// 演習について
// 「スーパーでみかんの合計金額を計算するプログラムを開発」
// 
// Aさんが1個100円のみかんを、13個買いました。
// Aさんの支払い金額はいくらになるか計算して、結果を変数xに代入。
// 合計金額xをコンソールに出力するプログラムを書いて見ましょう。
// ＊消費税は考慮しないものとする。

// // 僕が書いたやつ
// var x = 100;
// x *= 13;
// console.log(x);

// // 講義の答え
// x = 100 * 13;
// console.log(x);

// // 関数の定義方法
// function getRectangle(height, width){
// 	return height * width;
// }
// console.log(getRectangle(3, 5));

// // 関数リテラル

// var getRectangle = function(height, width) {
// 	return height * width;
// }
// console.log(getRectangle(3, 5));

// // functionコンストラクター
// var getRectangle = new Function('height', 'width', 'return height * width');
// console.log(getRectangle(3, 5));

// // 僕が書いたやつ
// function getRectangle (price, number){
// 	return price * number;
// }
// console.log(getRectangle(100, 13));

// // 講義の答え
// // そもそもファンクションは自分で命名できるんだもんね、、、
// function price (unit_price, n) {
// 	return unit_price * n;
// }
// console.log(price(100, 13));

// 条件分岐



















