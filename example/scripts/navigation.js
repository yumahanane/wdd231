const navButton = document.querySelector('#nav-button');
const navLinks = document.querySelector('#nav-bar');


// when clicked, it toggles the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
})


