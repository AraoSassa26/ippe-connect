function abrirModal(){
document.getElementById("modalNotas").style.display="block"
}

function fecharModal(){
document.getElementById("modalNotas").style.display="none"
}


function calcularNotas(mac,npp,npt,pg){

let CT1=(mac+npp+npt)/3

let CT2=(mac+CT1)/2

let CT3=(mac+npp)/2

let CF=(CT3+CT2)/2

let CA

if(pg){
CA=(CF*0.6)+(pg*0.4)
}else{
CA=CF
}

return {CT1,CT2,CT3,CF,CA}

}



async function salvarNota(){

let aluno_id=document.getElementById("alunoNota").value
let disciplina_id=document.getElementById("disciplinaNota").value

let mac=parseFloat(document.getElementById("mac").value)
let npp=parseFloat(document.getElementById("npp").value)
let npt=parseFloat(document.getElementById("npt").value)

let pg=parseFloat(document.getElementById("pg").value)

let resultado=calcularNotas(mac,npp,npt,pg)

await supabaseClient.from("notas").insert([{

aluno_id,
disciplina_id,

mac,
npp,
npt,

ct1:resultado.CT1,
ct2:resultado.CT2,
ct3:resultado.CT3,

cf:resultado.CF,
ca:resultado.CA

}])

carregarNotas()
fecharModal()

}



async function carregarNotas(){

let {data}=await supabaseClient

.from("notas")

.select(`

id,
mac,npp,npt,
ct1,ct2,ct3,cf,ca,

aluno:alunos(
usuarios(nome)
),

disciplina:disciplinas(nome)

`)


let tabela=document.getElementById("tabelaNotas")

tabela.innerHTML=""

data.forEach(n=>{

tabela.innerHTML+=`

<tr>

<td>${n.aluno.usuarios.nome}</td>
<td>${n.disciplina.nome}</td>

<td>${n.mac}</td>
<td>${n.npp}</td>
<td>${n.npt}</td>

<td>${n.ct1.toFixed(2)}</td>
<td>${n.ct2.toFixed(2)}</td>
<td>${n.ct3.toFixed(2)}</td>

<td>${n.cf.toFixed(2)}</td>
<td>${n.ca.toFixed(2)}</td>

<td>

<button class="btn btn-danger btn-sm" onclick="removerNota('${n.id}')">

Excluir

</button>

</td>

</tr>

`

})

}



async function removerNota(id){

if(!confirm("Excluir nota?")) return

await supabaseClient.from("notas").delete().eq("id",id)

carregarNotas()

}



carregarNotas()