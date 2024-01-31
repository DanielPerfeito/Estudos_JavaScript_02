//Desafio 3: Formulário Dinâmico

/*Crie um formulário dinâmico. Tenha campos de entrada para nome e e-mail, e um botão "Adicionar". Ao preencher os campos e clicar no botão, os dados do formulário devem ser adicionados a uma tabela na página. Cada linha da tabela deve ter um botão "Remover" para excluir a entrada correspondente.*/


// Declaração de variáveis para captura de dados.
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const btnAdd = document.getElementById('btn-add');
const contactTable = document.getElementById('contact-table');

// Declaração das funções
btnAdd.addEventListener('click', function () {

    // Verifica se os campos de nome e e-mail estão preenchidos
    if (fullNameInput.value === '' || emailInput.value === '') {
        alert('Preencha os campos com informações válidas!');
    } else {
        // Cria uma nova linha na tabela para armazenar os dados do formulário
        const newContactRow = document.createElement('tr');
        newContactRow.classList = 'contact-row';

        // Cria células para o nome, e-mail e botão de ação
        const fullNameData = document.createElement('td');
        fullNameData.innerText = fullNameInput.value;

        const emailData = document.createElement('td');
        emailData.innerText = emailInput.value;

        const actionBtn = document.createElement('td');

        // Cria o botão "Remover" e adiciona um evento para remover a linha
        const btnRemove = document.createElement('button');
        btnRemove.type = 'button';
        btnRemove.innerText = 'Remover';

        btnRemove.addEventListener('click', function () {
            contactTable.removeChild(newContactRow);
        });

        // Adiciona as células à nova linha da tabela
        newContactRow.appendChild(fullNameData);
        newContactRow.appendChild(emailData);
        newContactRow.appendChild(actionBtn);
        actionBtn.appendChild(btnRemove);

        // Adiciona a nova linha à tabela
        contactTable.appendChild(newContactRow);

        // Limpa os campos de entrada após adicionar a linha
        fullNameInput.value = '';
        emailInput.value = '';
    }
});
