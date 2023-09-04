import { renderizarCatalogo } from "./src/cardProduto";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutoCarrinho } from "./src/menuCarrinho";
import { inicializarFiltros } from "./src/filtrosCatalogo";

renderizarProdutoCarrinho();
renderizarCatalogo();
inicializarCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();