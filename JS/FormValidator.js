let span1 = document.getElementById('span1');
        let span2 = document.getElementById('span2');
        let span3 = document.getElementById('span3');
        let span4 = document.getElementById('span4');
        let span5 = document.getElementById('span5');
        let span6 = document.getElementById('span6');

        

        function enviar() {
            event.preventDefault();
            let nome = document.getElementById('nome').value;
            let nome2 = document.getElementById('nome2').value;
            let cpf = document.getElementById('cpf').value;
            let telefone = document.getElementById('telefone').value;
            let email = document.getElementById('email').value;
            let idade = document.getElementById('idade').value;


            if (nome.length < 3){
                span1.style.display = 'block';
            } else if (nome2.length < 3) {
                span1.style.display = 'none';
                span6.style.display = 'block';
            } else if (idade.length < 10) {
                span6.style.display = 'none';
                span1.style.display = 'none';
                span5.style.display = 'block';
            } else if (cpf.length < 14){
                span6.style.display = 'none';
                span1.style.display = 'none';
                span5.style.display = 'none';
                span2.style.display = 'block'
            } else if (telefone.length < 13){
                span6.style.display = 'none';
                span1.style.display = 'none';
                span5.style.display = 'none';
                span2.style.display = 'none';
                span3.style.display = 'block';
            } else if (email.length < 10){
                span6.style.display = 'none';
                span1.style.display = 'none';
                span5.style.display = 'none';
                span2.style.display = 'none';
                span3.style.display = 'none';
                span4.style.display = 'block';
            } else {
                window.location.href = 'FormValidatorSucess.html';
            }
        }