const hr = document.getElementById('horas');
const min = document.getElementById('minutos');
const seg = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let Data = new Date();
    let hora = Data.getHours();
    let minutos = Data.getMinutes();
    let segundos = Data.getSeconds();

    if (hora < 10){
    hora = '0' + hora;
    }

    if (minutos < 10){
        minutos = '0' + minutos;
    }

    if (segundos < 10){
        segundos = '0' + segundos;
    }

    hr.textContent = hora;
    min.textContent = minutos;
    seg.textContent = segundos;  
})