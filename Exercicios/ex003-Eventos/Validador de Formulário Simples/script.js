// Exercício 3: Validador de Formulário Simples

/*Crie um formulário HTML com campos de entrada para nome e e-mail, além de um botão de envio. Utilize o addEventListener para capturar o evento de envio do formulário. Na função associada a esse evento, valide se os campos de nome e e-mail estão preenchidos. Se ambos estiverem preenchidos, você pode exibir uma mensagem de sucesso.*/

const fullName = document.getElementById('fullName');

const email = document.getElementById('email');

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){

    const fullNameUser = fullName.value;
    const emailUser = email.value;

    const confirmed = confirm(`Confirmar cadastro? \nNome completo: ${fullNameUser} \nE-mail: ${emailUser}`)

    if(confirmed === true){
        alert('Cadastro realizado com sucesso!')
    }
})