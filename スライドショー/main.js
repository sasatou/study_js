(function() {
  'use strict';

  var files = [
    'img/food0.jpg',
    'img/food1.jpg',
    'img/food2.jpg',
    'img/food3.jpg'
  ];

  var currentNum = 0;
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var target = document.getElementById('target');
  var thumbnails = document.getElementById('thumbnails');
  var play = document.getElementById('play');
  var pause = document.getElementById('pause');
  // イベントが発火したかを管理
  var isRunning = false;
  // setTimeoutの戻り値を入れる変数。
  var timer;

  function createThumbnails() {
    var i;
    var li;
    var img;
    for (i = 0; i < files.length; i++) {
      li = document.createElement('li');
      // 指定した要素上に新しい属性を追加
      li.setAttribute('data-index', i);
      li.addEventListener('click', function() {
        target.src = this.children[0].src;
        thumbnails.children[currentNum].className = '';
        currentNum = this.dataset.index;
        this.className = 'current';
      });
      img = document.createElement('img');
      img.src = files[i];
      li.appendChild(img);
      thumbnails.appendChild(li);
    }
  }

  function playSlideshow() {
    // 戻り値を入れた
    timer = setTimeout(function() {
      next.click();
      playSlideshow();
    }, 1500);
  }

  createThumbnails();

  thumbnails.children[currentNum].className = 'current';

  prev.addEventListener('click', function(){
    thumbnails.children[currentNum].className = '';
    currentNum--;
    if (currentNum < 0) {
      currentNum = files.length -1;
    }
    target.src = files[currentNum];
    thumbnails.children[currentNum].className = 'current';
  });

  next.addEventListener('click', function(){
    thumbnails.children[currentNum].className = '';
    currentNum++;
    if (currentNum > files.length -1) {
      currentNum = 0;
    }
    target.src = files[currentNum];
    thumbnails.children[currentNum].className = 'current';
  });

  play.addEventListener('click', function() {
    if (isRunning === true) {
      return;
    }
    isRunning = true;
    playSlideshow();
    this.className = 'hidden';
    pause.className = '';
  });

  pause.addEventListener('click', function() {
      clearTimeout(timer);
      this.className = 'hidden';
      play.className = '';
  });

})();
