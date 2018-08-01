(function (){
  'use strict';

  var likeComponent = Vue.extend({
    // props: ['message'],
    props: {
      message: {
        type: String,
        default: 'Like'
      }
    },
    data: function() {
      return {
        count: 0
      }
    },
    // 複数の要素を含めたい場合は親要素で括る必要がある
    // template: '<div><button>Like</button><button>Dis</button></div>'
    template: '<button @click="countUp">{{ message }}{{ count }}</button>',
    methods: {
      countUp: function() {
        this.count++;
        this.$emit('inctement');
      }
    }
  });

  var app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    },
    data: {
      total: 0
    },
    methods: {
      inctementTotal: function() {
        this.total++;
      }
    }
  });


  var comPragraph = Vue.extend({
    // template: '<div><p class="hoge">ぱらぐらふ</p><p class="hoge">ぱらぐらふ</p><p class="hoge">ぱらぐらふ</p></div>'
    template: '<p class="hoge">ぱらぐらふ</p>'
  });

  var paragraph = new Vue({
    el: '#pg',
    components: {
      'com-paragraph': comPragraph
    }
  });

var vueIcon = Vue.extend( {
  template:
  '<svg class="vueIcon" width="20" height="20" viewBox="0 0 512 512">' +
  '<path d="M420.1 197.9c-1.5 33.6-25 79.5-70.3 137.8 -46.9 60.9-86.5 91.4-118.9 91.4 -20.1 0-37.1-18.5-51-55.6 -9.3-34-18.5-68-27.8-102 -10.3-37.1-21.4-55.7-33.2-55.7 -2.6 0-11.6 5.4-27 16.2L75.7 209.1c17-14.9 33.8-29.9 50.3-44.9 22.7-19.6 39.7-29.9 51.1-31 26.8-2.6 43.3 15.8 49.5 55 6.7 42.4 11.3 68.7 13.9 79 7.7 35.1 16.2 52.7 25.5 52.7 7.2 0 18-11.4 32.5-34.2 14.4-22.8 22.2-40.1 23.2-52.1 2.1-19.7-5.7-29.5-23.2-29.5 -8.3 0-16.8 1.9-25.5 5.7 16.9-55.5 49.3-82.4 97.1-80.9C405.5 130 422.2 153 420.1 197.9z" />' +
  '</svg>'
} );

var vueicon = new Vue( {
  el: '#icons',

  components: {
    'vue-icon': vueIcon
  }

});

})();
