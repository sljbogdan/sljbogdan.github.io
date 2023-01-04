function hidePage(id) {
    document.getElementById(id).style.display='none';
}

function showPage(show) {
    document.getElementById(show).style.display='block';
}

function showHome() {
    hidePage('skills');
    hidePage('projects');
    hidePage('languages');
    showPage('home');
}

function showSkills() {
    hidePage('home');
    hidePage('projects');
    hidePage('languages');
    showPage('skills');
}

function showProjects() {
    hidePage('home');
    hidePage('skills');
    hidePage('languages');
    showPage('projects');
}

function showLanguages() {
    hidePage('home');
    hidePage('skills');
    hidePage('projects');
    showPage('languages');
}