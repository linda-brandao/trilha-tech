const cliente = {
    nome: 'Linda',
    idade: 22,
    email: 'linda@dominio.com',
    telefone: ['92 111111111110','92 2222222222220'],
    enderecos:
    {
        rua: 'Rua da Saudade',
        numero: 1234,
        apartamento: true,
        complemento: 'ap 1'
    }
}

for (let chave in cliente) {
    if (chave === 'enderecos') {
        console.log('Endereço:')
        for (let endereco in cliente[chave]) {
            console.log(`A chave ${endereco} tem o valor ${cliente[chave][endereco]}`)
        }
    } else {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
}