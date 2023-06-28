const notas = [7, 7, 8, 9];

//clonando o array de notas e adicionando o número 10 ao array
//copia cada elemento do array, espalhando ele
const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);