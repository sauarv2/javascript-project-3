const btn = document.querySelector("button");
const bdy = document.querySelector("body");

let color = ["#2ecc71", "#8e44ad", "#ecf0f1,", "#f39c12", "#f1c40f", "#e74c3c"];

btn.addEventListener("click", changeColor);
// This line attaches an event listener to the button element (btn).
// The listener listens specifically for the "click" event, which means whenever the button is clicked, the function changeColor() will be executed.

function changeColor() {
  const randomNum = parseInt(Math.random() * color.length);

  bdy.style.backgroundColor = color[randomNum];
}

// This defines a function named changeColor(). This function will be responsible for randomly changing the background color of the body element.

/*

Inside the function, a variable named randomNum is declared.
It uses Math.random() to generate a random decimal number between 0 (inclusive) and 1 (exclusive).
This number is then multiplied by the color array's length (color.length).


The parseInt() function is used to convert the resulting decimal value to an integer, representing an index within the color array.


This randomNum will be used to select a random color from the array.
bdy.style.backgroundColor = color[randomNum];:


This line accesses the style property of the body element (bdy).
It then sets the backgroundColor property of the body's style to the color value at the index randomNum within the color array.

Essentially, this changes the background color of the entire page to a random color from the array each time the button is clicked.
*/
