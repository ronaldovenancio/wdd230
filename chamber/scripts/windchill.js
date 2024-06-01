// Testing:
// let temperature = 34; // Temperature in Fahrenheit
// let windSpeed = 20; // Wind speed in mph


function calculateWindChill(temperature, windSpeed) {
    // const temperature = document.getElementById("current-temp").innerHTML;
    // const windSpeed = document.getElementById("wind-speed").innerHTML;
    // console.log( temperature, windSpeed);

    let windChill;
    // Check if the temperature and wind speed  are valid
    if (temperature > 50 || windSpeed < 3) {
        // return "Invalid input. Temperature should be less than or equal to 50 °F and wind speed should be greater than 3 mph.";
        windChill = "N/A";
        document.getElementById("wind-chill").innerHTML = windChill;
        return;
    }
    // Calculate wind chill factor
    var windChillFactor = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    windChill = windChillFactor.toFixed(1) + `&deg;F`;
    document.getElementById("wind-chill").innerHTML = windChill;

    // console.log("Wind Chill Factor: " + windChill);
}


/*

const temp = (document.querySelector("#temperature").textContent);
const windSpeed = (document.querySelector("#speed").textContent);



if (temp <= 50 || windSpeed > 3) 
{
    let t = 35.74 + (0.6215 * temp) - (35.75 * (windSpeed)**0.16) + (0.4275 * temp * (windSpeed**0.16));

    document.querySelector("#wind-chill").innerHTML = t.toFixed(2);
} else {

    document.querySelector("#wind-chill").innerHTML= "N/A";
}

*/