const userInfo = new URLSearchParams(window.location.search)


document.querySelector('#form-results').innerHTML = `
<p>Name: ${userInfo.get('fname')}</p>
<p>Email: ${userInfo.get('email')}</p>
<p>Your Message: ${userInfo.get('feedback')}</p>
`;

// -------- preferences storage ------------------

const message = document.querySelector('#preference');

let preference = String(window.localStorage.getItem("pref"));

if (preference == "all") {
    message.innerHTML = `We hope you liked the outifts`;
} else {
    message.innerHTML = `We hope you liked the <strong>${preference}</strong> outifts`;
}



