const currentTemp = document.querySelector(".current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const figCaption = document.querySelector("figcaption");


const tomorrow = document.querySelector("#tomorrow");
const aftertomorrow = document.querySelector("#dayaftertomorrow");

const key = `a6879f332f76c71d2de2a6391b3a219f`;
const lat = "-19.8324";
const long = "34.8408";




const url = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`;


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



function displayResults(data) {
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;C`; // &deg; is code for degree symbol

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    let desc = data.weather[0].description;
    figCaption.textContent = `${desc}`;



    tomorrow.innerHTML = `${data.main.temp}&deg;C`; // &deg; is code for degree symbol
    aftertomorrow.innerHTML = `${data.main.temp}&deg;C`; // &deg; is code for degree symbol

}


apiFetch();

