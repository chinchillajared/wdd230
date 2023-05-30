//Display the menu when the hamburger button is clicked
function nav_menu(){
    document.getElementById('display-menu').classList.toggle('show');
    
}

const hamburger_button = document.getElementById('hamburger');
const hamburger_icon = document.getElementById('hamburger-icon');

hamburger_button.onclick = nav_menu;


//Show the current date
const display_date = document.querySelector("time");

const today = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);

display_date.textContent = fulldate;

//Show the last update date
const year = today.getFullYear();

document.getElementById("current-year").textContent = `${year} Well Union Commerce Association`;

document.getElementById("today").textContent = `Last updated: ${document.lastModified}`;

//Code tp shoe the banner at the top of the pages on Mondays or Tuesdays

//Store the banner on a variable 
const banner = document.getElementById('dynamic-banner')

//Get the current day
let day_of_week = today.getDay();
 
//Conditional to show the banner depending of the day
if (day_of_week === 1 || day_of_week === 2){
    banner.style.display = 'block';
}


//Remove the banner when the X button is pressed
const remove_banner = document.getElementById('remove')

remove_banner.addEventListener('click', function(){
    banner.style.display = 'none';
})