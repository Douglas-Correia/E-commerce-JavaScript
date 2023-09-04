export const catalogo = [
    {
        id: '1',
        imagem: './assets/img/product-1.jpg',
        nome: 'Camisa Larga com Bolso',
        marca: 'Zara',
        preco: 70,
        feminino: false,
    },
    {
        id: '2',
        imagem: './assets/img/product-2.jpg',
        nome: 'Casaco Reto com Lâ',
        marca: 'Zara',
        preco: 85,
        feminino: true,
    },
    {
        id: '3',
        imagem: './assets/img/product-3.jpg',
        nome: 'Jaqueta com Efeito Camurça',
        marca: 'Zara',
        preco: 60,
        feminino: false,
    },
    {
        id: '4',
        imagem: './assets/img/product-4.jpg',
        nome: 'Sobretudo em Mescla de Lâ',
        marca: 'Zara',
        preco: 160,
        feminino: false,
    },
    {
        id: '5',
        imagem: './assets/img/product-5.jpg',
        nome: 'Camisa Larga Acolchada de Veludo',
        marca: 'Zara',
        preco: 110,
        feminino: false,
    },
    {
        id: '6',
        imagem: './assets/img/product-6.jpg',
        nome: '',
        marca: 'Zara',
        preco: 60,
        feminino: true,
    },
    {
        id: '7',
        imagem: './assets/img/product-7.jpg',
        nome: 'Casaco com Botões',
        marca: 'Zara',
        preco: 75,
        feminino: true,
    },
    {
        id: '8',
        imagem: './assets/img/product-8.jpg',
        nome: 'Colete Comprido com Cinto',
        marca: 'Zara',
        preco: 60,
        feminino: true,
    },
];

// Função para salvar as informações do carrinho
export function salvarLocalStorage(chave, informacao){
    localStorage.setItem(chave, JSON.stringify(informacao)); // Transformando em json para lidar com objetos para ler no formato json
}

export function lerLocalStorage(chave){
    return JSON.parse(localStorage.getItem(chave)); // Recuperando a informação através da chave e transformando em Object
}

export function apagarDoLocaStorage(chave){
    localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHTML, quantidadeProduto){
    const produto = catalogo.find(p => p.id === idProduto); // Ache o produto p tal que o produto p tenha o id igual o idProduto
    const containerProdutosCarrinho = document.getElementById(idContainerHTML);

    const elementoArticle = document.createElement('article');
    const articleClasses = ['flex', 'bg-stone-200', 'rounded-lg', 'p-1', 'relative', 'mb-2', 'w-96'] // No article p-2 flex flex-col justify-between colocamos os elementos para ficar separados 

    for (const articleClass of articleClasses){
        elementoArticle.classList.add(articleClass);
    }

    const cardProduto = `
                <img class="h-24 rounded-lg" src="${produto.imagem}" alt="Carrinho: ${produto.nome}">
                <div class="p-2 flex flex-col justify-between"> 
                    <p class="text-slate-900 text-sm">${produto.nome}</p>
                    <p class="text-slate-400 text-xs">Tamanho M</p>
                    <p class="text-green-700 text-lg">R$ ${produto.preco}</p>
                </div>
                <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
                    <p id="quantidade-${idProduto}" class="ml-2">${quantidadeProduto}</p>
                </div>`

    elementoArticle.innerHTML = cardProduto;
    containerProdutosCarrinho.appendChild(elementoArticle); // AppendoChild está adicionando um filho ao pai
};