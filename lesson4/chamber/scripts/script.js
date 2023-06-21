//Display the menu when the hamburger button is clicked
function nav_menu(){
    document.getElementById('display-menu').classList.toggle('show');

    if (hamburger_icon.getAttribute('src') === 'images/x.svg'){
        hamburger_icon.setAttribute('src', 'images/menu.svg');
    }
    else {
        hamburger_icon.setAttribute('src', 'images/x.svg');
    }
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



//---------------------------------------------- Joint page ----------------------------------------------

//Add an event listener to the radio buttons    (remember to add the class seleceted to the labels and not the input)

const radio_buttons = document.querySelectorAll('input[type="radio"]');

let last_modified;

radio_buttons.forEach(button => {
    
button.addEventListener('click', function(){
    if(button.parentNode.classList.contains('selected')){
        button.parentNode.classList.remove('selected');
        
    }
    
    else {
        button.parentNode.classList.add('selected');
        
        if (last_modified) {
            last_modified.parentNode.classList.remove('selected');
          }

          last_modified = button;
    }

});

});

//---------------------------------------------- Discover page ----------------------------------------------

//display the amount of time in days (rounded to a whole number) between user visits to this page by the user's agent (browser).


if (localStorage.getItem("first_time_visit") === null) {

    localStorage.setItem("first_time_visit", Date.now());
    
    }
    
    let last_visit = Date.now() - localStorage.getItem("first_time_visit");
    
    let seconds = last_visit / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = Math.floor(hours / 24);
    
    if(days === 1) {
        document.getElementById("last-visit").textContent = `Your First visit was ${days} day ago 🌎`;
    }
    
    else{
        document.getElementById("last-visit").textContent = `Your First visit was ${days} days ago 🌎`;
    }
    
    
    //Lazy load 
    
    const images = document.querySelectorAll('[data-src]');
    
    function preloadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) {
            return;
        }
        img.src = src;
    }
    
    
    
    const imgOptions = {
        threshold: 1,
        rootMargin: "0px 0px 100px 0px"
    };
    
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions);
    
    images.forEach(image => {
        imgObserver.observe(image);
    });
    
    
