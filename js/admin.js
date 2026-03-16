async function carregarDashboard(){

const { count: alunos } =
await supabaseClient
.from("alunos")
.select("*",{count:"exact"})

const { count: professores } =
await supabaseClient
.from("professores")
.select("*",{count:"exact"})

const { count: turmas } =
await supabaseClient
.from("turmas")
.select("*",{count:"exact"})

document.getElementById("totalAlunos").innerText = alunos
document.getElementById("totalProfessores").innerText = professores
document.getElementById("totalTurmas").innerText = turmas

}

carregarDashboard()