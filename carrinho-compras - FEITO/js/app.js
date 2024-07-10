let totalGeral;
limpar();
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
    console.log("Botão clicado!")
    //recuperar valores do nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço e subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;


    //atualizar o valor total
    totalGeral = totalGeral + preco
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    console.log("Botão clicado")
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

let peso = 2;
let produto = 'produto';

function frete() {
    console.log('Botão clicado!');
    alert('custoFrete')
}

function calcularFrete(peso, produto) {
    let taxaBase = 30;
    let taxaPorKg = 10;
    let taxaProduto = 0;

    if (peso <= 0) {
        return "Por favor, insira um peso válido.";
    }

    switch (produto) {
        case "Fone de ouvido":
            taxaProduto = 10;
            break;
        case "Celular":
            taxaProduto = 20;
            break;
        case "Microfone ATR":
            taxaProduto = 30;
            break;
        case "Oculos VR":
            taxaProduto = 40;
            break;
        default:
            return "Por favor, insira um produto válido (Fone de ouvido, Celular, Microfone ATR, Oculos VR).";
    }

    let custoFrete = taxaBase + (peso * taxaPorKg) + taxaProduto;
    alert(`A taxa cobrada é de: ${custoFrete}`)

    return "O custo do frete para o " + produto + " é R$" + custoFrete.toFixed(2);
}

console.log(calcularFrete(peso, "Oculos VR"));
