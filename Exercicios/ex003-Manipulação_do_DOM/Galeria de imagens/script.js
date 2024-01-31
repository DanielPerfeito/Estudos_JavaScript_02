// Desafio 2: Galeria de Imagens Dinâmica

/*Crie uma galeria de imagens. Tenha um campo de entrada de URL da imagem e um botão "Adicionar". Ao inserir uma URL e clicar no botão, a imagem correspondente deve ser adicionada à galeria. Cada imagem deve ter um botão "Remover" para excluí-la.*/


//Declaração das variáveis de captura:
const inputImage = document.getElementById('input-image');
const btnAdd = document.getElementById('btn-add');
const divGalery = document.getElementById('div-galery');

//Declaração das funçoes:

btnAdd.addEventListener('click', function () {

    if (inputImage.value === "") {
        alert('Insira uma URL valida!')
    } else {

        const urlImage = inputImage.value;

        const divImage = document.createElement('div');
        divImage.classList = 'div-image';

        const image = document.createElement('img');
        image.src = urlImage;
        image.classList = 'image';
        image.style.display = 'block';
        image.style.width = '200px';

        const btnRemove = document.createElement('button');
        btnRemove.classList = 'btn-remove';
        btnRemove.innerText = 'Excluir';

        divImage.appendChild(image);
        divImage.appendChild(btnRemove);
        divGalery.appendChild(divImage);

        inputImage.value = '';

        btnRemove.addEventListener('click', function () {
            divGalery.removeChild(divImage);
        })
    }
});