const image = document.getElementById("imgs");
const left = document.getElementById("left");
const right = document.getElementById("right");

const images = document.querySelectorAll("#imgs img");

let idx = 0;
// Declares a variable idx to track the current image index, starting at 0.

let interval = setInterval(set, 2000);
//Sets up a timer that calls the run function every 2 seconds (2000 milliseconds).

function set() {
  idx++;

  changeingImg();
}

function reset() {
  clearInterval(interval);
  interval = setInterval(set, 2000);
}

// Clears the existing interval (clearInterval(interval)).
// Recreates a new interval to restart the automatic image change (interval = setInterval(run, 2000)).

function changeingImg() {
  if (idx > images.length - 1) {
    idx = 0;
    //To handle this, the code sets idx = 0. This effectively resets the index to the first image (index 0).
  } else if (idx < 0) {
    idx = images.length - 1;
  }
  //   To handle this, the code sets idx = images.length - 1. This directly jumps to the last image's index, ensuring we don't try to access a non-existent image.

  image.style.transform = `translateX(${-idx * 200}px)`;
}

left.addEventListener("click", () => {
  idx--;
  reset();
  changeingImg();
});

right.addEventListener("click", () => {
  idx++;
  reset();
  changeingImg();
});
