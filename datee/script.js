/*
const labelDate = document.querySelector(".date");

let date;
let month;
let year;

setInterval(() => {
  // current time
  let currtime = new Date();
  date = (currtime.getDate() < 10 ? "0" : "") + currtime.getDate();
  month = (currtime.getMonth() < 10 ? "0" : "") + currtime.getMonth();
  year = currtime.getFullYear();

  labelDate.innerText = `${+date}/${+month + 1}/${+year} `;
}, 1000);
*/

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142256980000));

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

// calculet number of days******************
// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// project number of  Days passed ****************************

const movementdays = [
  "2025-05-20T13:15:33.035Z",
  "2019-11-30T09:48:16.867Z",
  "2019-12-25T06:04:23.907Z",
  "2020-01-25T14:18:46.235Z",
  "2020-02-05T16:33:06.386Z",
  "2020-04-10T14:43:26.374Z",
  "2020-06-25T18:49:59.371Z",
  "2020-07-26T12:01:20.894Z",
];

function setDays(pDate) {
  return pDate.map((pdays, i) => {
    let pastdays = new Date(pdays);
    const numerDays = new Date() - pastdays;
    const noDay = Math.round(numerDays / (1000 * 60 * 60 * 24));

    if (noDay === 1) return "Today";
    if (noDay === 2) return "1 day ago";
    if (noDay <= 7) return `${noDay} day ago`;
    else return noDay;
  });
}
console.log(setDays(movementdays).join());
