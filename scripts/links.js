const baseURL = "https://ronaldovenancio.github.io/wdd230/";
const linksURL = "https://ronaldovenancio.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // console.log(data);
        displayLinks(data.lessons);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
getLinks();

const displayLinks = (weeks) => {
    // console.log(weeks);

    weeks.forEach((week) => {
        // console.log(week);
        const listItem = document.createElement("li");
        const lessonWeek = document.createTextNode(`Lesson ${week.lesson}: `);

        listItem.appendChild(lessonWeek);

        week.links.forEach((link) => {
            // console.log(link);
            const tag = document.createElement("a");
            tag.setAttribute("href", link.url);
            tag.textContent = link.title;

            listItem.appendChild(tag);

            if (week.links.length > 1 && week.links.indexOf(link) < week.links.length - 1) {
                listItem.innerHTML += " | ";
            }
        });
        // console.log(listItem);

        const list = document.querySelector(".la-card");
        list.appendChild(listItem);
    });
};
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