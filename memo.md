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


・if文
  if
  else
  else if

  if(条件){
    実行
  } else {
    実行
  }

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
