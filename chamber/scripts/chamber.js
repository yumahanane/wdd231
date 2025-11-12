const url = 'https://yumahanane.github.io/wdd231/chamber/data/members.json';

const cards = document.querySelector('#cards');

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies); 
};

getCompaniesData();

const displayCompanies = (companies) => { 
    companies.forEach(company => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let contact = document.createElement('p');
        let siteurl = document.createElement('p');

        address.textContent = company.address;
        contact.textContent = company.contact;
        siteurl.textContent = company.websiteurl;
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