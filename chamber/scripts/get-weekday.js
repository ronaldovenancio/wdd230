/* Message of the Week Code */
let weekday = new Date().getDay();
let message = "";

const banner = document.querySelector("#banner");

function displayBanner(banner) {
    // Set the display message based on the day of the week.

    switch (weekday) {
        case 0: // Sunday
            break;
        case 1: // Monday
            message = "Come join us for the Recife Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.";
            break;
        case 2: // Tuesday
            message = "Come join us for the Recife Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.";
            break;
        case 3: // Wednesday
            message = "Come join us for the Recife Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.";
            break;
        case 4: // Thursday
            break;
        case 5: // Friday
            break;
        case 6: // Saturday
            // message = "Come join us for the Recife Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.";
            break;
    }
    banner.textContent = message;
    
    // Hide banner if there is no message to display.
    if (message == "") {
        banner.style.display = "none";
    }
    else {
        banner.style.display = "block";
    }
}
displayBanner(banner);
