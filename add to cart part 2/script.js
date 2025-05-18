const minusel = document.querySelectorAll(".minus");
const plusEl = document.querySelectorAll(".plus");

const val = document.querySelectorAll(".textbox");
const itemvalEl = document.querySelectorAll(".itemval");
console.log(itemvalEl);

// **********************************************************
plusEl.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    let chgval = parseInt(val[idx].value);

    chgval++;
    if (chgval > 7) chgval = 7;
    val[idx].value = chgval;

    itemvalEl[idx].textContent = (999 * chgval).toString();
  });
});
minusel.forEach((btn, idx) => {
  btn.addEventListener("click", function (e) {
    let chgval = parseInt(val[idx].value);
    if (chgval > 0) chgval--;

    val[idx].value = chgval;
    itemvalEl[idx].textContent = (999 * chgval).toString();
  });
});

/*

// document.addEventListener("DOMContentLoaded", function () {
// Get all plus, minus buttons and textboxes
const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const textboxes = document.querySelectorAll(".textbox");
const itemVals = document.querySelectorAll(".itemval");
const price = 999; // Assuming both items have same price for simplicity

// Add event listeners to all plus buttons
plusButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    let currentValue = parseInt(textboxes[index].value);
    currentValue++;
    textboxes[index].value = currentValue;
    itemVals[index].textContent = (currentValue * price).toString();
    updateCartCount();
  });
});

// Add event listeners to all minus buttons
minusButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    let currentValue = parseInt(textboxes[index].value);
    if (currentValue > 0) {
      currentValue--;
      textboxes[index].value = currentValue;
      itemVals[index].textContent = (currentValue * price).toString();
      updateCartCount();
    }
  });
});

// // Update cart count
// function updateCartCount() {
//   let totalItems = 0;
//   textboxes.forEach((textbox) => {
//     totalItems += parseInt(textbox.value);
//   });
//   document.querySelector("h2").textContent = `Cart (${totalItems} item${
//     totalItems !== 1 ? "s" : ""
//   })`;
// }

*/
