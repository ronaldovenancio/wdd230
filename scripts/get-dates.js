/* Current Date & Last Modified Code */

const outputDate = document.querySelector("#current-year");
const outputModified = document.querySelector("#last-modified");
  
const date = new Date().getFullYear();
let lastModified = document.lastModified;

outputDate.textContent = date;
outputModified.textContent = lastModified;