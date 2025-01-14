const resetBtn = document.getElementById("reset");
const playBtn = document.getElementById("play");

const timerBtn = document.getElementById("timer");
const root = document.querySelector(":root");

// initial setup

const totalSec = 100;
const playing = false;

let currSec = totalSec;

timerBtn.innerText = fomat(totalSec);

// format sec function
function fomat(secounds) {
  const minutes = Math.floor(secounds / 60);

  const newSec = secounds % 60;

  console.log(newSec);

  return `${minutes.toString().padStart(2, "0")}:${newSec
    .toString()
    .padStart(2, "0")}`;
}
