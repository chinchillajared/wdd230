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
    document.querySelector(".weather div p").innerText = data.weather[0].description;
    document.querySelector(".weather div span").innerText = data.main.temp + "°F";
})

//Call 5 day / 3 hour forecast data. https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33.11&lon=-117.29&units=imperial&appid=be137bcff78136c8612eca7bc571f47f")


//-------------------------- Footer --------------------------
//Display the current year
const footer_year = document.getElementById("year");
const current_year = new Date().getFullYear();
footer_year.innerText = current_year;

