/* **************************************************** */
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
    const desc = weatherData.weather[0].description;
    const desc_cap = desc.charAt(0).toUpperCase() + desc.slice(1); // capitalize the first letter in the string
    captionDesc.textContent = desc_cap;

    let icon_src = customIcon(icon_data)
    weatherIcon.setAttribute('src', icon_src);
    weatherIcon.setAttribute('alt', desc_cap);
  }

  function customIcon(icon) {
    // icon information can be found at https://openweathermap.org/weather-conditions
    /* 01n = "clear sky"
     * 02n = "few clouds"
     * 03n = "scattered clouds"
     * 04n = "broken clouds"
     * 09n = "shower rain"
     * 10n = "rain"
     * 11n = "thunderstorm"
     * 13n = "snow"
     * 50n = "mist"
     */

    switch(icon) {
        /* Day Icons */
        case "01d": // clear
            return "chamber/images/weather/sunny-64px.webp";
        case "02d": // few clouds
            return "chamber/images/weather/part-cloudy-64px.webp";
        case "03d": // scattered clouds
            return "chamber/images/weather/cloudy-64px.webp";
        case "04d": // broken clouds
            return "chamber/images/weather/cloudy-64px.webp";
        case "09d": // shower rain
            return "chamber/images/weather/rainy-64px.webp";
        case "10d": // rain
            return "../chamber/images/weather/rainy-64px.webp";
        case "11d": // thunderstorm
            return "../chamber/images/weather/stormy-64px.webp";
        case "13d": // snow
            return "../chamber/images/weather/snowy-64px.webp";
        case "50d": // mist
            return "../chamber/images/weather/hazy-64px.webp";

        /* Night Icons */
        case "01n": // clear
            return "../chamber/images/weather/night-64px.webp";
        case "02n": // few clouds
            return "../chamber/images/weather/night-part-cloudy-64px.webp";
        case "03n": // scattered clouds
            return "../chamber/images/weather/cloudy-64px.webp";
        case "04n": // broken clouds
            return "../chamber/images/weather/cloudy-64px.webp";
        case "09n": // shower rain
            return "../chamber/images/weather/rainy-64px.webp";
        case "10n": // rain
            return "../chamber/images/weather/rainy-64px.webp";
        case "11n": // thunderstorm
            return "../chamber/images/weather/stormy-64px.webp";
        case "13n": // snow
            return "../chamber/images/weather/snowy-64px.webp";
        case "50n": // mist
            return "../chamber/images/weather/night-hazy-64px.webp";
    }
}