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
        card.appendChild(address);
        card.appendChild(description);
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

// ---------- last visit tracking -------

const message = document.querySelector('#visits');

let visitsNum = Number(window.localStorage.getItem("visits-ls"));

localStorage.setItem("lastVisited", new Date().toISOString());

let lastvisit = Date(window.localStorage.getItem("lastVisited"));
// console.log(lastvisit); // for testing

let lastvisitInMs = new Date(lastvisit).getTime(); // to convert from Sat Dec 06 2025 21:17:38 GMT+0200 (South Africa Standard Time) to milliseconds
// console.log(ms) // for testing

let today = new Date();
// console.log(today); // for testing


let timediff = (lastvisitInMs - today);

if (visitsNum !== 0) {
    if (timediff < 1) {
        message.innerHTML = `Back so soon! Awesome!.`;
    } else {
        if (timediff == 1) {
            message.innerHTML = `You last visited ${timediff} day ago`;
        } else {
            message.innerHTML = `You last visited ${timediff} days ago`;
        }
    }
} else {
    message.textContent = `Welcome! Let us know if you have any questions.`;
}

visitsNum++;
localStorage.setItem("visits-ls", visitsNum);
