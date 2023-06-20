// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const condition_container = document.querySelector(".condition-container h3");
const year = document.getElementById("current-year");

//Display the year 
let date = new Date();
let currentYear = date.getFullYear();
year.textContent = currentYear;

//End point (https://api.openweathermap.org/data/2.5/weather?)
//API query string values (q=city&units=unit&appid=APIkey)

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=be137bcff78136c8612eca7bc571f47f';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
    
        displayResults(data);

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    condition_container.innerText = weatherData.main.temp.toFixed(0) + "° F";

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  }