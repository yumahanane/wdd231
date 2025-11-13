
const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const cards = document.querySelector('#cards');

const url = 'https://yumahanane.github.io/wdd231/chamber/data/members.json';

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();

    gridbutton.addEventListener('click', () => {
        displayCompaniesGrid(data.companies);
    })

    listbutton.addEventListener('click', () => {
        displayCompaniesList(data.companies);
    });
};

getCompaniesData();


function displayCompaniesGrid(companies) {
    cards.innerHTML = "";

    companies.forEach(company => {
        let card = document.createElement('section');
        card.setAttribute('class', 'grid-card');

        let logo = document.createElement('img');
        let address = document.createElement('p');
        let contact = document.createElement('p');
        let siteurl = document.createElement('p');

        address.textContent = company.address;
        contact.textContent = company.contact;
        siteurl.innerHTML = `${company.websiteurl}`;
        logo.setAttribute('src', company.imageurl);
        logo.setAttribute('alt', `Logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', 'auto');

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(siteurl);

        cards.appendChild(card);
    });
}

function displayCompaniesList(companies) {
    cards.innerHTML = "";

    companies.forEach(company => {
        let card = document.createElement('section');
        card.setAttribute('class', 'list-card');

        let name = document.createElement('p');
        let address = document.createElement('p');
        let contact = document.createElement('p');
        let siteurl = document.createElement('p');

        name.textContent = company.name;
        address.textContent = company.address;
        contact.textContent = company.contact;
        siteurl.textContent = company.websiteurl;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(siteurl);

        cards.appendChild(card);
    });
}
