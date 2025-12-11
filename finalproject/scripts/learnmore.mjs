import { sources } from '../data/sources.mjs';


createButton();

function createButton() {
    document.querySelector("#sourcesButton").innerHTML = "";

    let sourceButton = document.createElement("button");

    sourceButton.textContent = "Here";

    sourceButton.addEventListener('click', () => {
        displayDetails(sources);
    });

    document.querySelector("#sourcesButton").appendChild(sourceButton);

}

const sourcesDetails = document.querySelector('#dialogBox');

function displayDetails(sources) {
    sourcesDetails.innerHTML = "";

    let button = document.createElement("button");
    button.setAttribute("id", "closeModal");
    button.textContent = `❌`

    sourcesDetails.appendChild(button);
    
    sources.forEach(source => {
        let aSource = document.createElement("p");
        let title = document.createElement("p");
        let link = document.createElement("p");
        let space = document.createElement("p");

        aSource.textContent = source.source;
        title.textContent = source.title;
        link.textContent = source.url;
        space.textContent = `____________________`;

        sourcesDetails.appendChild(aSource);
        sourcesDetails.appendChild(title);
        sourcesDetails.appendChild(link);
        sourcesDetails.appendChild(space);
    });

     
    sourcesDetails.showModal();

    closeModal.addEventListener("click", () => {
        sourcesDetails.close();
    });
}
