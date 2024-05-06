/* Last Visited Code */
/* Only use LocalStorage for public data. */

const visitCount = document.querySelector('#visit-count');

let totalVisits = Number(window.localStorage.getItem('visits-total'));
totalVisits++;
localStorage.setItem('visits-total', totalVisits);

visitCount.textContent = totalVisits;