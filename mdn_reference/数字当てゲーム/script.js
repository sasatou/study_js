(function() {
  'use strict';

  var randomNumber = Math.floor(Math.random() * 100) + 1;

  var guesses = document.querySelector('.guesses');
  var lastResult = document.querySelector('.lastResult');
  var lowOrHi = document.querySelector('.lowOrHi');

  var guessSubmit = document.querySelector('.guessSubmit');
  var guessField = document.querySelector('.guessField');

  var guessCount = 1;
  var resetButton;

  guessField.focus();

  function checkGuess() {
    // 入力結果を数字にして代入
    var userGuess = Number(guessField.value);
    // 予想が1だった場合以下の処理を行う
    if (guessCount === 1) {
      // 予想エリアにテキストを表示
      guesses.textContent = '前回の予想: ';
    }
    // 結果と文字列を足し上げてテキストを表示
    guesses.textContent += userGuess + ' ';
    // 予想がランダム値と一致した場合
    if (userGuess === randomNumber){
      lastResult.textContent = 'おめでとう! 正解です';
      lastResult.style.backgroundColor = 'green';
      // 正解なので判定はなし
      lowOrHi.textContent = '';
      // ユーザーの予想回数が10回になったとき
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!ゲームオーバー!!!';
      // ゲームを初期化する変数を実行
      setGameOver();
      // それ以外は
    } else {
      lastResult.textContent = '間違いです';
      lastResult.style.backgroundColor = 'red';
      // ユーザーの予想がランダム値より小さかった場合
      if(userGuess < randomNumber) {
        lowOrHi.textContent = '今の予想は小さすぎです!もっと大きな数字です。';
        // ユーザーの予想がランダム値より大きかった場合
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = '今の予想は大きすぎです!もっと小さな数字です。';
      }
    }

    // 予想回数を+1カウントする
    guessCount++;
    // フォームを空にする
    guessField.value = '';
    // フォームにフォーカスをあわせる
    guessField.focus();

  }
  // ボタンをクリック時に関数checkGuessを発火
  guessSubmit.addEventListener('click', checkGuess);

  // ゲームオーバー時の処理
  function setGameOver() {
    // フォーム、ボタンを触れないようにします
    guessField.disabled = true;
    guessSubmit.disabled = true;
    // 変数resetButtonにbuttonタグを代入
    resetButton = document.createElement('button');
    // buttonタグにテキストを生成
    resetButton.textContent = '新しいゲームを始める';
    // bodyの子要素にリセットbuttonを生成
    document.body.appendChild(resetButton);
    // リセットbuttonを押すと関数restGameが発火
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = '';
    }
    // resetButtonの親要素の子供（resetButton）を削除 要は自分自身を削除
    resetButton.parentNode.removeChild(resetButton);
    // 状態を初期化
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;

  }

})();
