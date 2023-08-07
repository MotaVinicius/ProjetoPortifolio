/*tabela*/

const fieldSearch = document.getElementById('txt-busca');
const conteudo = document.getElementById('dados');

fieldSearch.addEventListener('keyup', () => {
    
    let rows = conteudo.getElementsByTagName('tr');
    let pesquisa = fieldSearch.value.toLowerCase();
    
    for(let index in rows){
        
        if(true===isNaN(index)){
            continue;
        }
       
    let contentRows = rows[index].innerHTML.toLowerCase();

    if(true === contentRows.includes(pesquisa)){
        rows[index].style.display = '' 
    } else {
        rows[index].style.display = 'none'
    }

}});

/*menu mobile*/

function menuShow(){
    let menuMobile = document.querySelector('.menu-mobile');
    let icone = document.querySelector('.fa-solid');

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icone.classList.remove('fa-xmark')
        icone.classList.add('fa-bars')
        
    } else {
        menuMobile.classList.add('open')
        icone.classList.remove('fa-bars')
        icone.classList.add('fa-xmark')
    }
    
}