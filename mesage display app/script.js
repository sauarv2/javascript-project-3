const form = document.querySelector("form");
const input = document.getElementById("userInput");
const text = document.getElementById("movements__value");
const showtext = document.getElementById("showText");
const button = document.getElementById("sub");
const MessageArr = [];

let realMessage;
button.addEventListener("click", function (e) {
  let html;
  e.preventDefault(), MessageArr.push(input.value);
  let rever = MessageArr.reverse();

  html = `<div class="movements__row">
  <div id="movements__value" class="movements__value">${rever[0]}</div>
  </div>`;
  console.log(rever);

  showtext.insertAdjacentHTML("beforeend", html);
  input.value = "";
});
