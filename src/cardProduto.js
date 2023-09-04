import { adicionarCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo(){
    for(const produto of catalogo){
        const cardProdutos = `
        <div class="border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produto.feminino ? 'femininos' : 'masculinos'}" id="card-produto${produto.id}">
            <img src="${produto.imagem}" alt="" class="group-hover:scale-110 duration-300 my-3 rounded-lg">
            <p class="text-sm">${produto.nome}</p>
            <p class="text-sm">${produto.marca}</p>
            <p class="text-sm">${produto.preco}.00</p>
            <button id="adicionar-${produto.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-700"><i class="fa-solid fa-cart-plus"></i>"</button>
        </div>`;

        document.querySelector("#container-produtos").innerHTML += cardProdutos;
}
    for(const produto of catalogo){
        document.querySelector(`#adicionar-${produto.id}`).addEventListener('click', () => adicionarCarrinho(produto.id));
    }
};
