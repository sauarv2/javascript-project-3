const tbodyEL = document.getElementById("tbody");
async function getData() {
  const Data = await fetch("https://dummyjson.com/users");
  //The function makes a GET request to the API at "https://dummyjson.com/users" using the fetch method, which returns a Promise.
  const records = await Data.json(); //method extracts the body of the response and converts it into a JavaScript object.

  //await ensures that the function waits for the JSON data to be fully converted before proceeding. The resulting object (which includes user data) is stored in the records variable.
  let tab = "";

  records.users.forEach((user, i) => {
    //records.users contains an array of user objects fetched from the API. The forEach method is used to iterate over each user in the array.
    tab += `<tr>
          <th scope="row">${i + 1}</th>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.age}</td>
          <td>${user.email}</td>
          <td>${user.gender}</td>
         
        </tr> `;
  });

  tbodyEL.innerHTML = tab;
}
