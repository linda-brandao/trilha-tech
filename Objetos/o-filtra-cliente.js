const clientes = require("./o-clientes.json")

function filtraEnderecoClienteSemComplemento (listaClientes) {
    return listaClientes.filter( (cliente) => cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
}

//hasOwnProperty -> vê se tem essa propriedade 

const filtrados = filtraEnderecoClienteSemComplemento(clientes)

console.log(filtrados);