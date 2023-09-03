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
        feminino: false,
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
        feminino: false,
    },
    {
        id: '7',
        imagem: './assets/img/product-7.jpg',
        nome: 'Casaco com Botões',
        marca: 'Zara',
        preco: 75,
        feminino: false,
    },
    {
        id: '8',
        imagem: './assets/img/product-8.jpg',
        nome: 'Colete Comprido com Cinto',
        marca: 'Zara',
        preco: 60,
        feminino: false,
    },
];

// Função para salvar as informações do carrinho
export function salvarLocalStorage(chave, informacao){
    localStorage.setItem(chave, JSON.stringify(informacao)); // Transformando em json para lidar com objetos para ler no formato json
}

export function lerLocalStorage(chave){
    return JSON.parse(localStorage.getItem(chave)); // Recuperando a informação através da chave e transformando em Object
}
