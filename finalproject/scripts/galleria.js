
const url = 'https://yumahanane.github.io/wdd231/finalproject/data/photos.json';

async function getGalleriaData() {
    const response = await fetch(url);
    const data = await response.json();
    displayPhotos(data.photos);

};



// call the function to create a section with all the courses, displayed by the title only


const allCourses = document.querySelector("#all");
allCourses.addEventListener("click", () => {
    filterCourses(updatedCourses);
    countCredits(updatedCourses);
});

const wddCourses = document.querySelector("#wdd");
wddCourses.addEventListener("click", () => {
    filterCourses(updatedCourses.filter(course => course.subject === "WDD"));
    countCredits(updatedCourses.filter(course => course.subject === "WDD"));

});

const cseCourses = document.querySelector("#cse");
cseCourses.addEventListener("click", () => {
    filterCourses(updatedCourses.filter(course => course.subject === "CSE"));
    countCredits(updatedCourses.filter(course => course.subject === "CSE"));

}); 



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

function filterCourses(coursesArray) {
    document.querySelector("#filtered").innerHTML = "";

    let cards = document.createElement("div");
    coursesArray.forEach(course => {
        let courseBox = document.createElement("section"); // A course

        courseBox.innerHTML = `${course['subject']} ${course['number']}`;

        cards.appendChild(courseBox);

        if (course['completed'] == false) {
            courseBox.setAttribute("class", "toNotColor");
        }

        courseBox.addEventListener('click', () => {
            displayCourseDetails(course);
        });
    });

    document.querySelector("#filtered").appendChild(cards);

}