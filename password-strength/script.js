const passsw = document.getElementById("password");
const background = document.querySelector(".backG");

passsw.addEventListener("input", (e) => {
  let input = e.target.value;

  let len = input.length;
  let cal = 10 - len;

  background.style.filter = `blur(${cal}px)`;
});

/*
passsw.addEventListener("input", (e) => { ... });: This line adds an event listener to the input field with the id "password". It listens for the "input" event, which fires every time the value of the input field changes. When the event is triggered, the function inside the arrow function ((e) => { ... }) is executed.

(e) => { ... }: This is an arrow function that handles the input event. The event object e contains information about the event, including the value of the input field.

let input = e.target.value;: This line retrieves the value that the user has typed into the input field and assigns it to the variable input.

let len = input.length;: This line calculates the length of the input string (i.e., the number of characters entered by the user) and assigns it to the variable len.

let cal = 10 - len;: This line calculates the difference between the maximum desired length of the password (10 characters, assumed) and the current length of the input. This difference is stored in the variable cal.

background.style.filter = blur(${cal}px);: This line adjusts the blur effect of the background element based on the calculated difference. It sets the CSS filter property of the background element to blur(${cal}px), where cal represents the calculated difference in pixels. As the user types characters into the password field, the background blur effect will change accordingly, becoming less blurred as the password reaches the desired length.
*/
