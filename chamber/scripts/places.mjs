import { areas } from '../data/areas.mjs';

// console.log(areas); // for testing

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

        card.setAttribute('id', 'acard');
        name.textContent = place.title;
        name.setAttribute('id', 'place-title');
        address.textContent = place.address;
        address.setAttribute('id', 'place-address');
        description.textContent = place.description;
        description.setAttribute('id', 'place-description');
        moredetails.innerHTML = `${place.moreinfo}`
        moredetails.textContent = "Learn More";
        moredetails.setAttribute('id', 'place-details');
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

        moredetails.addEventListener('click', () => {
            displayMoreDetails(place);
        });
    });
}

const moreDetails = document.querySelector('#dialogBox');

function displayMoreDetails(place) {
    moreDetails.innerHTML = "";
    moreDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2><strong>${place.title}</strong></h2>
    <p>${place.moreinfo}</p>
  `;
    moreDetails.showModal();

    closeModal.addEventListener("click", () => {
        moreDetails.close();
    });
}

