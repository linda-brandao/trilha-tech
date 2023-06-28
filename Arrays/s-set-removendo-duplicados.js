const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João']

// const meuSet = new Set(nomes);
// //transformando em um array novamente
// const nomesAtualizados = [...meuSet];

const nomesAtualizados = [...new Set(nomes)]

// console.log(meuSet);
console.log(nomesAtualizados);