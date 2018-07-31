(function (){
  'use strict';

  var hide = document.getElementById('hide');
  var show = document.getElementById('show');

  show.addEventListener('click', function() {
    document.body.className = 'menu-open';
  });

  hide.addEventListener('click', function() {
    document.body.className = '';
  });

})();
