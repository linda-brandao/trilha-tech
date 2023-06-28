//                   0   1   2   3   4   5
const precosLivro = [25, 15, 30, 50, 45, 20];

let menorValor = 0;

function buscaMenorValor (listaLivros) {
    for (let posicaoAtual = 0; posicaoAtual < precosLivro.length; posicaoAtual++) {
        if (listaLivros[posicaoAtual] < listaLivros[menorValor]) {
            menorValor = listaLivros[posicaoAtual];
        }
    }
}

buscaMenorValor (precosLivro);

console.log(`O menor valor encontrado é R$ ${menorValor}.`);