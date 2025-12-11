
const url = 'https://yumahanane.github.io/wdd231/finalproject/data/photos.json';

async function getGalleriaData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayPhotos(data.photos);
    
        const allOutfits = document.querySelector("#all");
        allOutfits.addEventListener("click", () => {
            filterPhotos(data.photos);   
            localStorage.setItem("pref", "all");
        });

        const dressesOutfits = document.querySelector("#dresses");
        dressesOutfits.addEventListener("click", () => {
            filterPhotos(data.photos.filter(photo => photo.category === "dress"));
            localStorage.setItem("pref", "dresses");

        });

        const skirtsOutfits = document.querySelector("#skirts");
        skirtsOutfits.addEventListener("click", () => {
            filterPhotos(data.photos.filter(photo => photo.category === "skirt"));
            localStorage.setItem("pref", "skirts");

        });

        const pantsOutfits = document.querySelector("#pants");
        pantsOutfits.addEventListener("click", () => {
            filterPhotos(data.photos.filter(photo => photo.category === "pants"));
            localStorage.setItem("pref", "pants");

        });
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
};

getGalleriaData();



function displayPhotos() {
    document.querySelector("#menu").innerHTML = "";

    let options = document.createElement("division")
    let allButton = document.createElement("button");
    let dressButton = document.createElement("button");
    let skirtButton = document.createElement("button");
    let pantButton = document.createElement("button");


    options.setAttribute("id", "menu-options");
    allButton.textContent = "All Outfits";
    allButton.setAttribute("type", "button");
    allButton.setAttribute("id", "all");
    allButton.setAttribute("name", "all outfits");

    dressButton.textContent = "Dresses";
    dressButton.setAttribute("type", "button");
    dressButton.setAttribute("id", "dresses");
    dressButton.setAttribute("name", "dresses");

    skirtButton.textContent = "Skirts";
    skirtButton.setAttribute("type", "button");
    skirtButton.setAttribute("id", "skirts");
    skirtButton.setAttribute("name", "skirts");

    pantButton.textContent = "Pants";
    pantButton.setAttribute("type", "button");
    pantButton.setAttribute("id", "pants");
    pantButton.setAttribute("name", "pants");


    options.appendChild(allButton);
    options.appendChild(dressButton);
    options.appendChild(skirtButton);
    options.appendChild(pantButton);

    document.querySelector("#menu").appendChild(options);
}



function filterPhotos(photosArray) {
    document.querySelector("#filtered").innerHTML = "";

    let cards = document.createElement("div");
    photosArray.forEach(photo => {
        let card = document.createElement("section"); // A photo

        let image = document.createElement('img');
        let occasion = document.createElement('p');
        let category = document.createElement('p');
        let pattern = document.createElement('p');
        let fittype = document.createElement('p');

        occasion.innerHTML = `Occasion: ${photo.occasion}`;
        category.innerHTML = `Category: ${photo.category}`;
        pattern.innerHTML = `Pattern: ${photo.pattern}`;
        fittype.innerHTML = `Fitting: ${photo.fittype}`;
        image.setAttribute('src', photo.imageurl);
        image.setAttribute('alt', `Photo of ${photo.category} for ${photo.occasion} occasion`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');

        card.appendChild(image);
        card.appendChild(occasion);
        card.appendChild(category);
        card.appendChild(pattern);
        card.appendChild(fittype);

        cards.appendChild(card);
    });

    document.querySelector("#filtered").appendChild(cards);
}