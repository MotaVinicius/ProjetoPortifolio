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
/*pop-up*/

const span = document.getElementById('span');
const email = document.querySelector('.email');
const popFull = document.querySelector('.pop-up')

email.addEventListener('keyup', () => {
    if(email.value.length == 0){
        span.style.display = 'none'
    }
})

function enviar(){
    if(email.value.length >= 8 && email.value.includes('@') && email.value.includes('.com')) {
        span.style.display = 'none'
        email.value = ''
        popFull.style.display = 'flex'
    } else {
        span.style.display = 'block'
    }
}
popFull.addEventListener('click', () => {
    popFull.style.display = 'none'
})