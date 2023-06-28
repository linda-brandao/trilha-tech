const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

//O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro
const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"
   
console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento