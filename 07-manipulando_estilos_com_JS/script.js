
function usarTemaClaro(){
  document.body.style.color = '#212529';
  document.body.style.backgroundColor = '#f1f5f9';
}

function usarTemaEscuro(){
    document.body.style.color = '#f1f5f9'; 
    document.body.style.backgroundColor = '#212529';
  }

function alternarTemas(){
  document.body.classList.toggle('tema-claro');
  document.body.classList.toggle('tema-escuro');
}

document.getElementById('btn-claro').addEventListener('click', usarTemaClaro);
document.getElementById('btn-escuro').addEventListener('click', usarTemaEscuro);
document.getElementById('btn-alternar').addEventListener('click', alternarTemas);