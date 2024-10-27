const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

const location_not_found = document.querySelector(".location-not-found");

const weather_body = document.querySelector(".weather-body");

// create a function************************
async function checkWeather(city) {
  // fetch api***************************
  const apiKey = "3860debf0040d3725756439e3cd60a84";

  const websiet = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const weatherData = await fetch(`${websiet}`).then((response) =>
    response.json()
  );

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
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
