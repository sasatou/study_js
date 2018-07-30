(function() {
  'use strict'

  // var open = document.getElementById("open");
  var opens = document.getElementsByClassName("open");
  var mask = document.getElementById('mask');
  var modal = document.getElementById('modal');
  var close = document.getElementById('close');

  // open.addEventListener('click', function() {
  //   mask.className = '';
  //   modal.className = '';
  // });

  // 複数ボタンがあった場合
  for (var i = 0; i < opens.length; i++) {
    opens[i].addEventListener('click', function() {
      mask.className = '';
      modal.className = '';
    });
  }

  close.addEventListener('click', function() {
    mask.className = 'hidden';
    modal.className = 'hidden';
  });

  mask.addEventListener('click', function() {
    // this.className = 'hidden';
    // modal.className = 'hidden';
    close.click();
  });

})();
