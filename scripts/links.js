const baseURL = "https://ronaldovenancio.github.io/wdd230/";
const linksURL = "https://ronaldovenancio.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
   // console.log(data);
   displayLinks(data);
  }
  
  getLinks();
  displayLinks();


  function displayLinks(getLinks) {
  let lastFrameTime = 0;

  function animate(timestamp) {
    // Calculate the time elapsed since the last frame
    const deltaTime = timestamp - lastFrameTime;
    
    // Call the callback function with deltaTime
    getLinks(deltaTime);

    // Update last frame time
    lastFrameTime = timestamp;

    // Request the next frame
    requestAnimationFrame(animate);
  }

  // Start the animation
  requestAnimationFrame(animate);
}

// Example usage
displayLinks(function(deltaTime) {
  // Update your animation or game logic here using deltaTime
  //console.log("Delta time:", deltaTime);
});


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