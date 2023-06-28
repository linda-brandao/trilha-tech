const informacoesCliente = {
    nome: 'Linda',
    idade: 22,
    cpf: '111.222.333-44',
    email: 'linda@dominio.com'
}

//digamos que eu não saiba quais são as os valores das chaves do meu objeto
const chaves = ['nome', 'idade', 'cpf', 'email']
    
chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem o valor de ${informacoesCliente[chave]}`);
})