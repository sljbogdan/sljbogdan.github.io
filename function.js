function hide(id) {
    document.getElementById(id).style.display='none';
}

function highlight(page){
        page.style.borderColor = '#000099';
    setTimeout(function(){
        page.style.borderColor = '#000077';
    }, 100);
    setTimeout(function(){
        page.style.borderColor = '#000055';
    }, 150);
    setTimeout(function(){
        page.style.borderColor = '#000033';
    }, 200);
    setTimeout(function(){
        page.style.borderColor = '#e0dfdc';
    }, 300);
}

function show(id) {
    var page = document.getElementById(id);
    if(page){
        page.style.display='block';
        highlight(page);
    } else{
        console.warn('pagina cu id-ul %s nu exista', id);
    }

    var oldLink = document.querySelector("a[data-page].active");
    if(oldLink){
        oldLink.classList.remove("active");
    }
    var link = document.querySelector("a[data-page=" + id +"]");
    link.classList.add("active");
}

function hideAllPages(){
    var pages = Array.from(document.getElementsByClassName('page'));
    pages.forEach(function(page){
        hide(page.id);
    });

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

document.querySelector('#top-menu-bar').addEventListener('click', function(e){ 
    if( e.target.matches("a")){
        var id = e.target.getAttribute("data-page");
        showPage(id);
    }
})


var skills = [];

function showSkills(skills){
    var skillsHtml = skills.map(function(skill){
        var favorit = skill.favorit ? 'class=favorit' : '';
        var endorsements = skill.endorsements > 5 ? `<span>${skill.endorsements}</span>` : '';
        return `<li ${favorit}> ${skill.name} ${endorsements} </li>`
    }).join('');

    document.querySelector("#skills ul").innerHTML = skillsHtml;
}

// function sortSkillsByName(a, b){
//     var aName = a.name.toUpperCase();
//         var bName = b.name.toUpperCase();
//         if(aName < bName){
//             return -1;
//         }
//         if(aName > bName){
//             return 1;
//         }
//         return 0;
// }

function sortSkillsByEndorsements(a, b){
    return b.endorsements - a.endorsements;
}

fetch("data/skills.json").then(function(response){
    return response.json();
}).then(function(skills){
    skills.sort(sortSkillsByEndorsements);
    showSkills(skills);
})
