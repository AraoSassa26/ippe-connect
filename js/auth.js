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

async function verificarPerfil(){

const { data: { user } } = await supabaseClient.auth.getUser()

const { data } = await supabaseClient
.from("usuarios")
.select("role")
.eq("id", user.id)
.single()

if(data.role === "admin"){
window.location.href = "/pages/dashboard-admin.html"
}

if(data.role === "professor"){
window.location.href = "/pages/dashboard-professor.html"
}

if(data.role === "aluno"){
window.location.href = "/pages/dashboard-aluno.html"
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

}