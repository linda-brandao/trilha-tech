const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

//por convenção, quando um parâmetro não está sendo usado em JS, podemos apenas colocar como nome do parâmetro um '_';
const reprovados = alunos.filter((_, indice) => medias[indice] < 7)

console.log(reprovados);