// Obtemos a referência para o elemento de input pelo ID 'input'
const input = document.getElementById('input');

// Adicionamos um evento de clique ao botão 'btn-valor'
document.getElementById('btn-valor').addEventListener('click', function(){
    // Ao clicar no botão, definimos o valor do input para 'Olá, mundo?' e logamos o atributo 'value'
    input.value = 'Olá, mundo?';
    console.log(input.getAttribute('value'));
});

// Adicionamos um evento de clique ao botão 'btn-tipo'
document.getElementById('btn-tipo').addEventListener('click', function(){
    // Ao clicar no botão, verificamos se o tipo do input é diferente de 'radio'
    if(input.type !== 'radio'){
        // Se for diferente, alteramos o tipo para 'radio'
        input.setAttribute('type', 'radio');
    } else {
        // Se for 'radio', alteramos o tipo para 'text'
        input.setAttribute('type', 'text');
    }
});

// Adicionamos um evento de clique ao botão 'btn-placeholder'
document.getElementById('btn-placeholder').addEventListener('click', function(){
    // Ao clicar no botão, definimos o atributo 'placeholder' do input como 'Digite aqui...'
    input.setAttribute('placeholder', 'Digite aqui...');
});

// Adicionamos um evento de clique ao botão 'btn-desabilitacao'
document.getElementById('btn-desabilitacao').addEventListener('click', function(){
    // Ao clicar no botão, verificamos se o input está desabilitado
    if(input.disabled === false){
        // Se não estiver desabilitado, o desabilitamos
        input.disabled = true;
    } else {
        // Se estiver desabilitado, o habilitamos
        input.disabled = false;
    }
});

// Adicionamos um evento de clique ao botão 'btn-dados'
document.getElementById('btn-dados').addEventListener('click', function(){
    // Ao clicar no botão, obtemos o valor do atributo 'data-something' e exibimos um alerta
    const dados = input.dataset.something;
    alert(`O valor do atributo 'data-something' é: ${dados}`);
});