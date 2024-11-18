const accesskey = "oBgtpytb0KUXU4oAoiQmftNWDAEBJ1z4JqhVoKazpdo";
const searchForm = document.querySelector("form");
const imageContainer = document.getElementById("imageContainer");

// <!-- api key      ->>>>>>>>>> **********  oBgtpytb0KUXU4oAoiQmftNWDAEBJ1z4JqhVoKazpdo --> <!-- https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY      -------  aunthentication -->
// create a function*************

// fetching image using api key
// ivcUPE47C3RhWAVsvLNy6MwCdNH7N3oarYlisGWPRDE
const fetchImage = async (query) => {
  imageContainer.innerHTML = "";
  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=25&page=1&client_id=${accesskey}`;

  const response = await fetch(url);

  const data = await response.json();

  console.log(data);

  data.results.forEach((datas) => {
    const url = datas.urls.regular;
    const imageElement = document.createElement("div");
    imageElement.classList.add("imgcls");
    imageElement.innerHTML = `<img src="${url}"/>`;
    // creating overley
    const overleyElement = document.createElement("div");
    overleyElement.classList.add("overley");
    const desciption = datas.alt_description;
    const overleyText = document.createElement("h3");
    overleyText.innerHTML = `${desciption}`;

    overleyElement.appendChild(overleyText);
    imageElement.appendChild(overleyElement);
    imageContainer.appendChild(imageElement);
  });
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(searchInput.value);
  const searchInput = document.getElementById("searchInput");
  const inputText = searchInput.value.trim();

  if (inputText !== "") {
    fetchImage(inputText);
  } else {
    imageContainer.innerHTML = `<h2 style="color:red">Please type your search image</h2>`;
  }
});

/******************************************************************* another code*** */
