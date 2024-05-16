/* Dark Mode Code */

const darkmodeButton = document.querySelector("#dark-mode");
const darkmodeStatus = document.querySelector("#dark-mode-status");
darkmodeStatus.classList.add("off");
darkmodeStatus.textContent = "(off)";

const content = document.querySelector(".content");
const lightElements = document.querySelectorAll(".adjustable");
const otherElements = document.querySelectorAll(".adjustable-b");

darkmodeButton.addEventListener("click", () => {
	if (darkmodeStatus.classList.contains('on') == true) {
        /* If dark mode is switched off... */
		darkmodeStatus.classList.remove("on");
		darkmodeStatus.classList.add("off");
		darkmodeStatus.textContent = "(off)";
	} else { 
        /* If dark mode is switched on... */
		darkmodeStatus.classList.remove("off");
		darkmodeStatus.classList.add("on");
		darkmodeStatus.textContent = "(on)";
	}
    content.classList.toggle("dark-background");
    lightElements.forEach((item) => item.classList.toggle("dark"));
    otherElements.forEach((item) => item.classList.toggle("dark-text"));
})
