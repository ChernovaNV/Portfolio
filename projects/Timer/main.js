const newYears = Date.now() + 20000; // '1 Jan 2022'

const countdown = document.querySelector('.countdown');
const title = document.querySelector('.title');
const video = document.querySelector('.video__media');
const soundBtn = document.querySelector('.sound-btn');
const mute = document.getElementById('mute');
const volume = document.getElementById('volume');

console.log(mute, volume);

let audio = new Audio();

countdowTimer();
let timer = setInterval(countdowTimer, 1000);


function countdowTimer() { 
  let currentDate = new Date();
  const newYearDate = new Date(newYears);

  let secondsLeft = Math.floor((newYearDate - currentDate) / 1000);

  let timeLeft = {
    days: 0,
    hours: 0,
    minets:  0,
    seconds: 0,
  };

  if (secondsLeft > 0) {
    timeLeft.days = Math.floor(secondsLeft / 3600 / 24);
    timeLeft.hours = Math.floor((secondsLeft / 3600) % 24);
    timeLeft.minets =  Math.floor((secondsLeft / 60) % 60);
    timeLeft.seconds = Math.floor(secondsLeft % 60);
    
    buildCountdown(timeLeft);
    soundTick('tick.mp3');
  } else if(secondsLeft === 0) {
    clearInterval(timer);
    playback();
  } else {
    title.innerHTML = 'С Новым 2022 годом!';
    clearInterval(timer);
  }
}

function buildCountdown(times) {
  countdown.innerHTML = '';
  let span = ['дней', 'часов', 'минут', 'секунд'];
  let i = 0;

  for(key in times) {
    countdown.innerHTML += `
    <div class="countdown__item">
      <p class="countdown__num" >${times[key]}</p>
      <span class="countdown__span">${span[i]}</span>
    </div>
    `
    i++;
  }
} 

function soundTick(src) {
  audio.src = src;
}

function playback() {
  title.innerHTML = 'С Новым 2022 годом!';
  countdown.innerHTML = '';
  video.play();
  soundTick('We Wish You a Merry Christmas.mp3');
}

soundBtn.addEventListener('click', () => {
  if(mute.classList.contains('is-none')) {
    mute.classList.remove('is-none');
    volume.classList.add('is-none');
    return audio.volume = 0;
  } else {
    mute.classList.add('is-none');
    volume.classList.remove('is-none');
    audio.autoplay = true;
    return audio.volume = 1;
  }
})