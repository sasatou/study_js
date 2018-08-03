(function() {
  'use strict';

  var btn = document.getElementById('btn');
  var card = document.getElementById('card');
  var cardFront = document.getElementById('card-front');
  var cardBack = document.getElementById('card-back');

  var words = [
    {'en': 'read', 'ja': '読む' },
    {'en': 'write', 'ja': '書く' },
    {'en': 'eat', 'ja': '食べる' },
    {'en': 'run', 'ja': '走る' },
    {'en': 'walk', 'ja': '歩く' }
  ];

  card.addEventListener('click', function() {
    flip();
  });

  btn.addEventListener('click', function() {
    next();
  });

  btn.addEventListener('mousedown', function() {
    this.className = 'on';
  });
  btn.addEventListener('mouseup', function() {
    this.className = '';
  });

  function next() {
    if (card.className === 'open'){
      card.addEventListener('transitionend', setCard);
      flip();
    } else {
      setCard();
    }
  }

  function setCard() {
    var n = Math.floor(Math.random() * words.length);
    cardFront.innerHTML = words[n]['en'];
    cardBack.innerHTML =  words[n]['ja'];
    card.removeEventListener('transitionend', setCard);
  }

  setCard();

  window.addEventListener('keyup', function(e) {
    // e.keyCode
    // f:70
    // n:78
    if (e.keyCode === 70) {
      flip();
    } else if(e.keyCode === 78) {
      next();
    }
  });

  function flip() {
    // 三項演算子 id cardのclassが殻だったらopenをつけそうじゃなかったらカラにしなさい。
    card.className = card.className === '' ? 'open' : '';
  }

})();
