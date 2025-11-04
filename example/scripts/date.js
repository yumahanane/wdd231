// last modified code
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


var date = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last modification: " + date;
