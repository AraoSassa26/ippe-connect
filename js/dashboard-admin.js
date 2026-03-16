async function carregarEstatisticas(){

let {count:alunos}=await supabaseClient
.from("alunos")
.select("*",{count:"exact",head:true})

let {count:professores}=await supabaseClient
.from("professores")
.select("*",{count:"exact",head:true})

let {count:turmas}=await supabaseClient
.from("turmas")
.select("*",{count:"exact",head:true})

let {count:pendentes}=await supabaseClient
.from("pagamentos")
.select("*",{count:"exact",head:true})
.eq("status","pendente")


let {count:pagos}=await supabaseClient
.from("pagamentos")
.select("*",{count:"exact",head:true})
.eq("status","pago")



document.getElementById("totalAlunos").innerText=alunos
document.getElementById("totalProfessores").innerText=professores
document.getElementById("totalTurmas").innerText=turmas
document.getElementById("pagamentosPendentes").innerText=pendentes


criarGraficos(pendentes,pagos,alunos,professores)

}



function criarGraficos(pendentes,pagos,alunos,professores){

new Chart(document.getElementById("graficoPagamentos"),{

type:"pie",

data:{
labels:["Pendentes","Pagos"],
datasets:[{
data:[pendentes,pagos]
}]
}

})



new Chart(document.getElementById("graficoUsuarios"),{

type:"bar",

data:{
labels:["Alunos","Professores"],
datasets:[{
data:[alunos,professores]
}]
}

})

}


carregarEstatisticas()