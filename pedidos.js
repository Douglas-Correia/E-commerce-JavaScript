import { lerLocalStorage, desenharProdutoCarrinhoSimples } from "./src/utilidades";

function criarPedidoHistorico(pedidoComData){
    const elementoPedido = `
    <p class="text-xl text-bold my-4">${new Date(pedidoComData.dataPedido).toLocaleDateString('pt-BR', {hour: '2-digit', minute: '2-digit'})}</p>
    <section id="container-pedido${pedidoComData.dataPedido}" class="bg-slate-300 p-3 rounded-md"></section>`;

    const main = document.getElementsByTagName('main')[0]; // Estamos pegando o primeiro elemento tag main
    main.innerHTML += elementoPedido;

    // Estamos acessando o objeto que tem o pedido 
    for(const idProduto in pedidoComData.pedido){
        // Vamos criar o container do histórico de pedidos, passando os parametros de id do produto, id do container, e quantidade baseado no objeto que está no localStorage
        desenharProdutoCarrinhoSimples(idProduto, `container-pedido${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto]);
    }
}

function renderizarHistoricoPedidos(){
    const historico = lerLocalStorage('historico');

    for(const pedidoComData of historico){
        criarPedidoHistorico(pedidoComData);
    }
}

renderizarHistoricoPedidos();