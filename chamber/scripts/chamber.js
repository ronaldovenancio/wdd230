// ********* Page Visits Counter *********
function updatePageVisitsCounter() {
    const msToDays = 84600000;
    let lastVisit = window.localStorage.getItem("numDiscoverPage");
    const visitsDisplay = document.querySelector(".latest-visit");

    // Calculate the time difference between visits
    var currentTime = new Date();
    var previousVisit = new Date(lastVisit);
    var timeDifference = currentTime.getTime() - previousVisit.getTime();
    var daysDifference = timeDifference / msToDays;

    // Display message based on time difference
    if (lastVisit != null) {
        if (daysDifference > 0 && daysDifference < 1) {
            visitsDisplay.textContent = `Back so soon! Awesome!`;
        } else if (Math.floor(daysDifference) === 1) {
            visitsDisplay.textContent = `You last visited 1 day ago.`;
        } else {
            visitsDisplay.textContent = `You last visited ${Math.floor(daysDifference)} days ago.`;
        }
    } else {
        visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
    }
    // store the new visit count total into localStorage
    localStorage.setItem("numDiscoverPage", new Date());

     console.log("Current Time: " + currentTime);
     console.log("Previous Visit: " + previousVisit);
     console.log("Time Difference: " + timeDifference);
     console.log("Days Difference: " + daysDifference);
}

function testUpdatePageVisitsCounter() {
    // Set a fake previous visit date for testing purposes
    const fakePreviousVisitDate = new Date("2024-02-22T22:33:34");
    window.localStorage.setItem("numDiscoverPage", fakePreviousVisitDate);

    // Call the updatePageVisitsCounter function
    updatePageVisitsCounter();

    // Check if the message displayed matches the expected message
    const message1 = "Welcome! Let us know if you have any questions.";
    const message2 = "Back so soon! Awesome!";
    const message3 = "You last visited 1 day ago.";
    const message4 = "You last visited 2 days ago.";

    const expectedMessage = message4;
    const displayedMessage = document.querySelector(".latest-visit").textContent;
    if (displayedMessage === expectedMessage) {
        console.log("Test passed: Page visits counter updated correctly.");
    } else {
        console.error("Test failed: Page visits counter not updated correctly.");
        console.error("Expected message:", expectedMessage);
        console.error("Displayed message:", displayedMessage);
    }

    // Clean up: remove the fake previous visit date from localStorage
    window.localStorage.removeItem("numDiscoverPage");
}
// Call the test function to test the updatePageVisitsCounter function
// testUpdatePageVisitsCounter();
