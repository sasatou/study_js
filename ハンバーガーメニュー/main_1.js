(function (){
  'use strict';

  var menu = document.getElementById('menu');
  var main = document.getElementById('main');
  var show = document.getElementById('show');

  show.addEventListener('click', function() {
    // if文の場合
    // if (main.className === 'menu-open') {
    //   main.className = '';
    // } else {
    //   main.className = 'menu-open';
    // }
    // 条件演算子だと1行
    main.className = main.className === 'menu-open' ? '' : 'menu-open'
  });

})();
