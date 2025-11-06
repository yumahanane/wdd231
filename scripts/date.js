// get the year
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

// last modified
document.getElementById("lastModified").innerHTML = `Last modified: ${document.lastModified}`;
