
function buscaMenorValor(listaProdutos, posicaoInicial) {
    let menorValor = posicaoInicial;
    for (let posicaoAtual = posicaoInicial; posicaoAtual < listaProdutos.length; posicaoAtual++) {
        if (listaProdutos[posicaoAtual].preco < listaProdutos[menorValor].preco) {
            menorValor = posicaoAtual;
        }
    }
    return menorValor;
}

export default buscaMenorValor;