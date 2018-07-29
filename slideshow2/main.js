(function () {
  'use strict'

  let INTERVAL = 2000;

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
  let thmList = document.getElementById('thmList');
  let timer;

  // サムネイルを表示
  function createThumbnails () {
    var li;
    var img;
    for (var i = 0; i < images.length; i++) {
      li = document.createElement('li');
      li.dataset.index = i;
      li.addEventListener('click', function () {
        thmList.children[current].className = '';
        mainImage.src = this.children[0].src;
        current = this.dataset.index;
        this.className = 'current_image';
        clearTimeout(timer);
        displayPageNumber();
        playSlideshow();
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
      thmList.appendChild(li);
    }
  }

  // 自動スライド
  function playSlideshow () {
    timer = setTimeout(function () {
      next.click();
    }, INTERVAL);
  }

  // ページ番号の表示
  function displayPageNumber () {
    page.textContent = (Number(current) + 1) + '/' + images.length;
  }
  displayPageNumber();
  createThumbnails();
  playSlideshow();

  // 戻るボタン
  prev.addEventListener('click', function () {
    clearTimeout(timer);
    thmList.children[current].className = '';
    current--;
    if (current < 0) {
      current = images.length -1;
    }

    mainImage.src = images[current];
    thmList.children[current].className = 'current_image';
    displayPageNumber();
    playSlideshow();
  });

  // 次へのボタン
  next.addEventListener('click', function () {
    clearTimeout(timer);
    thmList.children[current].className = '';
    current++;
    if (current > images.length -1) {
      current = 0;
    }

    mainImage.src = images[current];
    thmList.children[current].className = 'current_image';
    displayPageNumber();
    playSlideshow();
  });

})();
