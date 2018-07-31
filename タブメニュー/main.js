(function (){
  'use strict'

  var menuItems = document.getElementsByClassName('menu_item');
  var contents = document.getElementsByClassName('content');

  var i;

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(e) {
      // preventDefault()
      // 実行したイベントがキャンセル可能である場合、
      // イベントをキャンセルするためのメソッド
      e.preventDefault();

      var i;

      for (i = 0; i < menuItems.length; i++) {
        menuItems[i].className = 'menu_item';
      }

      this.className = 'menu_item active';

      for (i = 0; i < contents.length; i++) {
        contents[i].className = 'content';
      }
      // datasetはクラス属性を取得するプロパティ
      // data-id="about",data-id="service",data-id="contact"
      // を取りに行っている
      document.getElementById(this.dataset.id).className = 'content active';

    });
  }

})();
