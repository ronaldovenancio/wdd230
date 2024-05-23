
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

/* I cant figure out why the code below is giving an Error404 message */
/*
async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
  }
getProphetData();

  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        console.log("something should be happening");
    });
  }
*/

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets); 
  });

function displayProphets(prophet) {
    /* Create elements */
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let h2 = document.createElement('h2');
    /* Create sub-elements */
    let div = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
  
    /* Combine first & last name, add text to birthdate & birthplace information */
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    p1.textContent =`Date of birth: ` + prophet.birthdate;
    p2.textContent =`Place of birth: ` + prophet.birthplace;

    /* Build image using 'src', 'alt', 'loading', 'width', and 'height' */
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    /* classes added for styling */
    card.classList.add("card");
    portrait.classList.add("portrait");
    h2.classList.add("card-title");
    div.classList.add("card-info");
    p1.classList.add("card-date");
    p2.classList.add("card-place");

    // Add/append the section(card) with the h2 element and portrait.
    card.appendChild(h2);
    card.appendChild(portrait);

    // Extra: Add/append a div as a child element to the card.
    card.appendChild(div);
    div.appendChild(p1);
    div.appendChild(p2);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#cards').appendChild(card);
  }