function hidePage(id) {
    console.info('hide page', id);
    document.getElementById(id).style.display='none';
}

function highlight(page){
        page.style.borderColor = '#0000ff';
    setTimeout(function(){
        page.style.borderColor = '#e099dd';
    }, 200);
    setTimeout(function(){
        page.style.borderColor = '#e0dfdc';
    }, 300);
}

function showPage(show) {
    console.info('show page', show);
    var page = document.getElementById(show);
    console.info('show', page);
    if(page){
        page.style.display='block';
        highlight(page);
    } else{
        console.warm('pagina cu id-ul %s nu exista', show);
    }
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