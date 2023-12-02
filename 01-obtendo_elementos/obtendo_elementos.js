function show() {
  //Para obter um elemnto atravez do seu ID usamos "document.getElementByID('Id do elemento aqui').
  const contactList = document.getElementById("contact-list");
  console.log(contactList);

  //Para obter varios elementos que compartilham da mesma Tag usamos document.getElementByTagName('Nome da tag aqui').
  const listElements = document.getElementsByTagName("li");
  console.log(listElements);

  //Para obter varios elementos que compartilham da mesma Classe usamos document.getElementByClassName('Nome da classe aqui').
  const contactInputs = document.getElementsByClassName("contact-input");
  console.log(contactInputs);

 //Para obter um elemnto atravez do seu nome usamos "document.getElementByName('nome do elemento aqui').
  const contact1 = document.getElementsByName("contact1");
  console.log(contact1);
  
  //Para obter elementos de forma especifica usamos document.querySelectorAll('elementoPai > elementoFilho > elementoNeto').  
  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);

  //Para obter o primeiro elementos de uma busca especifica usamos document.querySelector('elementoPai > elementoFilho > elementoNeto').  
  const firstContact = document.querySelector("#contact-list > li > label");
  console.log(firstContact);
}
