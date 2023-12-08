
function addParagrafo(){

    const areaTexto = document.getElementById('artigo');
    
    const newParagrafo = document.createElement('p');

    newParagrafo.innerText = "Novo Paragrafo"

    areaTexto.appendChild(newParagrafo)

}

function removeParagrafo(){

    const areaTexto = document.getElementById('artigo');

    const paragrafos = document.getElementsByTagName('p')

    areaTexto.removeChild(paragrafos[paragrafos.length - 1])
}