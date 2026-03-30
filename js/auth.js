async function login() {

const email = document.getElementById("email").value
const password = document.getElementById("senha").value

const { data, error } = await supabaseClient.auth.signInWithPassword({
email: email,
password: password
})

if (error) {
alert("Erro no login")
return
}

verificarPerfil()

}

async function verificarUsuario(){

let user = await supabaseClient.auth.getUser()

let { data } = await supabaseClient
.from("usuarios")
.select("tipo")
.eq("id", user.data.user.id)
.single()

if(data.tipo === "admin"){
window.location.href = "pages/admin-dashboard.html"
}

if(data.tipo === "professor"){
window.location.href = "pages/professor-dashboard.html"
}

if(data.tipo === "aluno"){
window.location.href = "pages/aluno-dashboard.html"
}

}


async function recuperarSenha(){

let email = prompt("Digite seu email")

if(!email) return

const { error } = await supabaseClient.auth.resetPasswordForEmail(email,{
redirectTo: "http://localhost:5500/reset.html"
})

if(error){
alert("Erro ao enviar email")
}else{
alert("Email de recuperação enviado")
}

}



