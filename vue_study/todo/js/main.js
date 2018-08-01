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
      todos: []
    },
    watch: {
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true
      }
    },
    mounted: function() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {
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
      },
      // 全ての完了タスクを削除する
      purge: function() {
        if (!confirm('delete finished?')) {
          return;
        }
        // this.todos = this.todos.filter(function(todo) {
        //   return !todo.isDone;
        // });
        this.todos = this.remaining;
      }
    },
    // 終了済みタスクをカウントする
    computed: {
      remaining: function() {
        // var items = this.todos.filter(function(todo) {
        //   return !todo.isDone;
        // });
        // return items.length;
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });

  var hide = document.getElementById('hide');
  var show = document.getElementById('show');

  show.addEventListener('click', function() {
    document.body.className = 'menu-open';
  });

  hide.addEventListener('click', function() {
    document.body.className = '';
  });

})();
