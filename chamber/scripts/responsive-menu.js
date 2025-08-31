/* Responsive Menu Code */

const menuButton = document.querySelector("#nav-button");
const menuIcon = document.querySelector("#nav-icon");
const menuItems = document.querySelectorAll(".nav-li");

menuButton.addEventListener("click", () => {
	menuItems.forEach((item) => item.classList.toggle("open"));
	menuButton.classList.toggle("active");
	menuIcon.classList.toggle("fa-bars");
	menuIcon.classList.toggle("fa-x");
});