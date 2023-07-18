//-------------------------- Navigation -----------------------
//Toggle the navigation menu
const nav_toggle = document.getElementById("nav-toggle");

nav_toggle.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("show");
    nav_toggle.querySelector("span:nth-child(1)").classList.toggle("rotate");
    nav_toggle.querySelector("span:nth-child(2)").classList.toggle("rotate2");
    nav_toggle.querySelector("span:nth-child(3)").classList.toggle("remove");
});

//-------------------------- Images banner -------------------
//Change the image of the banner

if(window.location.href.includes("index.html")){
let banner_index = 0;
const banner_images = document.querySelector(".coastal-images");
const banner_button = document.getElementById("next");
banner_button.addEventListener("click", () => {

    fetch("json/coastal.json")
    .then(response => response.json())
    .then(data => {
       banner_index++;
       if(banner_index >= data.beaches.length) banner_index = 0;
       banner_images.querySelector("h2").innerText = data.beaches[banner_index].name;
       banner_images.querySelector("img").setAttribute("src", data.beaches[banner_index].img);
       banner_images.querySelector("p").innerText = data.beaches[banner_index].description;
    })
 });



//-------------------------- Get the current weather --------------------------
//Get the current weather. Carlsbad, California. 33.11, -117.29
//To get the icons. https://openweathermap.org/img/wn/{logo}.png
fetch("https://api.openweathermap.org/data/2.5/weather?lat=33.11&lon=-117.29&units=imperial&appid=be137bcff78136c8612eca7bc571f47f")
.then(response => response.json())  
.then(data => {
    console.log(data);
    document.querySelector(".weather div img").setAttribute("src", 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png');
    document.querySelector(".weather div img").setAttribute("alt", data.weather[0].description);
    document.getElementById("condition").innerText = data.weather[0].description;
    document.getElementById("temp").innerText = 'Temperature: ' + data.main.temp + "°F";
    document.getElementById("humi").innerText = 'Himidity: ' + data.main.humidity + '%';
})

//Call 5 day / 3 hour forecast data. https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const day1 = document.querySelector(".days div:nth-child(1)");
const day2 = document.querySelector(".days div:nth-child(2)");
const day3 = document.querySelector(".days div:nth-child(3)");

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const today = new Date().getDay();
let forecast = [];
let last_day;
fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33.11&lon=-117.29&units=imperial&appid=be137bcff78136c8612eca7bc571f47f")
.then(response => response.json())
.then(data => {
    data.list.forEach(element => {

        //Get the unix time from the API and convert it to hours and days
        let time = new Date(element.dt * 1000);
        let day = time.getDay();  
        let hour = time.getHours();


        if(day != today && forecast.length < 3 && last_day != day && hour >= 9){
            last_day = day;
            forecast.push(element);

            if(day1.querySelector("h3").innerText == "Loading..."){
            day1.querySelector("h3").innerText = days[day];
            day1.querySelector("img").setAttribute("src", 'https://openweathermap.org/img/wn/' + forecast[0].weather[0].icon + '.png');
            day1.querySelector("img").setAttribute("alt", forecast[0].weather[0].description);
            day1.querySelector("p").innerText = forecast[0].main.temp + "°F";
            }
            else if(day2.querySelector("h3").innerText == "Loading..."){
            day2.querySelector("h3").innerText = days[day];
            day2.querySelector("img").setAttribute("src", 'https://openweathermap.org/img/wn/' + forecast[1].weather[0].icon + '.png');
            day2.querySelector("img").setAttribute("alt", forecast[1].weather[0].description);
            day2.querySelector("p").innerText = forecast[1].main.temp + "°F";
            }
            else if(day3.querySelector("h3").innerText == "Loading..."){
            day3.querySelector("h3").innerText = days[day];
            day3.querySelector("img").setAttribute("src", 'https://openweathermap.org/img/wn/' + forecast[2].weather[0].icon + '.png');
            day3.querySelector("img").setAttribute("alt", forecast[2].weather[0].description);
            day3.querySelector("p").innerText = forecast[2].main.temp + "°F";
            }
        }
    });
 })
}


//-------------------------- Footer --------------------------
//Display the current year
const footer_year = document.getElementById("year");
const last_update = document.getElementById("last-update");
const current_year = new Date().getFullYear();
footer_year.innerText = current_year + " Bountiful Foods";
last_update.innerText = "Last update: " + document.lastModified;


//-------------------------- Fresh --------------------------
//Get the fresh products from the json file

if(window.location.href.includes("fresh.html")){

    const column1 = document.getElementById("fruits-column1");
    const column2 = document.getElementById("fruits-column2");
    const column3 = document.getElementById("fruits-column3");

    async function getFruits(){
        const response = await fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
        const data = await response.json();

        data.forEach(element => {
            let option = document.createElement("option");
            option.setAttribute("value", element.name);
            option.innerText = element.name;
            column1.appendChild(option); 
            column2.appendChild(option.cloneNode(true));
            column3.appendChild(option.cloneNode(true));
        });
    }

    getFruits();
}