/* Last Visited Code */

const currentTime = new Date();

/* Only use LocalStorage for public data. */
const visitCount = document.querySelector('#visit-count');
const visitSince = document.querySelector('#visit-since');

let totalVisits = Number(window.localStorage.getItem('visits-total'));
totalVisits++;
localStorage.setItem('visits-total', totalVisits);
lastVisited();

// store current time in local storage.
localStorage.setItem('visits-current', currentTime);

function lastVisited() {
    if (totalVisits == 0) { // if first visit, store current time in local storage.
        localStorage.setItem('visits-last', currentTime);
    }
    // get last and current visit from local storage.
    last = localStorage.getItem('visits-last');
    current = localStorage.getItem('visits-current');
    // convert string values to intergers (milliseconds).
    last_int = Date.parse(last);
    current_int = Date.parse(current);
    // compare difference.
    difference = current_int - last_int;
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
visitSince.textContent = DaysSinceLastVisit;

localStorage.setItem('visits-last', currentTime);