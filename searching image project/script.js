const searchForm = document.querySelector("form");
const imageContainer = document.getElementById("imageContainer");
const searchInput = document.getElementById("searchInput");
// <!-- api key      ->>>>>>>>>> **********  oBgtpytb0KUXU4oAoiQmftNWDAEBJ1z4JqhVoKazpdo --> <!-- https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY      -------  aunthentication -->
// create a function*************

// fetching image using api key

const fetchImage = (query) => {
  console.log(query);
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(searchInput.value);

  const inputText = searchInput.value.trim();

  if (inputText !== "") {
    fetchImage(inputText);
  } else {
    imageContainer.innerHTML = `<h2 style="color:red">Please type your search image</h2>`;
  }
});
