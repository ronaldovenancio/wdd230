// ************ Create date and last modified date for the footer ************
// Display the copyright year
/*
function getCopyrightYear() {
    const year = new Date().getFullYear();
    return `&copy; ${year}`;
}
document.getElementById("cYear").innerHTML = getCopyrightYear();

// Display the last modified date of the page
function getLastModified() {
    const lastModified = new Date(document.lastModified).toGMTString();
    return `Last Modified: ${lastModified}`;
}
document.getElementById("lastModified").innerHTML = getLastModified();

// ********* Hamburger Menu *********

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

*/


// ********* Check Password Validation *********
const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pass2.addEventListener("focusout", validatePassword);

// Validate the password
function validatePassword() {
    if (pass1.value != pass2.value) {
        message.textContent = "Passwords do not match!";
        message.classList.add("error");
        pass2.style.backgroundColor = "#fff0f3";
        pass2.value = "";
        pass2.focus();
    } else {
        message.style.display = "none";
        pass2.style.backgroundColor = "#dff0d8";
        pass2.style.color = "#000";
    }
}

function validateForm(event) {
    const nameInput = document.getElementById("name");
    const passwordInput = document.getElementById("password");
    const password2Input = document.getElementById("password2");
    const emailInput = document.getElementById("email");

    let isValid = true;

    if (nameInput.value.trim() === "") {
        showError();
        isValid = false;
    }
    if (passwordInput.value.trim() === "") {
        showError();
        isValid = false;
    }
    if (password2Input.value.trim() === "") {
        showError();
        isValid = false;
    }
    if (emailInput.value.trim() === "") {
        showError();
        isValid = false;
    }

    if (isValid) {
        // Form is valid, submit it
        // showSuccess();
    } else {
        event.preventDefault(); // Prevent form submission
    }
}

function showSuccess() {
    const success = document.getElementById("submitmessage");
    success.textContent = "Success! Your request has been sent!";
    success.classList.remove("hide");
    success.classList.add("success", "show");
    // Reset the display property after 3 seconds
    setTimeout(function () {
        success.classList.remove("success", "show");
        success.classList.add("hide");
    }, 3000); // Hide the message after 3 seconds
}

function showError() {
    const error = document.getElementById("submitmessage");
    error.textContent = "Error! Please correctly fill out the request!";
    error.classList.remove("hide");
    error.classList.add("error", "show");
    // Reset the display property after 3 seconds
    setTimeout(function () {
        error.classList.remove("error", "show");
        error.classList.add("hide");
    }, 3000); // Hide the message after 3 seconds
}

// ********* Range Slider *********
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}