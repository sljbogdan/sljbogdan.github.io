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
        console.warm('pagina cu id-ul %s nu exista', id);
    }
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