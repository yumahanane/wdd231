const memberInfo = new URLSearchParams(window.location.search)


document.querySelector('#form-results').innerHTML = `
<p>Name: ${memberInfo.get('fname')} ${memberInfo.get('lname')}</p>
<p>Business/Organization: ${memberInfo.get('org')}</p>
<p>Phone: ${memberInfo.get('phone')}</p>
<p>Email: ${memberInfo.get('email')}</p>
<p>Date Submitted: ${memberInfo.get('timestamp')}</p>
`;

