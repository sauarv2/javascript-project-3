const area = document.getElementById("textarea");
const num = document.querySelector("span");

area.addEventListener("keyup", () => {
  let char = area.value;
  let charLen = char.length;

  num.innerText = `${charLen}`;
});
