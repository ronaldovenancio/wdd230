//lastModified
document.querySelector('#lastModified').textContent = "Last Modification: "+document.lastModified;


//The current date
const rightNow = new Date();
//console.log(rightNow);
//console.log(rightNow.getFullYear());
//document.querySelector('#year').textContent = rightNow.getFullYear();



// Check if the counter exists in local storage
if (localStorage.getItem("page_view")) {
  // Increment the existing counter
  let count = parseInt(localStorage.getItem("page_view"));
  count++;
  localStorage.setItem("page_view", count);
  document.getElementById("counter").textContent = count;
} else {
  // Initialize the counter
  localStorage.setItem("page_view", 1);
  document.getElementById("counter").textContent = 1;
}


// The current year is showed in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// The lastModified paragraph with JavaScript code
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;


//********** */
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// Coord for Recife-PE, Brazil: [-8.050000, --34.90002]
// My Key: 50658f3950af3ac334e2b387a6c80e76

/* Store URL in a variable */
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-8.050000&lon=-34.900002&appid=50658f3950af3ac334e2b387a6c80e76&units=imperial';

/* Select HTML elements */
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

/* Use asynchronous fetch() to request the weather API & check if it is valid */
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch();

  /* Display results of fetched data */
  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const icon_data = weatherData.weather[0].icon;
    //const icon_src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`; // weather icons are stored in an array[]
    const desc = weatherData.weather[0].description;
    const desc_cap = desc.charAt(0).toUpperCase() + desc.slice(1); // capitalize the first letter in the string
    captionDesc.textContent = desc_cap;

    let icon_src = customIcon(icon_data)
    weatherIcon.setAttribute('src', icon_src);
    weatherIcon.setAttribute('alt', desc_cap);
  }

  /* *************************

  // Wait for the DOM to fully load
  document.addEventListener("DOMContentLoaded", function() {
    // Check if the counter exists in local storage
    if (localStorage.getItem("page_view")) {
        // Increment the existing counter
        let count = parseInt(localStorage.getItem("page_view"));
        count++;
        localStorage.setItem("page_view", count);
        // Update the counter element
        let counterElement = document.getElementById("counter");
        if (counterElement) {
            counterElement.textContent = count;
        }
    } else {
        // Initialize the counter
        localStorage.setItem("page_view", 1);
        // Update the counter element
        let counterElement = document.getElementById("counter");
        if (counterElement) {
            counterElement.textContent = 1;
        }
    } 
}); */



