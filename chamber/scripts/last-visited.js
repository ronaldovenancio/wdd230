/* Last Visited Code */

const currentTime = new Date();
//last = new Date("2024-05-10T22:33:34"); 
const last_visited = new Date();


/* Only use LocalStorage for public data. */
const visitCount = document.querySelector('#visit-count');
const visitSince = document.querySelector('#visit-since'); 
const visitCounter = document.querySelector("#visit-counter");

let totalVisits = Number(window.localStorage.getItem('visits-total'));
totalVisits++;
localStorage.setItem('visits-total', totalVisits);
 lastVisited(); 


let visitsNumber = parseInt(window.localStorage.getItem("visit-since")) || 0;
//console.log('visitsNumber');
//console.log(visitsNumber);


if (visitsNumber == 0) 
{
    localStorage.setItem('visit-since', new Date().getTime());

    visitSince.textContent = "Welcome! Let us know if you have any questions."
    /* showPopup(); */
    
} else {

    const msToDays = 84600000;
     // visitsNumber = new Date("2024-02-24T22:33:34");  

    let dayDifference = (Date.now() - visitsNumber) / msToDays
    //console.log(dayDifference);

        if (dayDifference < 1) 
        {
            visitSince.textContent = "Back so soon! Awesome!";
        } else {

            const dayText = dayDifference === 1 ? "day" : "days";

            visitSince.textContent = `You last visited ${Math.trunc(dayDifference)} ${dayText} ago.`;

        }

    
    localStorage.setItem('lastVisit', new Date().getTime());
        
}

//console.log(visitCounter);
//console.log('lastVisit');



// store current time in local storage.
localStorage.setItem('visits-current', currentTime);
function lastVisited() {
    if (totalVisits == 0) { // if first visit, store current time in local storage.
        localStorage.setItem('visits-last', currentTime);
    }
    // get last and current visit from local storage.
    last = localStorage.getItem('visits-last'); 
    //console.log(last);
    //console.log(totalVisits);
     last = localStorage.getItem('lastVisit'); 
   /* last = new Date("2024-02-24T22:33:34");  */
    current = localStorage.getItem('visits-current');
    // convert string values to intergers (milliseconds).
    last_int = Date.parse(last);
    current_int = Date.parse(current);
    // compare difference.
    difference = current_int - last_int;
    //console.log(difference);
    // convert miliseconds to seconds;
    diffS = difference / 1000;
    // convert seconds to minutes;
    diffM = diffS / 60;
    // convert minutes to hours;
    diffH = diffM / 60;
    // convert hours to days;
    diffD = diffH / 24;
    // round value for display;
    MinutesSinceLastVisit = Math.round(diffM * 10) / 10;
    DaysSinceLastVisit = Math.round(diffD);
}

// display total visits and days since last visit.
visitCount.textContent = totalVisits;
// visitSince.textContent = DaysSinceLastVisit;

localStorage.setItem('visits-last', currentTime);


