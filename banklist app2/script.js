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
  movementsDates: [
    "2025-05-21T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
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

// no of days function
const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daypassed = calcDaysPassed(new Date(), date);

  if (daypassed === 0) return "Today";
  if (daypassed === 1) return "Yesterday";
  if (daypassed <= 7) return `${daypassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
};

const displayMovement = function (acc) {
  containerMovements.innerHTML = ``;
  //   text content is empty 👆
  acc.movements.forEach((mov, i) => {
    // current time
    let currtime = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(currtime);
    let date = (currtime.getDate() < 10 ? "0" : "") + currtime.getDate();
    let month = (currtime.getMonth() < 10 ? "0" : "") + currtime.getMonth();
    let year = currtime.getFullYear();
    let hour = `${currtime.getHours()}`.padStart(2, "0");
    let minutes = `${currtime.getMinutes()}`.padStart(2, "0");

    // labelDate.innerText = `, ${hour} ${minutes} `;

    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${mov.toFixed(2)}💲</div>
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
  labelBalance.textContent = `${acc.balance.toFixed(2)}💲`;
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
  labelSumIn.textContent = `${income.toFixed(2)}$`;

  const expense = acc.movements
    .filter((mov) => mov <= 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(expense).toFixed(2)}$`;

  // update date.........................

  setInterval(() => {
    // current time
    let currtime = new Date();
    let date = (currtime.getDate() < 10 ? "0" : "") + currtime.getDate();
    let month = (currtime.getMonth() < 10 ? "0" : "") + currtime.getMonth();
    let year = currtime.getFullYear();
    let hour = `${currtime.getHours()}`.padStart(2, "0");
    let minutes = `${currtime.getMinutes()}`.padStart(2, "0");

    labelDate.innerText = `${+date}/${
      +month + 1
    }/${+year}, ${hour} ${minutes} `;
  }, 1000);

  // interest amount ******************************
  const IntAnout = 1.2;

  const CalcInt = acc.movements
    .filter((mov) => mov >= 0)
    .map((mov) => (mov * IntAnout) / 100)
    .filter((mov) => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${CalcInt.toFixed(2)}$`;
};

const UIupdate = function (acc) {
  displayMovement(acc);

  // display UI belance******
  calcPrintBalance(acc);

  // display UI summery***********

  calckDisplay(acc);
};

// fake login

// let currentUser;

// currentUser = account1;
// UIupdate(currentUser);
// containerApp.style.opacity = 1;

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
    finduser.movementsDates.push(new Date().toISOString());
    reciverAccount.movements.push(amount);
    reciverAccount.movementsDates.push(new Date().toISOString());
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

// asking for lone amoment********************************

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  if (amount >= 0 && finduser.movements.some((mov) => mov >= amount * 0.1)) {
    finduser.movements.push(amount);
    finduser.movementsDates.push(new Date().toISOString());
    UIupdate(finduser);
  }

  // inputLoanAmount.value = "";
});

// sorted ***********************

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  // BUG in video:
  // displayMovements(currentAccount.movements, !sorted);

  // FIX:
  displayMovement(currentAccount, !sorted);
  sorted = !sorted;
});
