function abrirModal(){
document.getElementById("modalPagamento").style.display="block"
}

function fecharModal(){
document.getElementById("modalPagamento").style.display="none"
}


async function salvarPagamento(){

let aluno_id=document.getElementById("alunoPagamento").value

let valor=document.getElementById("valorPagamento").value

let status=document.getElementById("statusPagamento").value

let data=document.getElementById("dataPagamento").value


await supabaseClient.from("pagamentos").insert([{

aluno_id,
valor,
status,
data

}])


carregarPagamentos()
fecharModal()

}



async function carregarPagamentos(){

let {data}=await supabaseClient

.from("pagamentos")

.select(`

id,
valor,
status,
data,

aluno:alunos(
usuarios(nome)
)

`)


let tabela=document.getElementById("tabelaPagamentos")

tabela.innerHTML=""

data.forEach(p=>{

tabela.innerHTML+=`

<tr>

<td>${p.aluno.usuarios.nome}</td>

<td>${p.valor}</td>

<td>${p.status}</td>

<td>${p.data}</td>

<td>

<button class="btn btn-danger btn-sm"

onclick="removerPagamento('${p.id}')">

Excluir

</button>

</td>

</tr>

`

})

}



async function removerPagamento(id){

if(!confirm("Excluir pagamento?")) return

await supabaseClient.from("pagamentos").delete().eq("id",id)

carregarPagamentos()

}


carregarPagamentos()