import { listaLivros as livros } from "./b-lista-livros.js";

function insertSort (lista) {
    for (let posicaoAtual = 0; posicaoAtual < lista.length; posicaoAtual++) {
        let posicaoDeAnalise = posicaoAtual
        
        while (posicaoDeAnalise > 0 && lista[posicaoDeAnalise].preco < lista[posicaoDeAnalise - 1].preco) {
            let itemAtual = lista[posicaoDeAnalise]
            let itemAnterior = lista[posicaoDeAnalise - 1]

            lista[posicaoDeAnalise] = itemAnterior
            lista[posicaoDeAnalise - 1] = itemAtual

            posicaoDeAnalise--
        }
    }
    console.log(lista);
}

insertSort(livros)