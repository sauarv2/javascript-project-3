const image = document.getElementById("imgs");
const left = document.getElementById("left");
const right = document.getElementById("right");

const images = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(set, 2000);

function set() {
  idx++;

  changeingImg();
}

function reset() {
  clearInterval(interval);
  interval = setInterval(set, 2000);
}

function changeingImg() {
  if (idx > images.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = images.length - 1;
  }
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
