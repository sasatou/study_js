(function (){
  'use strict';

  // vue.jsとは
  // 双方向データバインディング
  // データとUIを結びつける
  // データを更新すれば、UIをが更新され
  // UIが更新されれば、データが更新される。
  // var vm = new Vue({
  //   el: '#app',
  //   data: {
  //     name: 'sasaki'
  //   }
  // });

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [{
        title: 'task 1',
        isDone: false
      },{
        title: 'task 2',
        isDone: false
      },{
        title: 'task 3',
        isDone: true
      }]
    },
    methods: {
      // これでもいいけど
      // addItem: function(e) {
      //   e.preventDefault();
      //   this.toods.push(this.newItem);
      // }
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        }
        this.todos.push(item);
        this.newItem = "";
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      }
    }
  });

  // var hide = document.getElementById('hide');
  // var show = document.getElementById('show');
  //
  // show.addEventListener('click', function() {
  //   document.body.className = 'menu-open';
  // });
  //
  // hide.addEventListener('click', function() {
  //   document.body.className = '';
  // });

})();
