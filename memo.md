# JavaScript

## 1 変数、定数
***
### 1.1 変数を宣言する
* var        ・・・
* let(ES6)   ・・・ 「再宣言」が不可
* const(ES6) ・・・ 定数「再宣言」も「再代入」も不可

**構文**
```javascript:title
宣言 変数名 代入 初期値
var hoge = 10;
```
宣言だけの場合
```javascript:title
let hoge;
```
カンマで区切って複数宣言
```javascript:title
let hoge, hoge2;
```
コンストは主に定数用？
```javascript:title
const tax_rate = 0.08;
```

```javascript:title
/ var
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
```
***
### 1.2 定数を宣言する

宣言時に初期値を代入
```javascript:title
let hoge = 'ハローワールド！';
```
***！let命令は同名の変数を許可しないので注意***

## 2 データ型
***
### 2.1 主なデータ型

|分類 |データ型               |概要                                             |
|:---|:---------------------|:-----------------------------------------------|
|基本 |数値型(number)         |テーブルを表示したい                               |
|　　 |文字列型(string)       |シングル/ダブルクォートで囲まれた０個以上の文字の集合    |
|　　 |真偽型(boolean)        |true(真)/false(擬)                              |
|　　 |シンボル型(symbol)      |シンボル                                         |
|　　 |特殊型(null/undefined) |値が空、未定義であることを表す                       |
|参照型|配列(array)           |データの集合（各要素にはインデックス番号でアクセス可能） |
|　　 |オブジェクト(object)    |データの集合(各要素には名前でアクセス可能)            |
|　　 |関数(function)         |一連の処理(手続き)の集合                           |

***
### 2.2 リテラル
#### 2.2.1 数値リテラル
数字

#### 2.2.2 文字列リテラル
シングルクォート、ダブルクオートで囲まれた文字
```javascript:title
'ハローワールド！ javascript'
"ハローワールド！ javascript"
```

#### 2.2.3. 配列リテラル
ブラケット[]でくくった複数の値
```javascript:title
['html', 'css', 'javascript']
```
それぞれのデータにはインデックス番号が振られている。
```javascript:title
let data = ['html', 'css', 'javascript'];
console.log(data[0]); // htmlの呼び出し
console.log(data[1]); // css
console.log(data[2]); // javascript
```

## 3 演算子
***
あとでまとめます



## 4 制御構文
***
###  4.1 if文
#### 4.1.1 if命令
**構文**
```javascript:title
if(条件式){
  条件式がtrueの場合に実行する命令
} else {
  条件式がfalseの場合に実行する命令
}
```
記述例)
```javascript:title
let x = 15;
if(x >= 10){
  console.log('変数xは10以上です。');
} else {
  console.log(変数xは10未満です。);
} // 結果：変数xは10以上です。
変数xが10以上のときだけ処理を実行したい場合は
elesを省略できる。
```
#### 4.1.2 else if命令
**構文**
```javascript:title
if(条件式1){
  条件式1がtrueの場合に実行する命令
} else if(条件式2) {
  条件式2がtrueの場合に実行する命令
} else {
  全ての条件式がfalseの場合に実行する命令
}
```
記述例1)
```javascript:title
let x = 30;
if(x >= 20){
  console.log('変数xは20以上です。');
} else if(x >= 10) {
  console.log('変数xは10以上です。');
} else {
  console.log('変数xは10未満です。');
} // 結果：変数は20以上です。
```
記述例2)
```javascript:title
let x = 30;
if(x >= 10){
  if(x >= 20){
    consle.log('変数xは20以上です。');
  } else {
    console.log('変数xは10以上20未満です。');
  } else {
  console.log('変数xは10未満です。');
} // 結果：変数は20以上です。
```
制御命令を入れ子にすることもできる
ただ、深すぎる構造は避けるべき。

### 4.2 switch命令
***
**構文**
```javascript:title
switch(式){
  case 値1:
    「式 = 値1」である場合に実行される命令(群)
  break;
  case 値2:
    「式 = 値2」である場合に実行される命令(群)
  break;
  default:
    式の値が全ての値に合致しない場合に実行される命令(群)
  break;
}
```
記述例1)
```javascript:title
switch(rank){
  case 'A':
    console.log('Aランクです。');
    break;
  case 'B':
    console.log('Bランクです。');
    break;
  case 'C':
    console.log('Cランクです。');
    break;
  default:
    console.log('ランク外です。');
    braek;
} // 結果：Bランクです。
```
記述例2)
```javascript:title
let rank = 'B';
switch(rank){
  case 'A':
  case 'B':
  case 'C':
    console.log('合格です。');
    break;
  default:
    console.log('不合格...');
    braek;
} // 結果：合格です。
```

### 4.3  while / do while
***
条件式によってループを制御する

#### 4.3.1 while命令
**構文**  
while : 前置判断 → 条件によっては1度もループを実行しない。
```javascript:title
while(条件式){
  条件式がtrueである時に実行される命令(群)
}
```
記述例)
```javascript:title
let x = 8;
while(x < 10){
  console.log('xの値は' + x);
  X++;
}
```
#### 4.3.1 do while命令

**構文**  
do while : 高知判断 → 条件に関わらず、最低1回はループを実行。
```javascript:title
do {
  条件がtrueである時に実行される命令(群)
} while(条件式);
```
記述例)
```javascript:title
let x = 8;
do {
  console.log('xの値は' + x);
  x++;
} while(x < 10);
```


### 4.4  for命令
***
指定回数だけループを処理する

**構文**
```javascript:title
for(初期化式; ループ継続条件; 増減式){
  ループ内で実行する命令(群)
}
```
記述例)
```javascript:title
for(let x = 8; x < 10; x++){
  console.log('xの値は' + x);
}
```

**カンマ演算子**
記述例)
```javascript:title
for(let x = 1, y = 1; x < 5; x++, y++){
  console.log('x * jは' + x * j);
}
結果： x * jは1
      x * jは4
      x * jは9
      x * jは16
```


### 4.5  for in命令
***
連想配列(ハッシュ)の要素を順に処理する
**構文**
```javascript:title
let 変数 = {データ1, データ2, データ3}
for(仮変数 in 連想配列){
  ループ内で実行する命令(群)
}
```
記述例1)
```javascript:title
let data = {apple:150, orange:100, banana:120};//これ正しいのか？
for(let key in data){
  console.log(key + '=' + data[key]);
}
結果 : apple=150
      orange=100
      banana=120
```
記述例2)
```javascript:title
let data = ['apple', 'orange', 'banana'];
for(let key in data){
  console.log(data[key]);
}
結果 : 「apple」「orange」「banana」を順に出力
```
記述例3)
```javascript:title
let data = ['apple', 'orange', 'banana'];
for (let i = 0, len = data.length; i < len i++){
  console.log(data[i]);
}
```
memo
```javascript:title
for (let i = 0; i < date.length; i++){...}
```
この書き方だとループ都度にプロパティにアクセスしているのであまり良くないらしい。

### 4.6 for of命令
***
配列などを順に処理する

**構文**
```javascript:title
for(仮変数 of 列挙可能なオブジェクト){
  ループ内で実行する命令(群)
}
```
記述例1)
```javascript:title
let data = ['apple', 'orange', 'banana'];
for (let value of data){
  console.log(value);
}
```
### 4.7 break/continue命令
***
ループを途中でスキップ/中断する
★特定の条件を満たした場合に、  
 ループを強制的に中断したい
```javascript:title
let result = 0;
for (let i = 1; i <= 100; i++){
  result += i;
  if (result > 1000){break;}
}
console.log('合計値が1000を超えるのは' + i);
```
★現在のループだけをスキップして、  
 次のループを継続して実行したい
```javascript:title
let result = 0;
for(let i = 0; i < 100; i++){
  if(i % 2 === 0){continue;}
  result += i;
}
console.log('合計' + result); // 結果: 2500;
```
★ネストされたループを一気に脱出する ラベル構文
```javascript:title
kuku: // ラベル名
for (let i = 1; i < 10; i++){
  for (let j = 1; j < 10; j++){
    let k = i * j
    if (k > 30){break kuku}
    document.write(k + '&nbsp');
  }
}
document.write('<br/>');
```

### 4.8 try...catch...finally命令
***
例外を処理する

#### 4.8.1 try...catch...finally命令
**構文**
```javascript:title
try{
  例外が発生するかもしれない命令(群)
} catch(例外情報を受け取る変数){
  例外が発生した時に実行される命令(群)
} finally {
  例外の有無に関わらず、最終的に実行される命令(群)
}
```
記述例1)
```javascript:title
let i = 1;
try{
  i = i * J; //例外発生
} catch(e){
  console.log(e.message);
} finally {
  console.log('処理は完了しました。');
}
```
#### 4.8.2 throw命令
**構文**
```javascript:title
throw new Error(エラーメッセージ)
```

| オブジェクト     | エラーの原因                       |
| :------------- | :------------------------------- |
| EvalError      | 不正なeval関数                     |
| RangError      | 指定された値が許容範囲を超えている     |
| ReferenceError | 宣言されていない変数にアクセスした     |
| SyntaxError    | 文法エラー                         |
| TypeError      | 指定された値が期待されたデータ型でない  |
| URIError       | 不正なURI                         |

### Javascriptの危険な構文を禁止する Strictモード(IE9非対応)
***

| 分類   | Strictモードによる制限                            |
| :---- | :---------------------------------------------- |
| 変数   | var命令の省略を禁止                               |
|       | 将来的に追加予定のキーワードを予約語に追加             |
|       | 引数 / プロパティ名の重複を禁止                     |
|       | undefined / nullへの代入を禁止                    |
| 命令   | with命令の利用を禁止                              |
|       | arguments.calleeプロパティへのアクセス禁止          |
|       | eval命令で宣言された変数を、周囲のスコープに拡散しない  |
| その他 | 関数配下のthisはグローバルオブジェクトを参照しない     |
|       | 「0〜」の8進数表記は禁止                           |

要するにこれをやらないようにコード書こうってことですかね。

記述例)
```javascript:title

'use strict'; // 1
// 任意のコード
ーーーーーーーーーーーーーーーー
function hoge(){
  'use strict' // 2
}
// 関数の本体
```
strictモードを有効にするには、スクリプトの先頭、もしくは関数の本体先頭に記述する。  
1では以降のスクリプト全体が、  
2では関数内のスクリプトが適応される。

## 5.1 オブジェクトとは

**連想配列 複数要素の集合体**

| [x0001] | [x0002] | [x0003] |
| :------ | :------ | :------ |
| 山田太郎 | 山田花子 | 田中一郎 |

**オブジェクト 一つのものを表現する複数の属性情報**

| [name] | [sex] | [birth] |
| :------ | :------ | :------ |
| 山田太郎 | 男       | 1999/09/09 |

### 5.1.1 オブジェクト = プロパティ + メッソッド
あとでまとめる

### 5.1.2 new演算子
オブジェクトを利用するための準備
**構文**
```javascript:title
let 変数名 = new オブジェクト名([引数,...])
```

プロパティ/メッソドの呼び出し
**構文**
```javascript:title
変数名.プロパティ名[=設定数];
変数名.メソッド名([引数[,...]]);
```
### 5.1.3 静的プロパティ / 静的メソッド
**構文**
```javascript:title
オブジェクト名.プロパティ名[= 設定];
オブジェクト名.メソッド名([引数 [,...]]);
```

## メモ 状況がわかったら まとめ始める

イベント・イベントハンドラ

プロパティを使って関連付ける方法
構文
オブジェクト名.onイベント名 = function() {
  イベントハンドラ
};


アロー関数

構文
(引数, ・・・) => {
  関数の本体
}

クラス
構文
class クラス名 {
  // クラスの内容
}

シンボル
構文
Symbol([description])

description:シンボルの名前

分割代入
