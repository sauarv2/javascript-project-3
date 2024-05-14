const codes = document.querySelectorAll(".code");

codes[0].focus();
codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = " ";
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});

// Let's break down what each part does:

// const codes = document.querySelectorAll(".code");: This line selects all elements in the HTML document that have the class "code" and stores them in an array-like NodeList called codes.

// codes[0].focus();: This line focuses on the first element in the NodeList codes, which means it brings the cursor to the first input field with the class "code".

// codes.forEach((code, idx) => {...});: This iterates over each element in the NodeList codes. For each element, it assigns the element to the variable code and its index to the variable idx.

// code.addEventListener("keydown", (e) => {...});: This line adds a keydown event listener to each input field with the class "code". When a keydown event occurs, the provided callback function is executed.

// if (e.key >= 0 && e.key <= 9) {...}: This condition checks if the key pressed is a numeric key (0-9).

// codes[idx].value = " ";: If the pressed key is numeric, it sets the value of the current input field to an empty string.
// Let's break down what each part does:

// const codes = document.querySelectorAll(".code");: This line selects all elements in the HTML document that have the class "code" and stores them in an array-like NodeList called codes.

// codes[0].focus();: This line focuses on the first element in the NodeList codes, which means it brings the cursor to the first input field with the class "code".

// codes.forEach((code, idx) => {...});: This iterates over each element in the NodeList codes. For each element, it assigns the element to the variable code and its index to the variable idx.

// code.addEventListener("keydown", (e) => {...});: This line adds a keydown event listener to each input field with the class "code". When a keydown event occurs, the provided callback function is executed.

// if (e.key >= 0 && e.key <= 9) {...}: This condition checks if the key pressed is a numeric key (0-9).

// codes[idx].value = " ";: If the pressed key is numeric, it sets the value of the current input field to an empty string.

// setTimeout(() => codes[idx + 1].focus(), 10);: After setting the value of the current input field, it sets a timeout of 10 milliseconds to focus on the next input field in the NodeList codes. This effectively moves the cursor to the next input field.

// else if (e.key === "Backspace") {...}: If the pressed key is the backspace key, it executes the following block of code.

// setTimeout(() => codes[idx - 1].focus(), 10);: After detecting the backspace key, it sets a timeout of 10 milliseconds to focus on the previous input field in the NodeList codes. This moves the cursor to the previous input field, effectively allowing the user to delete characters.

// setTimeout(() => codes[idx + 1].focus(), 10);: After setting the value of the current input field, it sets a timeout of 10 milliseconds to focus on the next input field in the NodeList codes. This effectively moves the cursor to the next input field.

// else if (e.key === "Backspace") {...}: If the pressed key is the backspace key, it executes the following block of code.

// setTimeout(() => codes[idx - 1].focus(), 10);: After detecting the backspace key, it sets a timeout of 10 milliseconds to focus on the previous input field in the NodeList codes. This moves the cursor to the previous input field, effectively allowing the user to delete characters.
