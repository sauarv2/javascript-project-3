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
