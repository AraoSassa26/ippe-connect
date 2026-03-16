async function carregarCursos(){

let {data}=await supabaseClient

.from("cursos")

.select("*")


let container=document.getElementById("listaCursos")

container.innerHTML=""

data.forEach(c=>{

container.innerHTML+=`

<div class="col-md-4">

<div class="card mb-4">

<img src="images/curso1.jpg" class="card-img-top">

<div class="card-body">

<h5>${c.nome}</h5>

<p>${c.descricao}</p>

</div>

</div>

</div>

`

})

}



async function carregarNoticias(){

let {data}=await supabaseClient

.from("publicacoes")

.select("*")

.order("created_at",{ascending:false})


let container=document.getElementById("listaNoticias")

container.innerHTML=""


data.forEach(n=>{

container.innerHTML+=`

<div class="col-md-4">

<div class="card mb-4">

<div class="card-body">

<h5>${n.titulo}</h5>

<p>${n.conteudo}</p>

</div>

</div>

</div>

`

})

}


carregarCursos()
carregarNoticias()