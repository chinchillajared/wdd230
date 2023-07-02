//Get the main element to add the cards
const list_button = document.getElementById("list-button");
const grid_button = document.getElementById("grid-button");
const container = document.querySelector("main");

const url = "json/data.json";

//Add event listener to the list button
list_button.addEventListener("click", () => {
    const images = document.querySelectorAll("section img");
    images.forEach(image => {
        image.classList.add("image-v2");
    });

    const cards = document.querySelectorAll("main section");
    cards.forEach(card => {
        card.classList.remove("cards");
        card.classList.add("cards-v2");
    });

    const grid = document.querySelector("main");
    grid.classList.remove("directory-grid");
    grid.classList.add("directory-grid-v2");

    grid_button.classList.remove("active-button");
    list_button.classList.add("active-button");
});

//Add event listener to the grid button
grid_button.addEventListener("click", () => {
    const images = document.querySelectorAll("section img");
    images.forEach(image => {
        image.classList.remove("image-v2");
    });

    const cards = document.querySelectorAll("main section");
    cards.forEach(card => {
        card.classList.add("cards");
        card.classList.remove("cards-v2");
    });

    const grid = document.querySelector("main");
    grid.classList.remove("directory-grid-v2");
    grid.classList.add("directory-grid");

    grid_button.classList.add("active-button");
    list_button.classList.remove("active-button");
});


//Create a function to fetch the JSON data
async function getDirectory() {

    //Fetch the data
    const response = await fetch(url);
    const data = await response.json();

    //Loop through the data and create the cards
    data.businesses.forEach(business => {
        const card = document.createElement("section");
        card.classList.add("cards");

        const title = document.createElement("h2");
        title.textContent = business.name;
        card.appendChild(title);

        const image = document.createElement("img");
        image.setAttribute("src", business.logo);
        card.appendChild(image);

        const info = document.createElement("ul");
        
        const line = document.createElement("li");
        line.innerText = business.address;
        info.appendChild(line);

        const line2 = document.createElement("li");
        const website = document.createElement("a");
        website.innerText = business.website;
        website.setAttribute('href', business.website);
        line2.appendChild(website);
        info.appendChild(line2); 

        const line3 = document.createElement("li");
        line3.innerText = business.phone;
        info.appendChild(line3);

        card.appendChild(info);

        container.appendChild(card);
    });
}

getDirectory();




