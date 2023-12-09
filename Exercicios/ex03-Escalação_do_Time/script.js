// Função para escalar um jogador:
function escalarJogador() {
    // Obter os valores dos campos de entrada (posicao, nome, numero)
    const posicao = document.getElementById('posicao').value;
    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('numero').value;

    // Obter a lista de jogadores do time
    const listaTime = document.getElementById('listaTime');

    // Exibir uma confirmação para o usuário
    const confirmacao = confirm(`Escalar o Jogador ${nome} (${numero}) como ${posicao}?`);

    // Se o usuário confirmar, adicionar o jogador à lista
    if (confirmacao === true) {
        // Criar um novo elemento de lista (li) para o jogador
        const itemJogador = document.createElement('li');

        // Definir o ID do elemento para identificação futura
        itemJogador.id = `jogador-${numero}`;

        // Definir o texto interno do elemento com informações do jogador
        itemJogador.innerText = `${posicao} - ${nome} (${numero})`;

        // Adicionar o elemento à lista de jogadores do time
        listaTime.appendChild(itemJogador);
    }

    // Limpar os campos de entrada após a escalação
    document.getElementById('posicao').value = "";
    document.getElementById('nome').value = "";
    document.getElementById('numero').value = "";
}

// Função para desescalar um jogador
function desescalarJogador() {
    // Obter o número do jogador a ser removido
    const numero = document.getElementById('numeroParaRemover').value;

    // Obter o elemento do jogador a partir do seu ID
    const jogadorParaRemover = document.getElementById(`jogador-${numero}`);

    // Exibir uma confirmação para o usuário
    const confirmacao = confirm(`Remover o  ${jogadorParaRemover.innerText}?`);

    // Se o usuário confirmar, remover o jogador da lista
    if(confirmacao){
        // Obter a lista de jogadores do time e remover o jogador específico
        document.getElementById('listaTime').removeChild(jogadorParaRemover);

        // Limpar o campo de entrada após a remoção
        document.getElementById("numeroParaRemover").value = "";
    }
}
