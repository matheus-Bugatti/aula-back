const alunos = [
    {
        nome: "chico melato",
        notas: {
            backend_1: [1, 1, 2, 2],
            frontend_2: [2, 2, 2, 2],
            bancodados: [2, 2, 3, 3],
            ferramentas: [3, 3, 3, 3],
        },
    },
    {
        nome: "talita lima",
        notas: {
            backend_1: [4, 4, 4, 4],
            frontend_2: [4, 4, 5, 5],
            bancodados: [5, 5, 6, 6],
            ferramentas: [7, 7, 8, 9],
        },
    },
];

const alunoService = new AlunoService()

alunos.forEach(aluno => {
    alunoService.add(new AlunoModel(aluno))
});
//


// Inserir no tbody da tabela a lista de alunos e suas médias


render();

// Inserir aluno
// Padrão do HTML, o form quando tem um botão ele automaticamente quando clicado gera o submit
document.querySelector('form').addEventListener('submit', function (event) {
    //Por padrão quando ocorre um submit, ele atualiza a página
    event.preventDefault()
    //Pegar o valor de um elemento em especifico, o que foi escrito como nome do aluno
    const nome = document.getElementById('first_name').value
    const newAluno = {
        _id: 0,
        nome,
        notas: {
            backend_1: [6, 6, 6, 6],
            frontend_2: [7, 7, 7, 7],
            bancodados: [6, 6, 6, 6],
            ferramentas: [7, 7, 7, 7],
        }
    }
    newAluno.media = {}
    for (let materia in newAluno.notas) {
        newAluno.media[materia] = average(...newAluno.notas[materia])
    }
    alunos.push(newAluno)
    render()
})


