

//Função para escalar um jogador:
function escalarJogador(){

    const jogador = {
        posicao: document.getElementById('posicaoJogador').value,
        nome: document.getElementById('nomeJogador').value,
        camisa: document.getElementById('camisaJogador').value
    }

    const listaEscalacao = document.getElementById('escalacao')

    const itemLista = document.createElement('li')
    itemLista.innerText = `Nome: ${jogador.nome} | Camisa: ${jogador.camisa} | Posição: ${jogador.posicao}`
    listaEscalacao.appendChild(itemLista)

    console.log(itemLista)
}

// Função para Limpar os campos de escalação.
function limparEscalacao(){

    document.getElementById('posicaoJogador').value = "";
    document.getElementById('nomeJogador').value = "";
    document.getElementById('camisaJogador').value = "";
}