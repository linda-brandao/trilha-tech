const nomes = ['Maria', 'José', 'João'];

// forEach com uma função anônima (arrow function); 
nomes.forEach(function(nome) {
    console.log(nome);
})


//outra forma de fazer uma arrow function dentro do forEach
notas.forEach((nota) => somaDasNotas += nota);


// forEach com a função criada separadamente
function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);