// Select HTML elements for current weather 
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const figCaption = document.querySelector("figcaption");

// Select HTML elements for weather forecast
const currentday = document.querySelector("#today");
const tomorrow = document.querySelector("#tomorrow");
const aftertomorrow = document.querySelector("#dayaftertomorrow");

// Define URL
const key = `a6879f332f76c71d2de2a6391b3a219f`;
const lat = "-19.8324";
const long = "34.8408";

const url = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`;

// Fetch Data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //for testing
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// To determine days of the week
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = new Date();

// Display data
function displayResults(data) {
    // for current weather
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.list[0].weather[0].description);
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;C`; // &deg; is code for degree symbol
    figCaption.innerHTML = `${data.list[0].weather[0].description}`;

    // for weather forecast
    currentday.innerHTML = `Today: <strong>${data.list[0].main.temp}&deg;C</strong>`;
    tomorrow.innerHTML = `${weekday[day.getDay() + 1]}: <strong>${data.list[1].main.temp}&deg;C</strong>`; 
    aftertomorrow.innerHTML = `${weekday[day.getDay() + 2]}: <strong>${data.list[2].main.temp}&deg;C</strong>`; 
}

apiFetch();



