const notas = [10, 9.5, 8, 7, 6];

//o map é muito apropriado para reescrever arrays em uma cópia! ELE NÃO ALTERA O ARRAY ORIGINAL!

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);