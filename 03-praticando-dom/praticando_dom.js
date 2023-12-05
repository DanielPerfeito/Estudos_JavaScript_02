
// Função para adicionar Contatos
function addContat(){
    const contactSection = document.getElementById('contactList');
    console.log(contactSection);

    const h3 = document.createElement('h3');
    h3.innerText = "Contato";

    //Campo de nome
    const ul = document.createElement('ul');

    const nameLi = document.createElement('li');
    nameLi.innerText = "Nome";

    const nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.name = "fullname";

    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi);

    //Campo de telefone:
   
    const phoneLi = document.createElement('li');
    phoneLi.innerText = "Telefone";

    const phoneInput = document.createElement('input');
    phoneInput.type = "text";
    phoneInput.name = "fullname";

    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);


    //Campo de Endereço:
    const addressLi = document.createElement('li');
    addressLi.innerHTML = '<label for="address">Endereço: </label>';

    const adressInput = document.createElement('input');
    adressInput.type = 'text';
    adressInput.name = 'address';
    adressInput.id = 'address';

    addressLi.appendChild(adressInput);
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('hr'))

    contactSection.append(h3, ul);
}

//Função para remover contatos
function removeContact(){
    const contactSection = document.getElementById('contactList');

    const titles = document.getElementsByTagName('h3');
    const contacts = document.getElementsByTagName('ul');

    //Para remover um elemento utilizamos removeChild.
    contactSection.removeChild(titles[titles.length - 1]);
    contactSection.removeChild(contacts[contacts.length - 1]);

}