async function carregarTurmasProfessor(){

let user = await supabaseClient.auth.getUser()

let {data} = await supabaseClient

.from("turma_disciplinas")

.select(`

id,
turma:turmas(nome),
disciplina:disciplinas(nome)

`)

.eq("professor_id", user.data.user.id)



let tabela = document.getElementById("tabelaTurmasProfessor")

tabela.innerHTML = ""


data.forEach(t => {

tabela.innerHTML += `

<tr>

<td>${t.turma.nome}</td>

<td>${t.disciplina.nome}</td>

<td>

<button class="btn btn-primary btn-sm"
onclick="verAlunos('${t.id}')">

Ver alunos

</button>

</td>

</tr>

`

})

}



async function verAlunos(turmaDisciplinaId){

let {data} = await supabaseClient

.from("matriculas")

.select(`

id,
aluno:alunos(
usuarios(nome)
)

`)

.eq("turma_disciplina_id", turmaDisciplinaId)



let tabela = document.getElementById("tabelaAlunosTurma")

tabela.innerHTML = ""


data.forEach(a => {

tabela.innerHTML += `

<tr>

<td>${a.aluno.usuarios.nome}</td>

<td>

<button class="btn btn-success btn-sm">

Lançar Nota

</button>

<button class="btn btn-warning btn-sm">

Falta

</button>

</td>

</tr>

`

})

}



async function logout(){

await supabaseClient.auth.signOut()

window.location.href="../login.html"

}



carregarTurmasProfessor()