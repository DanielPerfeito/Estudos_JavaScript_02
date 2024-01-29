//Desafio 1: Lista de Tarefas

/*Crie uma aplicação de lista de tarefas. Tenha um campo de entrada de texto e um botão "Adicionar". Ao digitar uma tarefa e clicar no botão, a tarefa deve ser adicionada a uma lista na página. Cada item da lista deve ter um botão "Excluir" ao lado para remover a tarefa.*/

// Obtenha a referência para o campo de entrada de texto.
const inputTask = document.getElementById('newTask');

// Obtenha a referência para o botão "Adicionar".
const addTask = document.getElementById('addTask');

// Obtenha a referência para a lista de tarefas.
const taskList = document.getElementById('taskList');

// Adicione um ouvinte de evento para o clique no botão "Adicionar".
addTask.addEventListener('click', function () {
    // Verifique se o campo de entrada de texto está vazio.
    if (inputTask.value === "") {
        alert('ERRO! \n A tarefa precisa de um nome para ser adicionada!');
    } else {
        // Crie um novo item de lista (<li>) para a tarefa.
        const taskItem = document.createElement('li');

        // Crie um novo botão "Remover" para o item de tarefa.
        const removeTask = document.createElement('button');

        // Defina o tipo do botão como 'button'.
        removeTask.type = 'button';

        // Defina o texto do botão "Remover".
        removeTask.innerText = 'Remover';

        // Defina o texto do item de tarefa com o valor do campo de entrada.
        taskItem.innerText = inputTask.value + " ";

        // Adicione o botão "Remover" como filho do item de tarefa.
        taskItem.appendChild(removeTask);

        // Adicione o item de tarefa à lista de tarefas.
        taskList.appendChild(taskItem);

        // Limpe o campo de entrada após adicionar a tarefa.
        inputTask.value = "";

        // Adicione um ouvinte de evento para o clique no botão "Remover".
        removeTask.addEventListener('click', function(){
            // Remova o item de tarefa da lista quando o botão "Remover" for clicado.
            taskList.removeChild(taskItem);
        });
    }
});