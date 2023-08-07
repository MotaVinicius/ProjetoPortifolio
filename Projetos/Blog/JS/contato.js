/*mascara jquery*/

$(document).ready(function(){
    $("#telefone").mask("(00)00000-0000");
});

/*validações*/

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const mensagem = document.getElementById('mensagem');

const spanNome = document.querySelector('.spanNome');
const spanEmail = document.querySelector('.spanEmail');
const spanTelefone = document.querySelector('.spanTelefone');
const spanMensagem = document.querySelector('.spanMensagem');


const field1 = document.querySelector('.one');
const field2 = document.querySelector('.two');
const field3 = document.querySelector('.three');

const botao = document.querySelector('#btn-form');



nome.addEventListener('blur', () => {
    if(nome.value.length >= 8 || nome.value.length == 0){
        spanNome.style.display = 'none'
        field1.classList.remove('wrong');
    } else {
        spanNome.style.display = 'block'
        field1.classList.add('wrong');
    }
})

email.addEventListener('blur', () => {
    if(email.value.length >= 8 && email.value.includes('@') && email.value.includes('.com') || email.value.length == 0){
        spanEmail.style.display = 'none'
        field2.classList.remove('wrong');
    } else {
        spanEmail.style.display = 'block'
        field2.classList.add('wrong');
    }
})

telefone.addEventListener('blur', () => {
    if(telefone.value.length >= 13 || telefone.value.length == 0){
        spanTelefone.style.display = 'none'
        field3.classList.remove('wrong');
    } else {
        spanTelefone.style.display = 'block'
        field3.classList.add('wrong');
    }
})
mensagem.addEventListener('blur', () => {
    if(mensagem.value.length > 40 || mensagem.value.length == 0){
        spanMensagem.style.display = 'none'
        mensagem.style.border = 'none'
    } else {
        spanMensagem.style.display = 'block'
        mensagem.style.border = '1px solid red'
    }
})

function desabilitado() {
    if(nome.value.length >= 8 && email.value.length >= 8 && email.value.includes('@') && email.value.includes('.com') && telefone.value.length >= 13 && mensagem.value.length >= 40) {
        botao.style.cursor = 'pointer';
    } else {
        botao.style.cursor = 'not-allowed';
    }
}

function enviar() {
    let popUp = document.querySelector('#popUpWindow')
    let popUp2 = document.querySelector('#popUpMessage')
    if(nome.value.length >= 8 && email.value.length >= 8 && email.value.includes('@') && email.value.includes('.com') && telefone.value.length >= 13 && mensagem.value.length >= 40) {
        popUp.style.display = 'flex';
        mensagem.value = '';
        telefone.value = '';
        email.value = '';
        nome.value = '';
    } else {
        alert('Preencha todos os campos corretamente!')
    }
}
 function fechar() {
    let popUp = document.querySelector('#popUpWindow')
    popUp.style.display = 'none'
 }

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
