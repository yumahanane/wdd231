
const memberships = [
    {
        level: "Non Profit Membership Level",
        fee: "No Fees",
        benefits: "Online directory listing, access to networking and community engagement opportunities and educational workshops"
    },
    {
        level: "Bronze Membership Level",
        fee: "10.000 Mtn",
        benefits: "Business referrals, once a year opportunity for guest article in e-newsletter, online directory listing, access to networking and community engagement opportunities and educational workshops"
    },
    {
        level: "Silver Membership Level",
        fee: "15.000 Mtn",
        benefits: "Once a year luncheon sponsorship, business referrals, once a year opportunity for guest article in e-newsletter, online directory listing, access to networking and community engagement opportunities and educational workshops"
    },
    {
        level: "Gold Membership Level",
        fee: "20.000 Mtn",
        benefits: "Opportunity to speak at African Business Summit, once a year luncheon sponsorship, once a year opportunity for guest article in e-newsletter, online directory listing, access to networking and community engagement opportunities and educational workshops"
    }
]


displayLevels(memberships);

function displayLevels(levelsArray) {
    document.querySelector("#level-titles").innerHTML = "";

    let cards = document.createElement("div");
    levelsArray.forEach(level => {
        let levelBox = document.createElement("section");

        let levelTitle = document.createElement("p");
        let levelButton = document.createElement("button");

        levelTitle.innerHTML = `${level.level}`
        levelButton.textContent = "Learn More";

        levelBox.appendChild(levelTitle);
        levelBox.appendChild(levelButton);

        cards.appendChild(levelBox);

        levelButton.addEventListener('click', () => {
            displayLevelDetails(level);
        });
    });

    document.querySelector("#level-titles").appendChild(cards);

}

const levelDetails = document.querySelector('#dialogBox');

function displayLevelDetails(level) {
    levelDetails.innerHTML = "";
    levelDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2><strong>${level.level}</strong></h2>
    <p><strong>Annual Fee</strong>: ${level.fee}</p>
    <p><strong>Benefits</strong>: ${level.benefits}</p>
  `;
    levelDetails.showModal();

    closeModal.addEventListener("click", () => {
        levelDetails.close();
    });
}



// ------ Timestamp ------

const timestamp = document.querySelector("#timestamp");
const date = new Date();

timestamp.value = date.toDateString();
