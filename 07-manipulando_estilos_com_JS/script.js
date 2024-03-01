// Função para aplicar o tema claro
function usarTemaClaro() {
  // Altera a cor do texto e o fundo do corpo da página para o tema claro
  document.body.style.color = '#212529';
  document.body.style.backgroundColor = '#f1f5f9';
}

// Função para aplicar o tema escuro
function usarTemaEscuro() {
  // Altera a cor do texto e o fundo do corpo da página para o tema escuro
  document.body.style.color = '#f1f5f9';
  document.body.style.backgroundColor = '#212529';
}

// Função para alternar entre temas claro e escuro
function alternarTemas() {
  // Adiciona ou remove as classes 'tema-claro' e 'tema-escuro' no corpo da página
  document.body.classList.toggle('tema-claro');
  document.body.classList.toggle('tema-escuro');
}

// Adiciona eventos de clique aos botões correspondentes e associa as funções a serem chamadas
document.getElementById('btn-claro').addEventListener('click', usarTemaClaro);
document.getElementById('btn-escuro').addEventListener('click', usarTemaEscuro);
document.getElementById('btn-alternar').addEventListener('click', alternarTemas);
