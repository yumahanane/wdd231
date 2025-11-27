// Code Single Dialog Box

// const openButton = document.querySelector('#openButton');
// const dialogBox = document.querySelector('#dialogBox');
// const closeButton = document.querySelector('#closeButton');

// //"Show the dialog" button opens the dialog modally
// openButton.addEventListener('click', () => {
//     dialogBox.showModal();
// })

// //"Close" button closes the dialog 
// closeButton.addEventListener('click', () => {
//     dialogBox.close();
// })

// ----------------
// Code Reusable Dialog Box

const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox div'); // to target the div inside the id="dialogBox"


//"Show the dialog" button opens the dialog modally
openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Apple contains 95 calories`
})

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Orange contains 45 calories`
})

openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Banana contains 105 calories`
})

//"Close" button closes the dialog 
closeButton.addEventListener('click', () => {
    dialogBox.close();
})