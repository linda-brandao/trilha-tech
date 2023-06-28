export function trocaPosicao(lista, posicao1, posicao2) {
    let itemAnalise = lista[posicao1];
    let itemAnterior = lista[posicao2];

    lista[posicao1] = itemAnterior
    lista[posicao2] = itemAnalise
}