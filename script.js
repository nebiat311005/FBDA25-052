// Simple JavaScript for Eritrea Website

// Show current year in footer
document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Feedback Form Validation
const form = document.getElementById("feedback-form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();   // Stop form from refreshing page

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const status = document.getElementById("form-status");

        if (name === "" || email === "" || message === "") {
            status.innerHTML = "<span style='color:red'>Please fill all required fields.</span>";
        } 
        else {
            status.innerHTML = "<span style='color:green'>Thank you for your feedback!</span>";
            form.reset();   // Clear the form after submission
        }
    });
}
