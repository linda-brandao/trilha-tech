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
// me retorna uma lista apenas com as chaves inicializadas
const chavesInicializadasDoObjeto = Object.keys(cliente);
console.log(chavesInicializadasDoObjeto);
if (!chavesInicializadasDoObjeto.includes("enderecos")) {
    console.log('Erro! Endereço não encontrado!');
}