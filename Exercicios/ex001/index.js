/*Exercício 1: Obtendo Elementos e Modificando Conteúdo

1.1 Crie uma página HTML simples com alguns parágrafos, divs e outros elementos.

1.2 Usando JavaScript e o DOM, selecione um elemento na página e altere seu conteúdo para "Eu dominei o DOM!".

1.3 Adicione um evento que, quando o usuário clicar em um botão na página, altere o conteúdo de outro elemento.*/

function uparStatus(){

    const status = document.getElementById("status");
    console.log(status);

    status.innerText = "Eu Dominei o DOM!"
    
}