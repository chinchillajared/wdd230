
//Display the menu when the hamburger button is clicked
function nav_menu(){
    document.getElementById('display-menu').classList.toggle('show');
}

const hamburger_button = document.getElementById('hamburger');

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