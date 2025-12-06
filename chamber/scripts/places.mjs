import { areas } from '../data/areas.mjs';

console.log(areas);


const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const cards = document.querySelector('#cards');

displayAreas(areas);

cards.classList.add('grid');


gridbutton.addEventListener('click', () => {
    cards.classList.add('grid');
    cards.classList.remove('list');


})

listbutton.addEventListener('click', () => {
    cards.classList.add('list');
    cards.classList.remove('grid');
});

function displayAreas(places) {
    cards.innerHTML = "";

    places.forEach(place => {
        let card = document.createElement('section');
        
        let name = document.createElement('h2');
        let photo = document.createElement('img');
        let address = document.createElement('p');
        let description = document.createElement('p');
        let moredetails = document.createElement('button');

        name.textContent = place.title;
        address.textContent = place.address;
        description.textContent = place.description;
        moredetails.innerHTML = `${place.moreinfo}`
        moredetails.textContent = "Learn More";
        photo.setAttribute('src', place.imageurl);
        photo.setAttribute('alt', `Logo of ${place.title}`);
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', '300');
        photo.setAttribute('height', 'auto');

        card.appendChild(name);
        card.appendChild(photo);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(moredetails);

        cards.appendChild(card);
    });
}

