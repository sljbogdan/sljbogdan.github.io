function showHome() {
    document.getElementById('home').style.display='block';
    document.getElementById('skills').style.display='none';
    document.getElementById('projects').style.display='none';
    document.getElementById('languages').style.display='none';
}

function showSkills() {
    document.getElementById('home').style.display='none';
    document.getElementById('skills').style.display='block';
    document.getElementById('projects').style.display='none';
    document.getElementById('languages').style.display='none';
}

function showProjects() {
    document.getElementById('home').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('projects').style.display='block';
    document.getElementById('languages').style.display='none';
}

function showLanguages() {
    document.getElementById('home').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('projects').style.display='none';
    document.getElementById('languages').style.display='block';
}

