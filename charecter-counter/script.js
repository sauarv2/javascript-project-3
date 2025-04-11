// const { name } = require("ejs");

const area = document.getElementById("textarea");
const num = document.querySelector(".totalCh");
const container = document.querySelector(".container");
const space = document.querySelector(".totalSp");
const linee = document.querySelector(".totalLi");
const words = document.querySelector(".totalWd");
const clear = document.querySelector(".clBtn");

area.addEventListener("keyup", () => {
  let char = area.value;
  // no. of charecter*****************
  let charLen = char.length;
  num.innerText = `${charLen}`;
  let namee = char;
  let count = 0;
  // no. of space***************
  for (let i = 0; i <= namee.length; i++) {
    let space = " ";
    if (space === namee[i]) {
      count++;
    }
  }
  space.innerText = `${count}`;
  words.innerText = `${count}`;

  // no. of line ****************
  let linnn = char.split(/\r\n|\r|\n/).length;
  linee.innerText = `${linnn}`;
});

// clear the input filed*************************
clear.addEventListener("click", () => {
  area.value = " ";
});
// const CElement = document.createElement("div");
// CElement.classList.add("totalCh");
// CElement.innerHTML = `Totalcharecter of this text box ${area}`;
// container.appendChild(CElement);
// // let namee = ["s", "a", "u", "r", "a", "v"];
// let namee = "saurav ";
// let count = 0;

// for (let i = 0; i <= namee.length; i++) {
//   let space = " ";
//   if (space === namee[i]) {
//     count++;
//   }
// }
// console.log(count);

// console.log(charLen);
