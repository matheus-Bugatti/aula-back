class AlunoView {
    constructor(table) {
        this.tableList = table
        this.tableHeader = this.tableList.querySelector('thead')
        this.tableBody = this.tableList.querySelector('tbody')
        this.materias = ["backend_1", "frontend_2", "bancodados", "ferramentas"]
        this.renderHeader()
    }
    renderHeader() {
        const htmlHeader = document.createElement('tr')
        htmlHeader.innerHTML = '<td>Nome</td>'
        const htmlHeaderMaterias = this.materias.map(materia => {
            return `<td>${materia}</td>`
        }).join('')
        htmlHeader.innerHTML += htmlHeaderMaterias
        this.tableHeader.appendChild(htmlHeader)
    }
    render() {
        document.querySelector(`[data-table-alunos] tbody`).innerHTML = ''
        alunos.forEach(aluno => {
            let htmlRow = document.createElement('tr')
            htmlRow.innerHTML = `<td>${aluno.nome}</td>`
            let htmlRowMaterias = Object.keys(aluno.media).map(materia => {
                return `<td>${aluno.media[materia]}</td>`
            }).join('')
            htmlRow.innerHTML += htmlRowMaterias
            document.querySelector(`[data-table-alunos] tbody`).appendChild(htmlRow)
        })
    }
}