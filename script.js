// Get references to the buttons
const homeButton = document.getElementById('home-button');
const projectsButton = document.getElementById('projects-button');
const linkedinButton = document.getElementById('linkedin-button');
const contactButton = document.getElementById('contact-button');
const nameButton = document.getElementById('name-button');

// Add event listeners to the buttons
homeButton.addEventListener('click', handleHomeClick);
projectsButton.addEventListener('click', handleProjectsClick);
linkedinButton.addEventListener('click', handleLinkedinClick);
contactButton.addEventListener('click', handleContactClick);
nameButton.addEventListener('click', handleNameClick)

// Redirect to the home page
function handleHomeClick() {
    window.location.href = "index.html";
}

function handleProjectsClick() {
    window.location.href = "projects.html";
}

function handleLinkedinClick() {
    window.open("https://www.linkedin.com/in/vinay-sudarsanam-182696169/", '_blank');
}

function handleContactClick() {
  var mailtoLink = 'mailto:vinay.sudarsanam.2004@gmail.com';
  window.open(mailtoLink);
}

// Redirect to the home page
function handleNameClick() {
    window.location.href = "index.html";
}

