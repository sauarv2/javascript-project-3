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

const displayMovement = function (movements) {
  containerMovements.innerHTML = " ";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov} 💶 </div>
  </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} 💶`;
};
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// add in  out and interest ------------------------------

const calcBalance = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${incomes}💶`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}💶`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumInterest.textContent = `${interest}💶`;
};

// create user name -----------------------------

const createUserName = function (acc) {
  acc.forEach((accs) => {
    accs.username = accs.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUserName(accounts);

// update ui function*************************************

const updateUI = function (acc) {
  displayMovement(acc.movements);

  //   // display balnce ------------------------

  calcDisplayBalance(acc);

  //   // display summery-----------------
  calcBalance(acc);
};
let currAccount;

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  currAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currAccount?.pin === Number(inputLoginPin.value)) {
    // display ui and message-------------------------
    labelWelcome.textContent = `Welcome back, 
    ${currAccount.owner.split(" ")[0]}`;

    containerApp.style.opacity = 100;
    // clear input fields.............................
    inputLoginUsername.value = inputLoginPin.value = "";

    inputLoginPin.blur();
    // display movement --------------------------------
    // update the balnace thts the create dynamic value
    updateUI(currAccount);
    //   displayMovement(currAccount.movements);

    //   // display balnce ------------------------

    //   calcDisplayBalance(currAccount);

    //   // display summery-----------------
    //   calcBalance(currAccount);
  }
});

// transfer the money**************************

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    reciverAcc &&
    reciverAcc?.username !== currAccount.username &&
    amount > 0 &&
    amount <= currAccount.balance
  ) {
    // Doing the transfar
    reciverAcc.movements.push(amount);
    currAccount.movements.push(-amount);
    // update ui
    updateUI(currAccount);
  }
});

// console.log(accounts);

/*
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
*/

// max value*****************************

// const max = function (mov) {
//   const maxval = mov.reduce((acc, curr) => {
//     if (acc > curr) return acc;
//     else return curr;
//   }, mov[0]);
//   // console.log(maxval);
// };

// const movements2 = [-200, 450, -400, 3000, -650, -130, 70, 1300];
// max(movements2);

// console.log(max);
