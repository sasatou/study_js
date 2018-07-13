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

// // 条件分岐

// // 例題）数値xの値が100以上だったら、100以上ですとコンソールに表示。
// // 変数xが100未満だったら、100未満です。とコンソールに表示

// var x = 100;
// if(x >= 100) {
// 	console.log('100以上です。')
// } else {
// 	console.log('100未満です。')
// }

// var x = 90;
// if(x >= 100) {
// 	console.log('100以上です。')
// } else {
// 	console.log('100未満です。')
// }

// 例）テストの点数によって通知表の成績を出力する。
// 90点以上 A
// 80点以上 B
// 60点以上 C
// 60点未満 D

// // 自分で書いて見たやつ
// var x = 100;

// if(x >= 100){
// 	console.log('ランクAです。');
// 	else if(x >= 90){
// 		console.log('ランクBです。');
// 		else if(x >= 60){
// 			console.log('ランクCです。');
// 		}
// 	}
// } else{
// 　console.log('ランクDです。');
// }

// // 授業の答え
// var x = 90;
// if (x >= 90) {
// 	console.log('A');
// } else if (x >= 80) {
// 	console.log('B');
// } else if (x >= 60) {
// 	console.log('C');
// } else {
// 	console.log('D');
// }

//　条件分岐 switch

//  数値がnが1だったら、「数値は1です。」とコンソールに表示。
//  数値がnが2だったら、「数値は2です。」とコンソールに表示。
//  数値がnが3だったら、「数値は3です。」とコンソールに表示。
//  それ以外だったら、「範囲外です。」とコンソールに表示。

// // 自分で書いたの
// var n = 1;
// switch (n){
// 	case 1:
// 		console.log('数値は1です。');
// 		break;
// 	case 2:
// 		console.log('数値は2です。');
// 		break;
// 	case 3:
// 		console.log('数値は3です。');
// 		break;
// 	case 4:
// 		console.log('範囲外です。');
// 		break;
// }

// // 授業
// var n = 10;
// switch (n){
// 	case 1:
// 		console.log('数値は1です。');
// 		break;
// 	case 2:
// 		console.log('数値は2です。');
// 		break;
// 	case 3:
// 		console.log('数値は3です。');
// 		break;
// 	default:
// 		console.log('範囲外です。');
// 		break;
// }

// 演習
// 
// 年齢によって、テーマパークの入場料を出し分けて出力するプログラム
// しようとしては、下記とします。
// 小人（6歳未満の者）800円
// 中人（6歳以上12歳未満の者）1,800円
// 大人（12歳以上の者）4,600円

// // 自分で書いたの
// var n = 1;
// switch (n) {
// 	case n < 6:
// 		console.log('小人（6歳未満の者）800円です。');
// 		break;
// 	case 12:
// 		console.log('中人（6歳以上12歳未満の者）1,800円です。');
// 		break;
// 	default:
// 		console.log('大人（12歳以上の者）4,600円です。');
// 		break;
// }

// // 授業
// var age = 7;
// if (age >= 12) {
// 	console.log('大人（12歳以上の者）4,600円です。');
// } else if (age >= 6) {
// 	console.log('中人（6歳以上12歳未満の者）1,800円です。');
// } else {
// 	console.log('小人（6歳未満の者）800円です。');
// }

// オブジェクト

// // 数値（255）を16進数で出力
// var n = 255;
// console.log(n.toString(16));
// console.log(n.toExponential());

// // stringオブジェクト
// // 文字列の長さを返す。

// var str = 'こんにちは';
// console.log(str.length);

// // ３番目の文字を取得する。
// // 一文字目は０で数えるため
// console.log(str.charAt(2));

// // 演習
// // 「文字列分割」
// // ・変数strに格納された文字列'red,green,blue'をカンマで分割して、コンソールに出力してください。
// // ・出力は配列になります。配列については後のセクションで詳しく学習します。
// // ・ヒント：
// // 　ー　文字列オブジェクトのsplitメソッドを使用します。
// // 　ー　文法：文字列オブジェクトのsplit([separator]);
// // 　ー　separatorには区切りに使う文字列を指定します。

// var str = 'red,green,blue';
// console.log(str.split(','));

// // 繰り返し
// // 変数xの値を1から3まで出力するプログラムを、for文を使って記述

// for (var i = 1; i<= 3; i++){
// 	console.log(i);
// }


// //while文
// // 数xの値を1から3まで出力するプログラムを、while文を使って記述
// // 
// var i = 1;
// while (i <= 3) {
// 	console.log(i);
// 	i++; //　インクリメントを行わないと無限ループになってしまうので気をつけること。
// }

// // do while
// // // 数xの値を1から3まで出力するプログラムを、do while文を使って記述
// var i =1;

// do {
// 	console.log(i);
// 	i++;
// } while(i <= 3);

// // 演習
// // 1〜100の整数かつ偶数の値について、合計値を計算してコンソールに出力してください。
// // 
// // 補足
// // 繰り返し処理は、for文を利用してください
// // 数値が偶数であることを判別するには、数値を2で割った時に割り切れるかどうか（=余りが０）で確認できます。

// var n = 0;
// for (var i = 1; i <= 100; i++) {
// 	if((i % 2) == 0) { //偶数
// 		n += i; // n = n +i
// 	}
// }
// console.log(n);

// // 配列
// // 変数colorsを用意。
// // 配列を作成
// // 配列に格納するデータは、red, green, bolu
// // 次に各値を取り出して、コンソールに表示して見ましょう。

// var colors =['Red','Green','blue'];
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);//存在しない番号を指定しないように

// 連想配列

// 変数　userを用意。
// 下記の、連想配列を作成
// name：山田花子
// gender：女性
// birth：1990/01/01
// それぞれの値を、キーを指定して取り出しコンソールに表示。

var user = { name:'山田花子', gender:'女性', birth:'1990/01/01'};
console.log(user.name);
console.log(user.gender);
console.log(user.birth);




