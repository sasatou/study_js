(function() {
  'use strict';

  var ths = document.getElementsByTagName('th');
  var i;
  var sortOrder = 1; // 1:昇順、 -1:降順

  for (var i = 0; i < ths.length; i++) {
    ths[i].addEventListener('click', function() {
      //  sort
      // var arr =['sasaki', 'koji', 'javascript'];
      // var rows = document.querySelectorAll('tbody > tr'); // NodeList
      var rows = Array.prototype.slice.call(document.querySelectorAll('tbody > tr'));

      var col = this.cellIndex; // thisの状態を受ける
      var type = this.dataset.type; // string, numberを判定

      // ソートアルファベット順
      rows.sort(function(a, b) { // tr, tr
        if(type === "number") {
          // tr から取り出す変数を_a, _b
          // 取得した文字列に1掛けると数字として判定してくれる
          var _a = a.children[col].textContent * 1;
          var _b = b.children[col].textContent * 1;
        }
        if(type === "string") {
          // a(tr).children(td)の[col](選択した要素)のテキスト要素を小文字にして返す
          var _a = a.children[col].textContent.toLowerCase();
          var _b = b.children[col].textContent.toLowerCase();
        }
        if (_a < _b){
          return -1 * sortOrder;
        }
        if (_a > _b) {
          return 1 * sortOrder;
        }
        return 0;
      });
      // console.log(rows);

      var tbody = document.querySelector('tbody');
      // 要素の最初の子供がいる限り要素を消し続ける、消す要素は要素の最初の子供
      while(tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }

      var j;
      for (var j = 0; j < rows.length; j++) {
        tbody.appendChild(rows[j]);
      }

      var k;
      for (var k = 0; k < ths.length; k++) {
        ths[k].className = '';
      }
      this.className = sortOrder === 1 ? 'asc' : 'desc';

      // 反転処理
      sortOrder *= -1;

    });
  }

})();
