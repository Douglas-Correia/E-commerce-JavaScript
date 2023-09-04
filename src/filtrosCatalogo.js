const catalogoProdutos = document.querySelector("#container-produtos");

function exibirTodos(){
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));

    for(const produto of produtosEscondidos){
        produto.classList.remove('hidden');
    }
}

function esconderMasculinos(){
    exibirTodos();
    // Estamos pegando as classes masculina do container de produtos e criando uma "Lista"
    const produtosMasculinos =  Array.from(catalogoProdutos.getElementsByClassName('masculinos'));

    // Percorrendo cada produto dessa lista
    for(const produto of produtosMasculinos){
        produto.classList.add('hidden');
    }
}

function esconderFemininos(){
    exibirTodos();
    // Estamos pegando as classes femininas do container de produtos e criando uma "Lista"
    const produtosFemininos = Array.from(catalogoProdutos.getElementsByClassName('femininos'));

    // Percorrendo cada produto dessa lista
    for(const produto of produtosFemininos){
        produto.classList.add('hidden');
    }
}

export function inicializarFiltros(){
    document.querySelector("#exibir-todos").addEventListener('click', exibirTodos);
    document.querySelector("#exibir-femininos").addEventListener('click', esconderMasculinos);
    document.querySelector("#exibir-masculinos").addEventListener('click', esconderFemininos);
}