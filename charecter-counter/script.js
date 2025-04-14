// const { name } = require("ejs");

const area = document.getElementById("textarea");
const num = document.querySelector(".totalCh");
const container = document.querySelector(".container");
const space = document.querySelector(".totalSp");
const linee = document.querySelector(".totalLi");
const words = document.querySelector(".totalWd");
const clear = document.querySelector(".clBtn");
const copybtn = document.querySelector(".copyBtn");
const sBtn = document.querySelector(".sectBtn");
const remaing = document.querySelector(".totalRe");
const arr = [];
let fritArr;
let artoStr;
let conve;
const maxChars = 500;
area.addEventListener("keyup", () => {
  let char = area.value;

  // Cpitalize the frist letter
  // arr.push(area.value);
  // arr.map((str) => {
  //   fritArr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  // });
  // area.value = fritArr;
  // no. of charecter*****************
  let charLen = char.length;
  num.innerText = `${charLen}`;
  let namee = char;
  let count = 0;
  // no. of space***************
  //  spaceCount.textContent = (text.match(/ /g) || []).length;
  for (let i = 0; i <= namee.length; i++) {
    let space = " ";
    if (space === namee[i]) {
      count++;
    }
  }
  space.innerText = `${count}`;
  // find words in text box*************************
  let wordss = char.match(/\b\w+\b/gm);
  // console.log(wordss);
  words.innerText = `${wordss.length}`;

  // find restriction word**********************
  let resTicwords = /\bFuck\b|\bsex\b|\bfuck\b|\bSex\b|\bporn\b|\bPorn\b/gm;

  area.value = char.replace(resTicwords, "###");

  // console.log(o);
  // no. of line ****************
  let linnn = char.split(/\r\n|\r|\n/).length;
  linee.innerText = `${linnn}`;

  // charecter limit ******************
  let charLimit = Number(maxChars - charLen);
  if (charLimit < 0) {
    charLimit = 0;
  }
  remaing.innerText = `${charLimit}`;

  // if the charecter more than 500
  if (char.length > 500) {
    num.style.color = "red";
  } else {
    num.style.color = "white";
  }
  arr.push(area.value);
  // Cpitalize the frist letter

  arr.map((str) => {
    fritArr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
  area.value = fritArr;
});

// clear the input filed*************************
clear.addEventListener("click", (e) => {
  e.preventDefault();
  area.value = " ";
  num.textContent = "0";
  space.textContent = "0";
  words.textContent = "0";
  linee.textContent = "0";
  remaing.textContent = maxChars;
});
// copy the text**************************************
copybtn.addEventListener("click", (e) => {
  e.preventDefault();
  area.select();
  // document.execCommand("copy");
  navigator.clipboard.writeText(area.value);
});
// selct the text btn******************************
sBtn.addEventListener("click", (e) => {
  e.preventDefault();
  area.select();
});

// select the text*******************************

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
