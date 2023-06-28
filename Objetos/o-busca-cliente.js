const clientes = require("./o-clientes.json")

function buscaCliente (lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor))
}

const clienteEncontrado = buscaCliente(clientes, "nome", "Izaak")
const clienteEncontrado2 = buscaCliente(clientes, "telefone", "9916828153")


console.log(clientes);
// console.log(clienteEncontrado);
// console.log(clienteEncontrado2);
//console.log(clientes[19]['telefone'][1]);