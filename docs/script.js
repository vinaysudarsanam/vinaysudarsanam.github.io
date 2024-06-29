// Get references to the buttons
const homeButton = document.getElementById('home-button');
const projectsButton = document.getElementById('projects-button');
const contactButton = document.getElementById('contact-button');
const nameButton = document.getElementById('name-button');

// Add event listeners to the buttons
homeButton.addEventListener('click', handleHomeClick);
projectsButton.addEventListener('click', handleProjectsClick);
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
    var mailtoLink = 'mailto:vinaysud@unc.edu';
   window.open(mailtoLink);

}

// Redirect to the home page
function handleNameClick() {
    window.location.href = "index.html";
}

//Disappearing text box when clicked
function hideDisTextBox(element) {
    element.style.display = 'none';
}

function toggleText(projectId) {
    var project = document.getElementById(projectId);
    var text = project.querySelector('.text');
    var button = project.querySelector('.expand-button');
    if (text.style.display === 'none') {
        text.style.display = 'block';
        button.style.display = 'block';
    } else {
        text.style.display = 'none';
        button.style.display = 'none';
    }
}
