function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // AM / PM
    const period = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    // Add leading zero
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    // Display time
    document.getElementById("hours").textContent = formattedHours;
    document.getElementById("minutes").textContent = formattedMinutes;
    document.getElementById("seconds").textContent = formattedSeconds;

    document.getElementById("period").textContent = period;

    // Display date
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-IN", dateOptions);
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);