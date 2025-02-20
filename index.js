function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
  //;
  //let headingElement = document.querySelector("#current-city");
  // headingElement.innerHTML = apiUrl;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  let apiKey = "54b40b68f1a9f723bob4f1t2a78325f9";

  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=" +
    city +
    "&key=" +
    apiKey +
    "&units=metric";
  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();
let day = currentTime.getDay();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let formattedDate = days[day];
currentDate.innerHTML = formattedDate + " " + hours + ":" + minutes;
