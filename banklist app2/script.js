"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovement = function (acc) {
  containerMovements.innerHTML = ``;
  //   text content is empty 👆
  acc.movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}💲</div>
        </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

/////////////////////////////////////////////////
// create username********************/*
let username;
const createUsername = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((user) => user[0])
      .join("");
  });
};

createUsername(accounts);

// PRINT BALANCE********************************
let balance;
const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}💲`;
};

// display balance*********************
// find big num in movement
const clacBignum = function (movement) {
  return movement.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
  }, movement[0]);
};

clacBignum(account1.movements);

const calckDisplay = function (acc) {
  const income = acc.movements
    .filter((mov) => mov >= 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}$`;

  const expense = acc.movements
    .filter((mov) => mov <= 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(expense)}$`;

  const IntAnout = 1.2;

  const CalcInt = acc.movements
    .filter((mov) => mov >= 0)
    .map((mov) => (mov * IntAnout) / 100)
    .filter((mov) => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${CalcInt}$`;
};

const UIupdate = function (acc) {
  displayMovement(acc);

  // display UI belance******
  calcPrintBalance(acc);

  // display UI summery***********

  calckDisplay(acc);
};

// btn submit button **********************

let finduser;
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  finduser = accounts.find((acc) => acc.username === inputLoginUsername.value);

  if (finduser?.pin === Number(inputLoginPin.value)) {
    // display UI message******
    labelWelcome.textContent = `welcome back, ${finduser.owner.split(" ")[0]} `;
    containerApp.style.opacity = 1;

    inputLoginUsername.value = inputLoginPin.value = "";
    // display UI movement******

    UIupdate(finduser);
  } else {
    alert("invalid user or pin");
  }
});

// transfar the account**********************

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    reciverAccount &&
    finduser.balance >= amount &&
    reciverAccount?.username !== finduser.username
  ) {
    // doing transfer*****************
    finduser.movements.push(-amount);
    reciverAccount.movements.push(amount);
    UIupdate(finduser);
  } else {
    console.error("error");
  }
});

// delete this account *****************************

btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  let closeuser = accounts.find(
    (acc) => acc.username === inputCloseUsername.value
  );
  // console.log(closeuser);
  if (
    closeuser &&
    closeuser.username === finduser.username &&
    Number(inputClosePin.value) === finduser.pin
  ) {
    console.log("delete");

    inputClosePin.value = inputCloseUsername.value = "";
    containerApp.style.opacity = 0;

    const index = accounts.findIndex((acc) => acc === finduser);

    accounts.splice(index, 1);

    console.log(accounts);
  } else {
    console.error("not found");
  }
});

console.log(accounts);
