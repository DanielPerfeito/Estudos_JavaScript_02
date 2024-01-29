//Exercício 1: Mudança de Cor ao Clicar

/*Crie uma página HTML com um elemento, como um botão ou uma caixa de texto. Ao clicar nesse elemento, a cor de fundo deve mudar para a cor vermelho. Use o addEventListener para detectar o clique e uma função para alterar a cor.*/

const titulo = document.getElementById('titulo');

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    titulo.style.color = "red"
})