const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];
const listaDeAlunosEMedias = [alunos, medias];

function procurandoAlunoLista(aluno) {
    const [alunos, medias] = listaDeAlunosEMedias;

    if (alunos.includes(aluno)) {
        console.log(`Aluno ENCONTRADO!`);
        
        const indiceAluno = alunos.indexOf(aluno);
        const mediaAluno = medias[indiceAluno];

        console.log(`${aluno} tem a média ${mediaAluno}!`);
    } else {
        console.log(`Aluno NÃO ENCONTRADO!`);
    }
}

procurandoAlunoLista("Ana");