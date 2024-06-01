
// ********* Banner *********
function initBanner() {
    var banner = document.getElementById("banner");
    var closeBannerBtn = document.getElementById("closeBanner");

    // Check if today is Monday, Tuesday, or Wednesday
    var today = new Date();
    var dayOfWeek = today.getDay();
    // var dayOfWeek = 1; // for testing purposes
    var isBannerVisible = dayOfWeek >= 5 && dayOfWeek <= 6;

    // Set initial visibility
    banner.classList.toggle("banner", isBannerVisible);
    banner.classList.toggle("banner-hide", !isBannerVisible);

    // Close the banner when the close button is clicked
    closeBannerBtn.addEventListener("click", function () {
        banner.classList.add("banner-hide");
    });
}


function displaySpotlightMembers(members) {
    // console.log(members);

    let topMembers = members.filter((member) => member.membership === "Silver" || member.membership === "Gold");

    let randomMembers = topMembers.sort(() => 0.5 - Math.random()).slice(0, 4);

    const spotlights = document.querySelector(".cards");

    randomMembers.forEach((member) => {
        const spotlight = document.createElement("article");
        spotlight.classList.add("card");
    
       let status = member.membership === "Silver" ? "silver" : "gold";

        spotlight.innerHTML = `
        <h3 class="card-header ${status}">${member.membership} Member</h3>
        <div class="card-body">
        <img src="${member.logo}" alt="${member.company.toLowerCase()}-logo" loading="lazy" width=75 height=auto>
        <div class="contact-info">
            <address>
                ${member.address}
                <br />
                ${member.city}, ${member.state} ${member.zip}
            </address>
            <div>
                <a href=${member.website} target="_blank">${member.website}</a>
            </div>
        </div>
        </div>
    `;

        spotlights.appendChild(spotlight);
    });
}