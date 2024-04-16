const btn = document.querySelectorAll(".btn");
const count = document.querySelector(".count");
let cnt = 0;
btn.forEach((btn) => {
  //  This line adds a click event listener to each button. When a button is clicked, the function inside the listener is executed.

  btn.addEventListener("click", () => {
    if (btn.classList.contains("incre")) {
      //if the clicked button has a class "incre". If it does, it increments the count (cnt++).
      cnt++;
    } else if (btn.classList.contains("decre")) {
      //  This condition checks if the clicked button has a class "decre". If it does, it decrements the count (cnt--).
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

    //If cnt is greater than 0, the count text color becomes green. If cnt is less than 0, the count text color becomes red. If cnt is 0, the count text color becomes blue.
  });
});
