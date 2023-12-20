// Função de registro
function register(ev) {
    // Exibe o evento no console (para fins de depuração)
    console.log(ev);

    // Obtém os valores dos campos de entrada do formulário a partir do evento
    const username = ev.currentTarget.parentNode.children.username.value;
    const password = ev.currentTarget.parentNode.children.password.value;
    const passwordConfirmation = ev.currentTarget.parentNode.children.passwordConfirmation.value;

    // Verifica se a senha e a confirmação de senha são iguais
    if (password === passwordConfirmation) {
        // Se forem iguais, exibe uma mensagem de registro bem-sucedido com o nome de usuário
        alert(`O usuário ${username} foi registrado com sucesso!`);
    } else {
        // Se não forem iguais, exibe uma mensagem indicando que as senhas não conferem
        alert("As senhas não conferem!");
    }
}

// Obtém o botão de registro do documento pelo ID
const button = document.getElementById('register-button');

// Adiciona um ouvinte de evento de clique ao botão, chamando a função register quando clicado
button.addEventListener('click', register);

// Função para remover o ouvinte de evento de clique do botão de registro
function removeListener() {
    // Remove o ouvinte de evento de clique associado à função register
    button.removeEventListener('click', register);
    
    // Exibe uma mensagem indicando que o evento foi removido
    alert('Evento removido.');
}
