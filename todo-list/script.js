const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

// console.log(todos);

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoEl.remove();
      updateLS();
    });

    todosUL.appendChild(todoEl);

    console.log(todoEl);

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  let todosEl = document.querySelectorAll("li");
  console.log(todosEl);

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

/*This code written in JavaScript uses the `const` keyword to declare several variables and functions responsible for managing a to-do list. Here's a breakdown of what the code does:

**1. Variable Assignments:**

* `form`: This variable stores a reference to the HTML element with the id "form". This likely refers to the form element where the user enters new to-do items.
* `input`: This variable stores a reference to the HTML element with the id "input". This is probably the input field where the user types their to-do task.
* `todosUL`: This variable stores a reference to the HTML element with the id "todos". This is most likely an unordered list (UL) element where the to-do items will be displayed.

**2. Loading To-Do Items from Local Storage (if available):**

* `todos`: This variable attempts to parse a JSON string retrieved from the browser's local storage using the key "todos". 
  * `JSON.parse`: This function converts a JSON string back into a JavaScript object.
*  The `if (todos)` block checks if there were any previously saved to-do items.
  * `todos.forEach`: If there are saved to-do items, this loop iterates through each to-do object and calls the `addTodo` function to recreate the list items.

**3. Adding a New To-Do Item:**

* The `form` element has an event listener attached to it that triggers the `submit` event whenever the form is submitted (likely by pressing the submit button).
  * `e.preventDefault()`: This line prevents the default form submission behavior, which would typically cause a page reload.
* Inside the event listener, the `addTodo` function is called without any arguments, indicating a new to-do item needs to be created.

**4. `addTodo` Function:**

* `let todoText = input.value;`: This line retrieves the current value from the input field and stores it in the `todoText` variable.
* The function also accepts an optional `todo` argument. This is used when recreating to-do items from local storage.
  * If `todo` exists, it overrides the `todoText` with the text property from the `todo` object.
*  An `if` statement checks if `todoText` has any value (not empty).
  * If there's text, a new list item element (`<li>`) is created and stored in the `todoEl` variable.
  * The function checks if the `todo` argument exists and if its `completed` property is true. If so, it adds the "completed" class to the list item, visually indicating a completed task.
  * The `todoEl.innerText` is set to the `todoText`, essentially displaying the to-do item on the list.
  * Two event listeners are attached to the `todoEl`:
      * `click` event listener: When the list item is clicked, it toggles the "completed" class, marking the task as completed or incomplete visually. It also calls the `updateLS` function to update local storage.
      * `contextmenu` event listener: This listens for the right-click event. If right-clicked, it prevents the default context menu and removes the list item from the DOM. It also calls `updateLS` to update local storage.
  * The new list item (`todoEl`) is appended to the `todosUL` element, essentially adding it to the to-do list on the page.
  * Finally, the `input.value` is reset to an empty string, clearing the input field for the next to-do item.
  * The `updateLS` function is called to save the updated to-do list to local storage.

**5. `updateLS` Function:**

* This function retrieves all list item elements (`<li>`) using `document.querySelectorAll("li")` and stores them in the `todosEl` variable.
* An empty array `todos` is created to store the to-do items as objects.
* The function iterates through each list item element (`todoEl`) using `forEach`.
  * Inside the loop, a new object is created and pushed to the `todos` array. This object contains two properties:
      * `text`: This property stores the text content of the list item.
      * `completed`: This property is set to `true` if the list item has the "completed" class, indicating a completed task.
* Finally, the `todos` array is converted back to a JSON string using `JSON.stringify` and saved to local storage under the key "todos" using `localStorage.setItem`.

In summary, this code manages a to-do list by storing and */
