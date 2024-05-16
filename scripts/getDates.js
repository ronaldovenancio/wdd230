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

/* **************************************************** */

// The current year is showed in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

/* **************************************************** */

// The lastModified paragraph with JavaScript code
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;

