//Current weather (San Jose Costa Rica)
//Set the latitude and longitud of the location from where you get the weather
const lat = "9.93";
const lon = "-84.10";
const api_key = "be137bcff78136c8612eca7bc571f47f";
const unit = "imperial";

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + api_key + '&units=' + unit;

//Get the weather data from the API
async function getWeather() {
    const response = await fetch(apiURL);
    const data = await response.json();

    //Display the data
    displayData(data);
}

getWeather();


//Display the data
function displayData(data) {

    console.log(data);

    //Distribute the data in variables
    let temperature = data.main.temp;
    let c_temperature = (temperature - 32) * 5 / 9;
    document.getElementById('temperature').innerText = c_temperature.toFixed(1) + '°C';

    let condition = data.weather[0].description;
    document.querySelector(".weather-sec img").setAttribute("alt", condition);
    document.querySelector(".condition").innerText = condition;

    let icon = data.weather[0].icon;
    document.querySelector(".weather-sec img").setAttribute("src", "https://openweathermap.org/img/w/" + icon + ".png");

    let wind_speed = data.wind.speed;
    let k_wind_speed = wind_speed * 1.60934;
    document.getElementById('wind-speed').innerText = k_wind_speed.toFixed(1) + ' km/h';

    //Specification limits  (<=50°F and >3.0mph)
    if (temperature >= 50 || wind_speed < 3) {
        document.getElementById('wind-child').innerText = 'N/A';
    }

    else {
        //Calculate the wind chill
        const wind_chill = 13.12 + 0.6215 * temperature - 11.37 * wind_speed ** 0.16 + 0.3965 * temperature * wind_speed ** 0.16;
        document.getElementById('wind-child').innerText = wind_chill.toFixed(1);
    }

}




