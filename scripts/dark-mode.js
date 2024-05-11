/* Dark Mode Code */
const myBtn = document.querySelector('#dark-mode');
const main = document.querySelector("main");


myBtn.addEventListener('click', () => {
	if (myBtn.textContent.includes("images/dark.svg")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		myBtn.textContent = "images/dark.sv";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		myBtn.textContent = "images/dark.sv";
	}
});


