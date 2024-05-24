import 'fs';
const baseURL = "https://ronaldovenancio.github.io/wdd230/";
const linksURL = "https://ronaldovenancio.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
   // console.log(data);
   displayLinks("data.json");
  }
  
  getLinks();
  displayLinks();


  const fs = require('fs');

function displayLinks(weeksFile) {
    // Read JSON file
    fs.readFile(weeksFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const weeksData = JSON.parse(data);

        // Iterate over each week
        weeksData.forEach(week => {
            console.log(`Week: ${week.week_number}`);
            console.log("Links:");
            // Iterate over each link in the week
            week.links.forEach(link => {
                console.log(`  Title: ${link.title}`);
                console.log(`  URL: ${link.url}`);
            });
            console.log(); // Add a new line between weeks
        });
    });
}

// Example usage:
displayLinks('data.json');

  /*
const requestURL = 'data/data.json'; // retrieve the local JSON file
const output = document.querySelector("#json-ouput")

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject) // check for valid response
        const list_1 = jsonObject['week01']; // store results in an array
        const list_2 = jsonObject['week02']; 
        const list_3 = jsonObject['week03']; 
        const list_4 = jsonObject['week04']; 
        list_1.forEach(createObj); // loop through each item in the array, call a function to create <a> elements
        list_2.forEach(createObj);
        list_3.forEach(createObj);
        list_4.forEach(createObj);
    });

function createObj(item) {
    let li = document.createElement('li');
    let link = document.createElement('a');
    
}

    //outputDiv.textContent = url.;


    'https://designer.mocky.io/'
    */