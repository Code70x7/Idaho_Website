
function toggleMenu() {
    const links = document.getElementById("nav-links");
    links.classList.toggle("active");
}

function validateEmails() {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
        alert("Email addresses do not match. Please check and try again.");
        return false; // prevent form submission
    }

    alert("Form submitted successfully!");
    return false; // prevent real submission for demo purposes
}