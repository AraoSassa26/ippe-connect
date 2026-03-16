async function carregarCursos() {
  const { data } = await supabaseClient.from("cursos").select("*");
  const select = document.getElementById("cursoAluno");
  select.innerHTML = "";
  data.forEach(curso => {
    select.innerHTML += `<option value="${curso.id}">${curso.nome}</option>`;
  });
}

async function carregarAlunos() {
  const { data } = await supabaseClient
    .from("alunos")
    .select("id, usuario_id, usuario:usuarios(nome,email), curso_id, curso:cursos(nome)")
    .order("created_at", { ascending: false });

  const tbody = document.getElementById("tabelaAlunos");
  tbody.innerHTML = "";
  data.forEach(aluno => {
    tbody.innerHTML += `
      <tr>
        <td>${aluno.usuario.nome}</td>
        <td>${aluno.usuario.email}</td>
        <td>${aluno.curso.nome}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="removerAluno('${aluno.id}')">Excluir</button>
        </td>
      </tr>
    `;
  });
}

function abrirModal() { document.getElementById("modalAluno").style.display = "block"; }
function fecharModal() { document.getElementById("modalAluno").style.display = "none"; }

async function adicionarAluno() {
  const nome = document.getElementById("nomeAluno").value;
  const email = document.getElementById("emailAluno").value;
  const curso_id = document.getElementById("cursoAluno").value;

  const { data: user, error } = await supabaseClient.auth.admin.createUser({
    email, password: "12345678"
  });
  if(error) { alert(error.message); return; }

  await supabaseClient.from("usuarios").insert([
    { id: user.user.id, nome, email, role: "aluno" }
  ]);

  await supabaseClient.from("alunos").insert([
    { usuario_id: user.user.id, curso_id }
  ]);

  carregarAlunos();
  fecharModal();
}

async function removerAluno(id) {
  if(!confirm("Deseja realmente excluir este aluno?")) return;
  const { data: aluno } = await supabaseClient.from("alunos").select("usuario_id").eq("id", id).single();
  await supabaseClient.from("alunos").delete().eq("id", id);
  await supabaseClient.from("usuarios").delete().eq("id", aluno.usuario_id);
  carregarAlunos();
}
async function gerarBoletimPDF(){

const { jsPDF } = window.jspdf

let pdf = new jsPDF()

// carregar imagens
const logo = "assets/logo.png"
const assinatura = "assets/assinatura.png"

// dados do usuário
let user = await supabaseClient.auth.getUser()

// buscar aluno
let { data: aluno } = await supabaseClient
.from("alunos")
.select(`
id,
numero_matricula,
usuario:usuarios(nome)
`)
.eq("usuario_id", user.data.user.id)
.single()

// buscar notas
let { data: notas } = await supabaseClient
.from("notas")
.select(`
ct1,ct2,ct3,cf,ca,
disciplina:disciplinas(nome)
`)
.eq("aluno_id", aluno.id)


// LOGO
pdf.addImage(logo,"PNG",10,10,30,30)

pdf.setFontSize(16)
pdf.text("INSTITUTO POLITÉCNICO PRIVADO EPATULUKO",50,20)

pdf.setFontSize(12)
pdf.text("BOLETIM ESCOLAR",90,30)


// dados aluno
pdf.text("Aluno: "+aluno.usuario.nome,20,50)
pdf.text("Matrícula: "+aluno.numero_matricula,20,60)
pdf.text("Ano Letivo: 2026",20,70)


// tabela
let y=90

pdf.text("Disciplina",20,y)
pdf.text("CT1",100,y)
pdf.text("CT2",115,y)
pdf.text("CT3",130,y)
pdf.text("CF",145,y)
pdf.text("CA",160,y)

y+=10

notas.forEach(n=>{

pdf.text(n.disciplina.nome,20,y)

pdf.text(String(n.ct1),100,y)
pdf.text(String(n.ct2),115,y)
pdf.text(String(n.ct3),130,y)

pdf.text(String(n.cf),145,y)
pdf.text(String(n.ca),160,y)

y+=10

})


// assinatura
pdf.addImage(assinatura,"PNG",140,250,40,20)

pdf.text("Direção Acadêmica",140,270)


// salvar
pdf.save("boletim-oficial.pdf")

}

carregarCursos();
carregarAlunos();