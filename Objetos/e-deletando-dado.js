const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

console.log(objPersonagem)

//deletando chave e valor de um objeto através do operador .
delete objPersonagem.aliado
//deletando chave e valor de um objeto através do uso de colchete [""]
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

console.log(objPersonagem)