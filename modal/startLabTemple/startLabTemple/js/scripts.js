import { temples } from '../data/temples.js'
//console.log(temples); //for testing

import { url } from '../data/temples.js'
//console.log(url); //for testing

// Grab a reference to the division ehere we display the items
const showHere = document.querySelector('#showHere');

// Get a reference to the HTML dialog element
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myclose = document.querySelector('#mydialog button');
const myinfo = document.querySelector('#mydialog p');

myclose.addEventListener('click', () => mydialog.close())

// Loop through the array of JSON items
function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src = `${url}${x.path}` //each temple has its own path for the temple picture. that is why we say x.path. It will grab that specific temple's path everytime it loops 
        photo.alt = x.name

        //Add an event listener to each division on the page
        photo.addEventListener('click', () => showStuff(x));

        showHere.appendChild(photo)
    })
}

displayItems(temples);

// Populate the dialog with information when image is clicked
function showStuff(x) {
    mytitle.innerHTML = x.name
    mydialog.showModal()
    myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`;
}