//const livros = require("./b-lista-livros.js")
// import listaLivros from "./b-lista-livros.js";
import { listaLivros as livros } from "./b-lista-livros.js";
import buscaMenorValor from "./b-busca-menor-valor.js";

//selection sort -> sempre encontra o menor valor e coloca na primeira posição do array

for (let posicaoAtual = 0; posicaoAtual < livros.length; posicaoAtual++) {
    let menorvalor = buscaMenorValor(livros, posicaoAtual);

    let livroPosicaoAtual = livros[posicaoAtual];  
    let livroMenorValor= livros[menorvalor];

    livros[posicaoAtual] = livroMenorValor;
    livros[menorvalor] = livroPosicaoAtual
}

console.log(livros);