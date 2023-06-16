const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const container = document.querySelector('div.cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    data.prophets.forEach(data => {

        //create the section element
        const card = document.createElement('section');

        //create the title element and set the text content
        const title = document.createElement('h2');
        title.innerText = data.name + ' ' + data.lastname;
        card.appendChild(title)

        // Create the image element and set the attributes
        const image = document.createElement('img');
        image.setAttribute('src', data.imageurl)
        image.setAttribute('loading', 'lazy')
        image.setAttribute('alt', `Portrait of ${data.name} ${data.lastname}`);
        card.appendChild(image);

        const info = document.createElement('ul');

        const line = document.createElement('li');
        line.textContent = `Date of Birth: ${data.birthdate}`;
        info.appendChild(line);
        
        const line2 = document.createElement('li');
        line2.textContent = `Place of Birth: ${data.birthplace}`;
        info.appendChild(line2);

        const line3 = document.createElement('li');
        line3.textContent = `Date of Death: ${data.death}`;
        info.appendChild(line3);

        const line4 = document.createElement('li');
        line4.textContent = 'Number of children: ' + data.numofchildren;
        info.appendChild(line4);

        card.appendChild(info);

        container.appendChild(card)
    });
}

getProphetData();