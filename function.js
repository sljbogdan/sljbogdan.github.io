function hide(id) {
    document.getElementById(id).style.display='none';
}

function highlight(page){
        page.style.borderColor = '#000099';
    setTimeout(() => {
        page.style.borderColor = '#000077';
    }, 100);
    setTimeout(() => {
        page.style.borderColor = '#000055';
    }, 150);
    setTimeout(() => {
        page.style.borderColor = '#000033';
    }, 200);
    setTimeout(() => {
        page.style.borderColor = '#e0dfdc';
    }, 300);
}

function show(id) {
    const page = document.getElementById(id);
    if(page){
        page.style.display='block';
        highlight(page);
    } else{
        console.warn('pagina cu id-ul %s nu exista', id);
    }

    const oldLink = document.querySelector("a[data-page].active");
    if(oldLink){
        oldLink.classList.remove("active");
    }
    const link = document.querySelector("a[data-page=" + id +"]");
    link.classList.add("active");
}

function hideAllPages(){
    const pages = Array.from(document.getElementsByClassName('page'));
    pages.forEach(page => hide(page.id));

    // while(i < pageIds.length){
    //     hidePage(pageIds[i++]);
    // }

    // for(var i = 0; i < pageIds.length; i++){
    //     hidePage(pageIds[i]);
    // }
}

function showPage(id){
    hideAllPages();
    show(id);
}

 show('skills');

document.querySelector('#top-menu-bar').addEventListener('click', e => { 
    if( e.target.matches("a")){
        const id = e.target.getAttribute("data-page");
        showPage(id);
    }
})


window.skills = [];

function showSkills(skills){
    const skillsHtml = skills.map(skill => {
        const favorit = skill.favorit ? 'class=favorit' : '';
        const endorsements = skill.endorsements > 5 ? `<span>${skill.endorsements}</span>` : '';
        return `<li ${favorit}> ${skill.name} ${endorsements} </li>`
    }).join('');

    document.querySelector("#skills ul").innerHTML = skillsHtml;
}

// const sortSkillsByName = (a, b) => {
//      const aName = a.name.toUpperCase();
//      const bName = b.name.toUpperCase();
//      if(aName < bName){
//          return -1;
//      }
//      if(aName > bName){
//          return 1;
//      }
//      return 0;
// }

const sortSkillsByEndorsements = (a, b) => {
    return b.endorsements - a.endorsements;
}

fetch("data/skills.json")
.then(response =>  response.json())
.then(skills => {
    skills.sort(sortSkillsByEndorsements);
    window.skills = skills;
    showSkills(skills);
})
