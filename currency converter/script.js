const fromAmout = document.querySelector(".fromAmount");
const toAmout = document.querySelector(".toAmount");
const AmouNt = document.getElementById("amount");
const convertedAmout = document.getElementById("converted-amount");

// make  arrey of country code**********************
const countries = [
  { Code: "USD" },
  { Code: "INR" },
  { Code: "EUR" },
  { Code: "GBP" },
];

// create a function get exchange rate by  API************************

const getExchange = () => {
  // select the country using for each loopp************
  countries.forEach((country) => {
    const opt1 = document.createElement("option");
    const opt2 = document.createElement("option");
    opt1.value = opt2.value = country.Code;

    opt1.textContent = opt2.textContent = `${country.Code}`;

    // using append child*********************
    fromAmout.appendChild(opt1);
    toAmout.appendChild(opt2);
  });
  const amount = parseFloat(fromAmout.value);

  //fetch data from api***********

  const response = fetch(`
    https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${country.Code}.json

`);
};

getExchange();
