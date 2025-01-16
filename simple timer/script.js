const resetBtn = document.getElementById("reset");
const playBtn = document.getElementById("play");

const timerBtn = document.getElementById("timer");
const root = document.querySelector(":root");

// initial setup

const totalSec = 70;
let playing = false;

let currSec = totalSec;

timerBtn.innerText = fomat(totalSec);
const timer = setInterval(timeRunner, 1000);
// play btn click function*********
resetBtn.addEventListener("click", () => {
  playing = false;
  currSec = totalSec;
  timerBtn.innerText = fomat(currSec);
});
playBtn.addEventListener("click", () => {
  playing = !playing;
  // if (playing) {
  //   timeRunner();
  // } else {
  //   stopTimer();
  // }
  console.log(playing);
});

// format sec function
function fomat(secounds) {
  const minutes = Math.floor(secounds / 60);

  const newSec = secounds % 60;

  return `${minutes.toString().padStart(2, "0")}:${newSec
    .toString()
    .padStart(2, "0")}`;
}
// pause the timser function***
function stopTimer() {
  clearInterval(timer);
}
// time runner function which one run the time and animate the circle

function timeRunner() {
  if (playing) {
    currSec -= 1;
  }
  if (currSec <= 0) {
    clearInterval(timer);
  }
  timerBtn.innerText = fomat(currSec);
  root.style.setProperty("--degrees", calcDeg());
}

function calcDeg() {
  return `${360 - (currSec / totalSec) * 360}deg`;
}
