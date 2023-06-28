//const livros = require("./b-lista-livros.js")
// import listaLivros from "./b-lista-livros.js";
import { listaLivros as livros } from "./b-lista-livros.js";
import buscaMenorValor from "./b-busca-menor-valor.js";
import { trocaPosicao } from "./d-trocaPosicao.js";

//selection sort -> sempre encontra o menor valor e coloca na primeira posição do array

for (let posicaoAtual = 0; posicaoAtual < livros.length; posicaoAtual++) {
    let menorValor = buscaMenorValor(livros, posicaoAtual);

    trocaPosicao(livros, posicaoAtual, menorValor)
}

console.log(livros);