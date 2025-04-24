import { Produtos } from "./services/fetchApi.js";

const divCardapio = document.getElementById('cardapio');

let produtos = [];

window.addEventListener('DOMContentLoaded', async () => {
    produtos = new Produtos;
    produtos = [...await produtos.getProdutos()];
    
    produtos.map(e => (
        divCardapio.innerHTML += `
            <div>
                <img src="${e.imagem}" alt="thumb-produto"/>
            </div>
        `
    ))
});