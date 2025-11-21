welcomeMessage();

/// Function to prompt user for their name and display a welcome message
function welcomeMessage() {
    /// Prompt the user for their name
    let userName = prompt("Please enter your name:");
    
    /// If the user did not enter a name, default to "Guest"
    if (userName === '' || userName === null) {
        userName = "Guest";
    }

    /// Update the welcome message on the webpage
    document.getElementById("welcome-speech").innerText = "Welcome, " + userName + "!";
}

/// Function to validate the message form (to be implemented)
function validateMessageForm() {
    // Validation logic will go here
}

document.getElementById("message-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const now = new Date().toString();

    document.getElementById("output").innerHTML = `
        <p><strong>Current Time:</strong> ${now}</p><br>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${birthdate}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
});