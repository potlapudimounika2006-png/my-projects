// View My Projects button
const projectBtn = document.getElementById("projectBtn");

projectBtn.addEventListener("click", function () {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});


// Contact button
const contactBtn = document.getElementById("contactBtn");
const message = document.getElementById("message");

contactBtn.addEventListener("click", function () {
    message.textContent =
        "Thank you for visiting my portfolio! You can contact me using the details above.";
});
