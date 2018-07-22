# JavaScript

## 変数を宣言する

### 宣言
* var
* let(ES6)
* const(ES6)

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
宣言時に初期値を代入
```javascript:title
let hoge = 'ハローワールド！';
```
***！let命令は同名の変数を許可しないので注意***
*****


## データ型

### 主なデータ型

|分類|データ型|概要|
|:---|:---|:---|
|基本|数値型(number)|テーブルを表示したい|
||文字列型(string)|シングル/ダブルクォートで囲まれた０個以上の文字の集合|
||真偽型(boolean)|true(真)/false(擬)|
||シンボル型(symbol)|シンボル|
||特殊型(null/undefined)|値が空、未定義であることを表す|
|参照型|配列(array)|データの集合（各要素にはインデックス番号でアクセス可能）|
||オブジェクト(object)|データの集合(各要素には名前でアクセス可能)|
||関数(function)|一連の処理(手続き)の集合|

### リテラル

#### 数値リテラル
数字

#### 文字列リテラル
シングルクォート、ダブルクオートで囲まれた文字
```javascript:title
'ハローワールド！ javascript'
"ハローワールド！ javascript"
```

#### 配列リテラル
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

### 制御構文

#### if文

**構文 if命令**
```javascript:title
if(条件式){
  条件式がtrueの場合に実行する命令
} else {
  条件式がfalseの場合に実行する命令
}
```
```javascript:title
例)
let x = 15;
if(x >= 10){
  console.log('変数xは10以上です。');
} else {
  console.log(変数xは10未満です。);
} // 結果：変数xは10以上です。

変数xが10以上のときだけ処理を実行したい場合は
elesを省略できる。
```

**構文 else if命令**
```javascript:title
if(条件式1){
  条件式1がtrueの場合に実行する命令
} else if(条件式2) {
  条件式2がtrueの場合に実行する命令
} else {
  全ての条件式がfalseの場合に実行する命令
}
```

・for文

  for(let i = 0; i < 5; i++){
    処理を繰り返す
  }

・will文

  will(){
    case1:
    処理
    break;
    case2:
    処理
    break;
  }

・

innerText
innerHTML
getElementById
getElementByClassName
