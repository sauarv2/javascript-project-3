const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

const location_not_found = document.querySelector(".location-not-found");
const emptyLocation = document.querySelector(".empty-not-found");

const weather_body = document.querySelector(".weather-body");

// create a function************************
async function checkWeather(city) {
  if (city == "") {
    emptyLocation.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }
  // fetch api***************************
  weather_body.style.display = "flex";
  const apiKey = "3860debf0040d3725756439e3cd60a84";

  const websiet = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const weatherData = await fetch(`${websiet}`).then((response) =>
    response.json()
  );

  if (weatherData.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }
  emptyLocation.style.display = "none";
  location_not_found.style.display = "none";
  console.log(weatherData);

  //   adding dynMIC Vlue***************

  //   temp******************
  temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;

  //   windspeed
  wind_speed.innerHTML = `${weatherData.wind.speed}`;

  //   description
  description.innerHTML = `${weatherData.weather[0].main}`;
  //   humidity
  humidity.innerHTML = `${weatherData.main.humidity}%`;

  //    changing weather image according to decription
  //   switch case*******************************
  /*

  switch (weatherData.weather[0].main) {
    case "Clouds":
      weather_img.src = "/image/cloud.png";
      break;
    case "Clear":
      weather_img.src = "/image/clear.png";
      break;
    case "Rain":
      weather_img.src = "/image/rain.png";
      break;
    case "Mist":
      weather_img.src = "/image/mist.png";
      break;
    case "Snow":
      weather_img.src = "/image/snow.png";
      break;
  }
*/

  // using include method*******************************

  const weather = weatherData.weather[0].main;

  console.log(weather);
  let word1 = "Clouds";
  let word2 = "Clear";
  let word3 = "Rain";
  let word4 = "Mist";
  let word5 = "Snow";
  let word6 = "Haze";

  if (weather.includes(word1)) {
    weather_img.src = "/image/cloud.png";
  } else if (weather.includes(word2)) {
    weather_img.src = "/image/clear.png";
  } else if (weather.includes(word3)) {
    weather_img.src = "/image/rain.png";
  } else if (weather.includes(word4)) {
    weather_img.src = "/image/mist.png";
  } else if (weather.includes(word5)) {
    weather_img.src = "/image/snow.png";
  } else if (weather.includes(word6)) {
    weather_img.src = "/image/haze.png";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
