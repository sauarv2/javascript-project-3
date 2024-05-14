// const result = document.getElementById("result");
// const filter = document.getElementById("filter");
// const listItem = [];
// getData();

// filter.addEventListener("input", (e) => {
//   filterData(e.target.value);
// });
// async function getData() {
//   const res = await fetch("https://randomuser.me/api/?results=50");

//   const { results } = await res.json();

//   //   console.log(results);

//   //clear result ...

//   results.innerHTML = " ";

//   results.forEach((user) => {
//     const li = document.createElement("li");

//     listItem.push(li);

//     li.innerHTML = `
//     <img src ="${user.picture.large}" alt="${user.name.frist}">

//     <div class="user-info">
//     <h4> ${user.name.first} ${user.name.last}</h4>
//     <p>${user.location.city}, ${user.location.country}</p>
//     </div>
//     `;

//     result.appendChild(li);
//   });
// }

// function filterData(searchData) {
//   listItem.forEach((item) => {
//     if (item.innerText.toLowerCase().includes(searchData.toLowerCase())) {
//       item.classList.remove("hide");
//     } else {
//       item.classList.add("hide");
//     }
//   });
// }
/*
Variable Declarations:

result: This variable stores a reference to the HTML element with the ID "result" using document.getElementById(). This element will be used to display the list of users.
filter: This variable stores a reference to the input element with the ID "filter" using document.getElementById(). This element will be used for user input to filter the list.
listItem: This is an empty array that will be used to store references to the individual list items (<li> elements) created for each user.
Initial Data Fetch (getData function):

async function getData() { ... }: This is an asynchronous function named getData that fetches data from the Random User API.
const res = await fetch("https://randomuser.me/api/?results=50");: This line fetches data from the Random User API endpoint, which generates 50 random users. The fetch() function returns a Promise that resolves with a Response object. The await keyword is used to wait for the Promise to resolve before proceeding.
const { results } = await res.json();: This line parses the JSON response from the API and destructures the results property into a separate variable. This variable now holds an array of objects, each representing a random user.
Commented-out line (// console.log(results);): This line is commented out but could be used for debugging purposes to see the structure of the fetched data in the console.
Commented-out lines (//clear result ..., results.innerHTML = " ";): These lines are also commented out and seem to be intended to clear any existing content in the "result" element. However, the provided code doesn't actually set any content before fetching data, so this clearing might not be necessary.
results.forEach((user) => { ... });: This line iterates over the results array using a forEach loop. For each user object in the array:
const li = document.createElement("li");: A new list item (<li>) element is created using document.createElement().
listItem.push(li);: The newly created list item (li) is pushed into the listItem array for later reference.
li.innerHTML = ...;: The inner HTML of the list item is set using a template literal. This creates the following structure:
HTML
<img src ="${user.picture.large}" alt="${user.name.frist}">
<div class="user-info">
  <h4> ${user.name.first} ${user.name.last}</h4>
  <p>${user.location.city}, ${user.location.country}</p>
</div>
Use code with caution.
content_copy
The template literal incorporates user data from the API response:
src ="${user.picture.large}": Sets the image source to the user's large profile picture URL.
alt="${user.name.frist}": Sets the alternative text for the image (intended to be "user.name.first" but likely misspelled as "frist").
<h4> ${user.name.first} ${user.name.last}</h4>: Displays the user's full name in an <h4> element.
<p>${user.location.city}, ${user.location.country}</p>: Displays the user's city and country in a <p> element.
result.appendChild(li);: The newly created list item (li) is appended as a child of the "result" element, effectively adding it to the list displayed on the page.
Filtering Function (filterData function):

function filterData(searchData) { ... }: This function is named filterData and takes a searchData parameter as input.


*/
