import { desenharProdutoCarrinhoSimples, lerLocalStorage, apagarDoLocaStorage, salvarLocalStorage } from "./utilidades";

// Essa função vamos acessar o localStorage para pegar as informações dos produtos do carrinho 
function desenharProdutosCheckout(){
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

    for(const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto]);
    };
}

function finalizarCompra(evento){
    // Ação que permite interromper o comportamento padrão do formulário
    evento.preventDefault();
    const dataAtual = new Date();
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
        return;
    }

    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade,
    }

    // Histórico de pedidos, mas se não tiver nada ainda, cria uma lista vazia
    const historicoDePedidos = lerLocalStorage('historico') ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos] // Esses 3 pontos serve para espalhar, chamado de espalhamento(spreed), deixar uma lista se juntar com um conjunto de elementos de outra lista

    // Salvando no historico os pedidos atualizados
    salvarLocalStorage('historico', historicoDePedidosAtualizado);
    
    // Limpando o carrinho
    apagarDoLocaStorage('carrinho');

    // Encaminhar para a página de pedidos 
    window.location.href = window.location.origin + '/pedidos.html';
}

document.addEventListener('submit', (evt) => finalizarCompra(evt));
desenharProdutosCheckout();