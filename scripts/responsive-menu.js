/* Responsive Menu Code */

const menuButton = document.querySelector("#menu-button");
const menuIcon = document.querySelector("#menu-icon");
const menuItems = document.querySelectorAll(".menu-item"); // menuitems will be a Node List of the list items

menuButton.addEventListener("click", () => {
	menuItems.forEach((item) => item.classList.toggle("open"));
	menuButton.classList.toggle("closed");
	menuButton.classList.toggle("active");
	menuIcon.classList.toggle("fa-bars");
	menuIcon.classList.toggle("fa-x");
});