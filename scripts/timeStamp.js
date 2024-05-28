function timeStamp() {
    // Get the current date and time
    var now = new Date();
    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "America/Recife",
        timeZoneName: "short",
    };
    // Format the date and time
    var timestamp = now.toLocaleString("en-US", options);
    // Display the timestamp
    document.getElementById("timestamp").innerText = `Timestamp: ${timestamp}`;
}
timeStamp();