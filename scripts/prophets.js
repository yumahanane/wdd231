const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data); // to test the data response. The data is an array of objects named prophets
    displayProphets(data.prophets); // instead of data, the parameter needs to be an array. That is why data.prophets. 
};

getProphetData();

const displayProphets = (prophets) => { //this is a function expression that has the parameter prophets.
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullname = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let portrait = document.createElement('img');

        fullname.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // tried to set the value to fullname, but it does not work
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '285');
        portrait.setAttribute('height', '360');

        card.appendChild(fullname);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card); //cards is declared above (check second line of this file)
       
    });

}