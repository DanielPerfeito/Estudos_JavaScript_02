// Obtendo referência ao formulário com o id 'orderForm' do HTML
const form = document.getElementById('orderForm');

// Adicionando um ouvinte de evento para o evento de envio do formulário
form.addEventListener('submit', function (ev) {
    // Impedindo o comportamento padrão do formulário de ser enviado
    ev.preventDefault();

    // Obtendo os valores dos campos do formulário
    const name = document.querySelector('input[name="name"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const breadType = document.querySelector('select[name="breadType"]').value;
    const main = document.querySelector('input[name="main"]').value;

    // Inicializando a variável salad como uma string vazia
    let salad = "";
    
    // Iterando sobre os itens marcados no grupo de checkboxes com o nome 'salad'
    document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
        // Adicionando cada item marcado à string salad
        salad += " - " + item.value + "\n";
    });

    // Obtendo o valor do campo de observações
    const observations = document.querySelector('textarea[name="observations"]').value;

    // Exibindo os dados no console para fins de depuração
    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations
    });

    // Exibindo um alerta com os detalhes do pedido
    alert(
        "Pedido Realizado!" +
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType +
        "\nRecheio: \n - " + main + "\n" + salad +
        "Observações: " + observations
    );
});