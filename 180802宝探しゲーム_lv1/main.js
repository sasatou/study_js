(function() {
  'use strict';

  var boxes = document.getElementsByClassName('box');

  var contents = [
    'img/coin.png',
    'img/cobra.png',
    'img/empty.png'
  ];

  // 初期設定の関数
  function init() {
    var i;
    for (i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', function() {
        var j;
        if (this.className.indexOf('shake') === -1) {
          return;
        }
        for (j = 0; j < boxes.length; j++) {
          boxes[j].src = contents[Math.floor(Math.random() * contents.length)];
          boxes[j].className = 'box disabled';
        }
        this.className = 'box';
        document.getElementById('btn').className = '';
      });
    }
  }

  init();

})();
