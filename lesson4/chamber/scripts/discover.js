//Show the current date
const today = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);

//Show the last update date
const year = today.getFullYear();

document.getElementById("current-year").textContent = `${year} Well Union Commerce Association`;


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
    document.getElementById("last-visit").textContent = `Your last visit was ${days} day ago 🌎`;
}

else{
    document.getElementById("last-visit").textContent = `Your last visit was ${days} days ago 🌎`;
}


//---------------------------------- Lazy load ----------------------------------
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


