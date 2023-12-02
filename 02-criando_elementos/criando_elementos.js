// Define uma função chamada addInput
function addInput() {
    // Obtém a referência para o elemento com o ID 'inputs' e armazena em uma constante chamada ul
    const ul = document.getElementById('inputs');

    // Cria um novo elemento <li> (item de lista) e armazena em uma constante chamada newLi
    const newLi = document.createElement('li');

    // Define a classe do novo elemento <li> como 'list-item'
    newLi.className = 'list-item';

    // Define o texto interno do novo elemento <li> como 'New Input'
    newLi.innerText = 'New Input';

    // Cria um novo elemento <input> e armazena em uma constante chamada newInput
    const newInput = document.createElement('input');

    // Define o tipo do input como 'text'
    newInput.type = 'text';

    // Define o nome do input como 'Input'
    newInput.name = 'Input';

    // Adiciona o novo elemento <input> como filho do elemento <li>
    newLi.appendChild(newInput);

    // Adiciona o novo elemento <li> à lista (ul)
    ul.appendChild(newLi);
}
