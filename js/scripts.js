/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function playAudio() {
  setTimeout(function () {
    document.getElementById("music").play();
  }, 5000);
}
window.onload = function () {
  let music = document.getElementById("music");
  let musicControlBtn = document.getElementById("musicControlBtn");
}

function toggleMusic() {
  var musicIcon = document.getElementById("musicIcon");

  if (music.paused) {
    music.play();
    musicIcon.classList.remove("bi-play");
    musicIcon.classList.add("bi-pause");
    musicControlBtn.classList.remove("paused");
    musicControlBtn.classList.add("playing");
  } else {
    music.pause();
    musicIcon.classList.remove("bi-pause");
    musicIcon.classList.add("bi-play");
    musicControlBtn.classList.remove("playing");
    musicControlBtn.classList.add("paused");
  }
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});