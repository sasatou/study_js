(function () {
  'use strict'

  let images = ['img/img1.jpg',
                'img/img2.jpg',
                'img/img3.jpg',
                'img/img4.jpg',
                'img/img5.jpg'];
  let current = 0;
  let prev = document.getElementById('prev');
  let next = document.getElementById('next');
  let page = document.getElementById('page');
  let mainImage = document.getElementById('main_image');
  // 指定された全ての要素を取得
  // let thumbs = document.querySelectorAll('.thumbnail_image');
  // for (let i = 0; i < thumbs.length; i++) {
  //   thumbs[i].addEventListener('click', function () {
  //     // imgタグのsrc属性を書き換える
  //     mainImage.src = 'img/' + this.dataset.image;
  //     current = this.dataset.index;
  //     displayPageNumber();
  //   });
  // }

  // サムネイルを表示
  // function createThumbnails () {
  //   let li;
  //   let img;
  //   for (let i = 0; i < images.length; i++) {
  //     li = document.createElement('li');
  //     li.dataset.index = i;
  //     li.addEventListener('click', function () {
  //       thumbList.children[current].className = '';
  //       mainImage.src = this.children[0].src;
  //       current = this.dataset.index;
  //       this.className = 'current_image';
  //       displayPageNumber();
  //     });
  //
  //     img = document.createElement('img');
  //     img.src = images[i];
  //     img.className = 'thumbnail_image';
  //     li.appendChild(img);
  //     thumbList.appendChild(li);
  //   }
  // }


  // サムネイルを表示
  function createThumbnails () {
    var li;
    var img;
    for (var i = 0; i < images.length; i++) {
      li = document.createElement('li');
      li.dataset.index = i;
      li.addEventListener('click', function () {
        thumbnails.children[current].className = '';
        mainImage.src = this.children[0].src;
        current = this.dataset.index;
        this.className = 'current_image';
        displayPageNumber();
      });

      if (i == 0) {
        li.className = 'current_image';
      } else {
        li.className = '';
      }

      img = document.createElement('img');
      img.src = images[i];
      img.className = 'thumbnail_image';
      li.appendChild(img);
      thumbnails.appendChild(li);
    }
  }

  // ページ番号の表示
  function displayPageNumber () {
    page.textContent = (Number(current) + 1) + '/' + images.length;
  }
  displayPageNumber();
  createThumbnails ();
  // 戻るボタン
  prev.addEventListener ('click', function () {
    current--;
    if (current < 0) {
      current = images.length -1;
    }

    mainImage.src = images[current];
    displayPageNumber();
  });
  // 次へのボタン
  next.addEventListener ('click', function () {
    current++;
    if (current > images.length -1) {
      current = 0;
    }

    mainImage.src = images[current];
    displayPageNumber();
  });

})();
