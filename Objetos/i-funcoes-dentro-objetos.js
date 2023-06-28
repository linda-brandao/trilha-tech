const cliente = {
    nome: 'Linda',
    idade: 22,
    email: 'linda@dominio.com',
    telefone: ['92 111111111110','92 2222222222220'],
    enderecos: [
        {
        rua: 'Rua da Saudade',
        numero: 1234,
        apartamento: true,
        complemento: 'ap 1'
        }
    ],
    saldo: 200,
    efetuaPagamento: function (valorDaCompra) {
        if (valorDaCompra > this.saldo) {
            console.log('Saldo Insuficiente!');
        } else {
            this.saldo -= valorDaCompra;
            console.log(`Pagamento efetuado. Seu saldo atual é R$ ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(25);