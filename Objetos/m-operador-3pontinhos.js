const cliente = {
    nome: 'Linda',
    idade: 22,
    email: 'linda@dominio.com',
    telefone: ['92 111111111110','92 2222222222220'],
    enderecos:
    [
        {
            rua: 'Rua da Saudade',
            numero: 1234,
            apartamento: true,
            complemento: 'ap 1'
        }
    ]
}

console.log(cliente.enderecos[0])
console.log(...cliente.enderecos)

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para o número ${telefoneComercial}`)
    console.log(`Ligando para o número ${telefoneResidencial}`)
}

//ligaParaCliente(cliente.telefone[0], cliente.telefone[1])
ligaParaCliente(...cliente.telefone)

//atribuindo o valor da chave enderecos do objeto cliente para a chave endereco do objeto destinatario
const destinatario = {
    nome: cliente.nome,
    endereco: cliente.enderecos[0]
}

console.log(destinatario);

//atribuindo o valor da chave enderecos do objeto cliente para a chave endereco do objeto destinatario utilizando o operador de espalhamento
const destinatario2 = {
    nome: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(destinatario2);