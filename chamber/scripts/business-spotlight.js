// Store the resource of the JSON URL file into a variable.
const requestURL = '../chamber/data/members.json';

/* JSON file object information:
 * 'businesses' - contains a list of objects.
 * 'name' - holds the name of the company.
 * 'name_add' - holds an additional title for the company. 
 * 'address' - holds the address of the company.
 * 'address_end' - contains the city, state, and zipcode of the address.
 * 'phone' - holds the company's phone number.
 * 'url' - holds the company's web address.
 * 'logo' - contains a 300x200px image of the company's logo.
 * 'mem_lvl' - holds the current membership level of the company. 
 */

const spotlight1 = document.querySelector('#spotlight-1');
const spotlight2 = document.querySelector('#spotlight-2');
const spotlight3 = document.querySelector('#spotlight-3');

/* Create empty lists for businesses to be sorted through, and create empty variables to hold spotlight business data. */
let npList = [];
let bronzeList = [];
let silverGoldList = [];
let spotlightList = [];
var choice1 = {name: '', name_add: '', address: '', address_end: '', phone:'', url:'', logo:'../chamber/images/placeholder/placeholder-300x200.webp', mem_lvl: 'NP'};
var choice2 = {name: '', name_add: '', address: '', address_end: '', phone:'', url:'', logo:'../chamber/images/placeholder/placeholder-300x200.webp', mem_lvl: 'NP'};
var choice3 = {name: '', name_add: '', address: '', address_end: '', phone:'', url:'', logo:'../chamber/images/placeholder/placeholder-300x200.webp', mem_lvl: 'NP'};

fetch(requestURL)
  .then(function (response) { // returns a Promise which will be used as an argument.
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const varObj = jsonObject['businesses']; // Store the results into an array since that data source is an array.
    varObj.forEach(sortMembers); // Call the forEach() method which will loop through each record to be processed.
    selectThreeSpotlights(silverGoldList); 
    displaySpotlights(choice1, choice2, choice3);
  });

  function sortMembers(business) {
    // Sort each business into the corresponding list of memberships.
    let membership = business.mem_lvl;
    switch (membership) {
        case ('NP'):
            break;
        case ('Bronze'):
            bronzeList.push(business);
            break;
        case ('Silver'):
            silverGoldList.push(business);
            break;
        case ('Gold'):
            silverGoldList.push(business);
            break;
    }
  }

  function selectThreeSpotlights(list) {
    // Select 3 random businesses to feature from the Gold Members list.
    let currIndex;
    let prevIndex;
    let initIndex;

    for (i = 0; i < 3; i++) {
      // Get 1st business.
      currIndex = randIndex(list.length);
      spotlightList.push(list[currIndex]);
      initIndex = currIndex;
      // Get 2nd business.
      currIndex = randIndex(list.length);
      if (currIndex != initIndex) {
        spotlightList.push(list[currIndex]);
        prevIndex = currIndex;
      } else {
        currIndex = randIndex(list.length);
        spotlightList.push(list[currIndex]);
        prevIndex = currIndex;
      }
      // Get 3rd business.
      currIndex = randIndex(list.length);
      if (currIndex != initIndex && currIndex != prevIndex) {
        spotlightList.push(list[currIndex]);
      } else {
        currIndex = randIndex(list.length);
        spotlightList.push(list[currIndex]);
      }
    }
    // Set the first 3 business in the spotlight List to display in the Spotlight section.
    if (spotlightList.length > 0) {
        choice1 = spotlightList[0];
        choice2 = spotlightList[1];
        choice3 = spotlightList[2];
    }
  }

  function randIndex(listLength) {
    return Math.floor(Math.random() * listLength);
  }

  function displaySpotlights(choice1, choice2, choice3) {
    // Create elements for first spotlight.
    let image1 = document.createElement('img');
    let title1 = document.createElement('h4');
    let par1 = document.createElement('p');
    let link1 = document.createElement('a');
    // Create elements for second spotlight.
    let image2 = document.createElement('img');
    let title2 = document.createElement('h4');
    let par2 = document.createElement('p');
    let link2 = document.createElement('a');
    // Create elements for third spotlight.
    let image3 = document.createElement('img');
    let title3 = document.createElement('h4');
    let par3 = document.createElement('p');
    let link3 = document.createElement('a');

    // Change the textContent property of the h2 element to contain the prophet's full name
    title1.textContent = choice1.name;
    par1.textContent = choice1.address + ', ' + choice1.address_end;
    link1.textContent = choice1.url;

    title2.textContent = choice2.name;
    par2.textContent = choice2.address + ', ' + choice2.address_end;
    link2.textContent = choice2.url;

    title3.textContent = choice3.name;
    par3.textContent = choice3.address + ', ' + choice3.address_end;
    link3.textContent = choice3.url;

    // Build the href attribute for url links.
    link1.setAttribute('href', choice1.url);
    link2.setAttribute('href', choice2.url);
    link3.setAttribute('href', choice3.url);

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    image1.setAttribute('src', choice1.logo);
    image1.setAttribute('alt', 'Logo of ' + choice1.name);
    image1.setAttribute('width', '300'); image1.setAttribute('height', '200');

    image2.setAttribute('src', choice2.logo);
    image2.setAttribute('alt', 'Logo of ' + choice2.name);
    image2.setAttribute('width', '300'); image1.setAttribute('height', '200');

    image3.setAttribute('src', choice3.logo);
    image3.setAttribute('alt', 'Logo of ' + choice3.name);
    image3.setAttribute('width', '300'); image1.setAttribute('height', '200');

    // Add/append the section with the created child elements.
    spotlight1.appendChild(title1);
    spotlight1.appendChild(image1);
    spotlight1.appendChild(link1);
    spotlight1.appendChild(par1);

    spotlight2.appendChild(title2);
    spotlight2.appendChild(image2);
    spotlight2.appendChild(link2);
    spotlight2.appendChild(par2);

    spotlight3.appendChild(title3);
    spotlight3.appendChild(image3);
    spotlight3.appendChild(link3);
    spotlight3.appendChild(par3);
  }