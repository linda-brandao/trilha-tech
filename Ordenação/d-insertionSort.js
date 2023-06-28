import { listaLivros as livros } from "./b-lista-livros.js";
import { trocaPosicao } from "./d-trocaPosicao.js";

function insertSort (lista) {
    for (let posicaoAtual = 0; posicaoAtual < lista.length; posicaoAtual++) {
        let posicaoDeAnalise = posicaoAtual
        
        while (posicaoDeAnalise > 0 && lista[posicaoDeAnalise].preco < lista[posicaoDeAnalise - 1].preco) {
            trocaPosicao(lista, posicaoDeAnalise, posicaoDeAnalise - 1)

            posicaoDeAnalise--
        }
    }
    console.log(lista);
}

insertSort(livros)