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
    ]
}

cliente.enderecos.push(
    {
        rua: 'Rua Amado Batista',
        numero: 56,
        apartamento: false
    }
)

const listaApenasApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true);

console.log(cliente.enderecos);
console.log("------------------------");
console.log(listaApenasApartamentos);