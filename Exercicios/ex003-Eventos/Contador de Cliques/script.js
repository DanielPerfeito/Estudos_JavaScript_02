// Exercício 2: Contador de Cliques

/*Crie uma página HTML com um botão. Ao clicar no botão, um contador deve ser incrementado e exibido na página. Utilize o addEventListener para detectar os cliques e uma função para manipular o contador.*/

const btn = document.getElementById('btn');

const btn0 = document.getElementById('btn0');

const span = document.querySelector('span');

let totalCliques = 0;

btn.addEventListener('click', function(){

    totalCliques++;
    span.innerText = totalCliques;
})

btn0.addEventListener('click', function(){
    totalCliques = 0;
    span.innerText = totalCliques;
})