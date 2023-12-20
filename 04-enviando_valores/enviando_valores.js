
function register(element){
    // Obtendo os valores dos campos de entrada do formulário
    const userName = element.children.username.value;
    const password = element.children.password.value;
    const passwordConfirmation = element.children.passwordConfirmation.value;

    // Verificando se a senha e a confirmação de senha são iguais
    if (password === passwordConfirmation){
        // Se forem iguais, exibir uma mensagem de registro bem-sucedido
        alert("Registrado com Sucesso!");
    } else {
        // Se não forem iguais, exibir uma mensagem de senhas não conferem
        alert("As senhas não conferem!");
    }
}