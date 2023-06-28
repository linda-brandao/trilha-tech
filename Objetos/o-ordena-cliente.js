const clientes = require("./o-clientes.json")

function ordenaCliente (lista, propriedade) {
    const listaOrdenada = lista.sort( (a, b) => {
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        return 0;
    })
    return listaOrdenada;
}

const ordenacaoPorNome = ordenaCliente(clientes, "nome")

console.log(ordenacaoPorNome);