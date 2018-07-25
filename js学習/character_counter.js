(function () { // 即時関数
  'use strict'; // strictモード(厳格モード)

  // id input_textのエレメントを取得
  let e = document.getElementById('input_text');
  // 初期値をセット 入力制限が10文字なので10を設定
  document.getElementById('character_count').innerHTML = '10';

  // keyupのイベント発生時に、入力文字数をコンソールに出力
  e.addEventListener('keyup', function () {
    // テキストエリアの文字列を変数に代入
    let str = e.value;

    // 改行の削除(正規表現)
    str = str.replace(/\r?\n/g, '');

    // 文字数の表示
    // 入力最大文字数10から変数strで取得した結果の文字数を引く
    let remaining = 10 - str.length;
    // spanのid character_countを取得しタグ内に変数remainingで取得した結果の文字数を表示
    document.getElementById('character_count').innerHTML = remaining;

    // 文字数を超えた場合の処理
    // 文字数が0以上だった場合は
    if (remaining >= 0) {
      // pタグのid character_count_wrapを取得しスタイル カラー 黒を指定
      document.getElementById('character_count_wrap').style.color = 'black';
      // それ以外だった場合は
    } else {
      // pタグのid character_count_wrapを取得しスタイル カラー を指定
      document.getElementById('character_count_wrap').style.color = 'red';
    }
  });
})();

/*
 * 正規表現について
 *
 * str = str.replace(/\r?\n/g, '');
 *
 * 正規表現と言うものを使って、改行エスケープ文字であれば、
 * 空文字に置換すると言う処理を行なっている。
 *
 * 正規表現
 * ある文字列から、文字列パターンに一致する文字列を探すことができる。
 * 文字列から、特定の文字列を抽出、置換、削除したい時に利用。
 *
 * 解説
 * テキストの中から全ての改行エスケープ文字「\r\n」「\n」を削除
 *「/\r?\n/」と「g」に分けて考える。
 *
 *「/\r?\n/」
 * この「?」は「0回または1回」あるの指定。
 *
 * 「\r」の出現が0回、
 * 又は、
 * 「\n」か「\r」が1回ある「\r\n」が条件に一致。
 *
 * これだけだと、最初の改行コードしか置換できないので、
 * 複数回出現した、改行コードを除去するために、
 * 最後に「g」をつけます。
 */
