// Selecting form elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const feedbackMessage = document.getElementById("feedbackMessage");

// Add event listener to form submit
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get input values
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate input
    if (username === "" || password === "") {
        displayFeedback("Please fill in all fields.", "error");
    } else if (username === "user" && password === "pass123") {
        displayFeedback("Login successful! Redirecting...", "success");
        setTimeout(() => {
            window.location.href = "welcome.html"; // Redirect after success
        }, 1500);
    } else {
        displayFeedback("Invalid username or password. Try again.", "error");
    }
});

// Function to display feedback message
function displayFeedback(message, type) {
    feedbackMessage.textContent = message;
    feedbackMessage.className = `feedback-box ${type}`;
    feedbackMessage.style.display = "block";

    // Hide feedback message after 3 seconds
    setTimeout(() => {
        feedbackMessage.style.display = "none";
    }, 3000);
}
