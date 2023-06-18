//Get the main element to add the cards
const list_button = document.getElementById("list-button");
const grid_button = document.getElementById("grid-button");
const container = document.querySelector("main");



const url = "json/data.json";


//Add event listener to the list button
list_button.addEventListener("click", () => {
    container.setAttribute("id", "directory-grid-v2");
    container.querySelectorAll("main section").forEach(card => {
        card.setAttribute("id", "directory-v3");
    });
    grid_button.classList.remove("active-button");
    list_button.classList.add("active-button");
    //Remove the images from the cards
    const cards = container.querySelectorAll("main section");
    cards.forEach(card => {
        let image = card.querySelector("img");
        card.removeChild(image);
    });
});

//Add event listener to the grid button
grid_button.addEventListener("click", () => {
    if(container.hasAttribute("id")) {
        container.removeAttribute("id");
    }
    list_button.classList.remove("active-button");
    grid_button.classList.add("active-button");
    //Add the images to the cards
    const cards = container.querySelectorAll("main section");
    cards.forEach(card => {
        container.removeChild(card);
    });
    getDirectory();
});


//Create a function to fetch the JSON data
async function getDirectory() {

    //Fetch the data
    const response = await fetch(url);
    const data = await response.json();

    //Loop through the data and create the cards
    data.businesses.forEach(business => {
        const card = document.createElement("section");

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




