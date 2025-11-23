const cards = document.querySelector('#spotlights');

const companiesurl = 'https://yumahanane.github.io/wdd231/chamber/data/members.json';

async function getMembersData() {
    const response = await fetch(companiesurl);
    const data = await response.json();
    displayMembers(data.companies);
};

getMembersData();

function displayMembers(companies) {
    cards.innerHTML = "";

    companies.forEach(company => {
        if (company.membershiplevel == 2 || company.membershiplevel == 3) {
            
            let card = document.createElement('section');
           
            let name = document.createElement('h2');
            let logo = document.createElement('img');
            let address = document.createElement('p');
            let contact = document.createElement('p');
            let siteurl = document.createElement('a');

            name.textContent = company.name;
            address.innerHTML = `<strong>Address</strong>: ${company.address}`;
            contact.innerHTML = `<strong>Phone</strong>: ${company.contact}`;
            siteurl.innerHTML = `${company.websiteurl}`;
            siteurl.setAttribute('href', company.websiteurl);
            siteurl.setAttribute('target', '_blank');
            logo.setAttribute('src', company.imageurl);
            logo.setAttribute('alt', `Logo of ${company.name}`);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', '150');
            logo.setAttribute('height', 'auto');
            
            card.appendChild(name);
            card.appendChild(logo);
            card.appendChild(address);
            card.appendChild(contact);
            card.appendChild(siteurl);

            cards.appendChild(card);
        }
    });

}

