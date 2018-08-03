(function() {
  'use strict';

  var btn = document.getElementById('btn');


  btn.addEventListener('click', function(){
  //   var n = Math.floor(Math.random() * 4);
  //   if(n === 0){
  //     this.textContent = '大吉';
  //   } else if (n === 1) {
  //     this.textContent = '中吉';
  //   } else if (n === 2) {
  //     this.textContent = '吉';
  //   } else {
  //     this.textContent ='凶';
  //   }
    var n = Math.random();
    console.log(n);
    if (n < 0.1) {
      this.textContent = '大吉';
    } else if (n < 0.25) {
      this.textContent = '中吉';
    } else if (n < 0.4) {
      this.textContent = '吉';
    } else {
      this.textContent = '凶';
    }

  });
  // 確率変動

  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });

  btn.addEventListener('mouseup', function() {
    this.className = '';
  });

})();
