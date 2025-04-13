const form = document.querySelector("form");
const input = document.getElementById("userInput");
const text = document.getElementById("movements__value");
const showtext = document.getElementById("showText");
const button = document.getElementById("sub");
const MessageArr = [];
let html;
let realMessage;
button.addEventListener("click", function (e) {
  e.preventDefault(), MessageArr.push(input.value);

  MessageArr.reverse().forEach((mov, i) => {
    html = `<div class="movements__row">
          <div id="movements__value" class="movements__value">${mov}</div>
        </div>`;
  });

  showtext.insertAdjacentHTML("beforebegin", html);
  input.value = "";
});
