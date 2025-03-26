const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const showNum = document.getElementById("num");
const button = document.getElementById("btn");
const Relode = document.getElementById("Rbtn");

showNum.textContent = "";

button.addEventListener("click", (e) => {
  e.preventDefault();
  //   window.location.reload();
  let Fnum = +num1.value;
  let Snum = +num2.value;
  // call this inside the function if not value is not updated
  clackRandom(Fnum, Snum);
});

// this time for logic

const clackRandom = function (minNum, Maxnum) {
  const rendom =
    Math.trunc(Math.random() * (Maxnum - minNum) + 1) + Number(minNum);
  showNum.innerText = rendom;
};

// relode button**************
Relode.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   num1.value = "";
  //   num2.value = "";
  showNum.textContent = "";
  window.Location.reload();
});

/*

 const rendom = Math.trunc(Math.random() * (Maxnum - minNum)) + minNum;
    //   console.log(rendom.value);


  // clackRandom(4, 10);
  */
