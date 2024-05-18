/* Form Submit Code */

const inputRating = document.querySelector("#input-rating");
const inputFirst = document.querySelector("#input-fname");
const inputLast = document.querySelector("#input-lname");
const inputEmail = document.querySelector("#input-email");
const inputUser = document.querySelector("#input-user");
const inputConfirm = document.querySelector("#input-confirm");
const displayRating = document.querySelector("#display-rating");

const outputRating = document.querySelector("#output-rating");
const outputName = document.querySelector("#output-name");
const outputEmail = document.querySelector("#output-email");
const outputUser = document.querySelector("#output-username");

const form = document.querySelector("#contact-form");
const formSubmit = document.querySelector("#form-submit");
const formOutput = document.querySelector("#form-output");  // Displays the submitted form with a Table
const allHints = document.querySelectorAll(".p-hint"); // A list of all the form hint elements

displayRating.textContent = "5";

inputRating.addEventListener("change", () => {
    let currentRating = parseInt(inputRating.value);
    displayRating.textContent = currentRating;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
})
if (form.addEventListener) {
    form.addEventListener("submit", submitForm, false); 
}

function submitForm() {
    /* Unhide form results on a successful submision */
    formOutput.classList.toggle("hidden");
}

formSubmit.addEventListener("click", () => {
    let rating = parseInt(inputRating.value);
    let name = inputFirst.value + " " + inputLast.value;
    let email = inputEmail.value;
    let username = inputUser.value;
    let userConfirm = inputConfirm.value;

    /* Check Rating */
    if (rating < 5) {
        outputRating.style.color = "var(--bad)";
    } else if (rating == 5) {
        outputRating.style.color = "var(--accent1)";
    } else {
        outputRating.style.color = "var(--good)";
    }
    outputRating.textContent = rating;

    /* Check for Username */
    if (username.toLowerCase() != userConfirm.toLowerCase()) {
        enableHints();
        inputUser.focus();
    } else {
        disableHints();
    }

    /* Display Outputs */
    outputName.textContent = name;
    outputEmail.textContent = email;
    outputUser.textContent = username.charAt(0).toUpperCase() + username.slice(1);
});

function enableHints() {
    allHints.forEach((item) => {
        item.classList.remove("hidden");
        item.classList.add("alert");
    });
}

function disableHints() {
    allHints.forEach((item) => {
        item.classList.add("hidden");
        item.classList.remove("alert");
    });
}