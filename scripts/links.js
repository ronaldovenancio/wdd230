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
        const lessonWeek = document.createTextNode(`${week.lesson}: `);

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