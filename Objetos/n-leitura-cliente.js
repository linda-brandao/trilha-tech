// importando um arquivo json externo e atribuindo ele em formato de objeto dentro de uma variável
const dadosCliente = require("./n-cliente.json")

console.log(dadosCliente);
console.log(typeof dadosCliente);

console.log("----------------------------------------------------");

// pegando um arquivo em json/object e transformando ele em uma string
const jsonParaString = JSON.stringify(dadosCliente)

console.log(jsonParaString);
console.log(typeof jsonParaString);

console.log("----------------------------------------------------");

// pegando uma string e tranformando ela em um json/object
// pega uma string que tem um json dentro e converte para json
const stringParaJson = JSON.parse(jsonParaString)

console.log(stringParaJson);
console.log(typeof stringParaJson);