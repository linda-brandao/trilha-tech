const informacoesCliente = {
    nome: 'Linda',
    idade: 22,
    cpf: '111.222.333-44',
    email: 'linda@dominio.com'
}

console.log(`O nome do cliente é ${informacoesCliente.nome} e sua idade é ${informacoesCliente.idade} anos.`)

console.log(`Seu CPF é ${informacoesCliente.cpf.substring(0, 3)}.`)