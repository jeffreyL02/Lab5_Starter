// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();

  let horn = document.getElementById('horn-select');
  let hornimg = document.querySelector('img');
  horn.addEventListener('input', () => {
    if(horn.value === 'air-horn') {
      hornimg.src = 'assets/images/air-horn.svg';
      document.querySelector('audio').src = 'assets/audio/air-horn.mp3';
    }
    else if(horn.value === 'car-horn') {
      hornimg.src = 'assets/images/car-horn.svg';
      document.querySelector('audio').src = 'assets/audio/car-horn.mp3';
    }
    else if(horn.value === 'party-horn') {
      hornimg.src = 'assets/images/party-horn.svg';
      document.querySelector('audio').src = 'assets/audio/party-horn.mp3';
    }
  });

  let slider = document.getElementById('volume');
  let audioIcon = document.getElementsByTagName('img')[1];
  let audio = document.getElementsByTagName('audio')[0];
  slider.addEventListener('input', () => {
    audio.volume = slider.value / 100;
    if(slider.value == 0) {
      audioIcon.src = 'assets/icons/volume-level-0.svg'
    }
    else if(slider.value >= 1 && slider.value < 33) {
      audioIcon.src = 'assets/icons/volume-level-1.svg'
    }
    else if(slider.value >= 33 && slider.value < 67) {
      audioIcon.src = 'assets/icons/volume-level-2.svg'
    }
    else {
      audioIcon.src = 'assets/icons/volume-level-3.svg'
    }
  });

  let playbtn = document.getElementsByTagName('button')[0];
  playbtn.addEventListener('click', () => {
    audio.play();
    if(horn.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });


}