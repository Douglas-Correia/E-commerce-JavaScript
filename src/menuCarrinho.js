import { catalogo } from "./utilidades";

function fecharCarrinho(){
    document.querySelector("#carrinho").classList.remove("right-[0px]");
    document.querySelector("#carrinho").classList.add("right-[-360px]");
};

function abrirCarrinho(){
    document.querySelector("#carrinho").classList.add("right-[0px]");
    document.querySelector("#carrinho").classList.remove("right-[-360px]");
};


export function inicializarCarrinho(){
    document.querySelector("#fechar-carrinho").addEventListener('click', fecharCarrinho);
    document.querySelector("#abrir-carrinho").addEventListener('click', abrirCarrinho);
};

export function adicionarCarrinho(idProduto){
    const produto = catalogo.find(p => p.id === idProduto); // Ache o produto p tal que o produto p tenha o id igual o idProduto
    const containerProdutosCarrinho = document.querySelector("#produtos-carrinho");
    const cardProduto = `
            <article class="flex bg-slate-100 rounded-lg p-1 relative">
                <button id="fechar-carrinho" class="absolute top-0 right-2">
                    <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
                </button>
                <img class="h-24 rounded-lg" src="${produto.imagem}" alt="Carrinho: ${produto.nome}">
                <div class="py-2">
                    <p class="text-slate-900 text-sm">${produto.nome}</p>
                    <p class="text-slate-400 text-xs">Tamanho M</p>
                    <p class="text-green-700 text-lg">R$ ${produto.preco}</p>
                </div>
            </article>`

    containerProdutosCarrinho.innerHTML += cardProduto;
}