const btn = document.querySelectorAll(".btn");
const count = document.querySelector(".count");
let cnt = 0;
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("incre")) {
      cnt++;
    } else if (btn.classList.contains("decre")) {
      cnt--;
    }
    count.textContent = cnt;

    if (cnt > 0) {
      count.style.color = "green";
    } else if (cnt < 0) {
      count.style.color = "red";
    } else {
      count.style.color = "blue";
    }
  });
});
