import { catalogo, salvarLocalStorage , lerLocalStorage } from "./utilidades";

// Usando operadpr de coalessense, básicamente ele serve para, se existir o da esquerda executa primeiro, se não o outro
const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {}; // Dicionário para guardar a quantidade do carrinho

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

function removerDoCarrinho(idProduto){
    delete idsProdutoCarrinhoComQuantidade[idProduto]; // Deletar o produto correto do docionário
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade); // Estamos passando a chave e o dicionários para salvar 
    atualizarPrecoCarrinho();
    renderizarProdutoCarrinho();
};

function incrementarQuantidadeProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto]++; // Adicionando uma chave id e a quantidade no dicionário
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade); // Estamos passando a chave e o dicionários para salvar 
    atualizarPrecoCarrinho();
    atualizarIformacaoQuantidade(idProduto); // Chamando a função e passando o id para atualizar
};

function decrementarQuantidadeProduto(idProduto){
    // Vamos verificar se o dicionário estiver com o id e a pessoa for remover, se tem somente 1 unidade remove, se não decrementa
    if (idsProdutoCarrinhoComQuantidade[idProduto] === 1){
        removerDoCarrinho(idProduto);
        return // Fecha o bloco de execução sem precisar executar abaixo para decrementar
    } 

    idsProdutoCarrinhoComQuantidade[idProduto]--; // Adicionando uma chave id e a quantidade no dicionário
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade); // Estamos passando a chave e o dicionários para salvar 
    atualizarPrecoCarrinho();
    atualizarIformacaoQuantidade(idProduto); // Chamando a função e passando o id para atualizar
};

function atualizarIformacaoQuantidade(idProduto){
    document.querySelector(`#quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
};

function desenharProdutoNoCarrinho(idProduto){
    const produto = catalogo.find(p => p.id === idProduto); // Ache o produto p tal que o produto p tenha o id igual o idProduto
    const containerProdutosCarrinho = document.querySelector("#produtos-carrinho");

    const elementoArticle = document.createElement('article');
    const articleClasses = ['flex', 'bg-slate-100', 'rounded-lg', 'p-1', 'relative'] // No article p-2 flex flex-col justify-between colocamos os elementos para ficar separados 

    for (const articleClass of articleClasses){
        elementoArticle.classList.add(articleClass);
    }

    const cardProduto = `
                <button id="remover-item-${produto.id}" class="absolute top-0 right-2">
                    <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
                </button>
                <img class="h-24 rounded-lg" src="${produto.imagem}" alt="Carrinho: ${produto.nome}">
                <div class="p-2 flex flex-col justify-between"> 
                    <p class="text-slate-900 text-sm">${produto.nome}</p>
                    <p class="text-slate-400 text-xs">Tamanho M</p>
                    <p class="text-green-700 text-lg">R$ ${produto.preco}</p>
                </div>
                <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
                    <button id="decrementar-produto${produto.id}">-</button>
                    <p id="quantidade-${idProduto}" class="ml-2">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
                    <button id="incrementar-produto${produto.id}" class="ml-2">+</button>
                </div>`

    elementoArticle.innerHTML = cardProduto;
    containerProdutosCarrinho.appendChild(elementoArticle); // AppendoChild está adicionando um filho ao pai

    document.querySelector(`#decrementar-produto${produto.id}`).addEventListener('click', () => decrementarQuantidadeProduto(produto.id)); // Para a função não ser executado direta por causa dos parenteses, deve-se criar uma Arrow functions
    document.querySelector(`#incrementar-produto${produto.id}`).addEventListener('click', () => incrementarQuantidadeProduto(produto.id));
    document.querySelector(`#remover-item-${produto.id}`).addEventListener('click', () => removerDoCarrinho(produto.id));
};

export function renderizarProdutoCarrinho(){
    // Nesta função estamos pegando a section do html e deixando ela vazia para renderizar de forma correta
    const containerProdutosCarrinho = document.querySelector("#produtos-carrinho");
    containerProdutosCarrinho.innerHTML = "";

    // Vamos percorrer o dicionário de idsProdutos e vamos pegar cada id existente do carrinho e iremos desenhar novamente no carrinho
    for(const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoNoCarrinho(idProduto); 
    }
};

export function adicionarCarrinho(idProduto){
    if(idProduto in idsProdutoCarrinhoComQuantidade){
        incrementarQuantidadeProduto(idProduto);
        return; // return faz com que saia da execução da condição
    }

    idsProdutoCarrinhoComQuantidade[idProduto] = 1; // Iniciando o contador com 1 para poder acrescentar
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade); // Estamos passando a chave e o dicionários para salvar 
    desenharProdutoNoCarrinho(idProduto);
    atualizarPrecoCarrinho();
};

export function atualizarPrecoCarrinho(){
    const precoCarrinho = document.querySelector("#preco-total");

    let precoTotalCarrinho = 0;

    for(const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade){
        precoTotalCarrinho += catalogo.find((p)=> p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho]; // Nesta linha estamos somando o valor dos produtos que estão no carrinho, passando linha por linha
    }
    precoCarrinho.innerText = `Total: R$ ${precoTotalCarrinho},00`;
}
