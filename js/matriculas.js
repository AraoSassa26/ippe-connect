function abrirModal() { document.getElementById("modalMatricula").style.display = "block"; }
function fecharModal() { document.getElementById("modalMatricula").style.display = "none"; }

async function carregarAlunos() {
  const { data } = await supabaseClient.from("alunos").select("id, usuario:usuarios(nome)");
  const select = document.getElementById("alunoMatricula");
  select.innerHTML = "";
  data.forEach(a => { select.innerHTML += `<option value="${a.id}">${a.usuario.nome}</option>`; });
}

async function carregarTurmas() {
  const { data } = await supabaseClient.from("turmas").select("id, nome");
  const select = document.getElementById("turmaMatricula");
  select.innerHTML = "";
  data.forEach(t => { select.innerHTML += `<option value="${t.id}">${t.nome}</option>`; });
}

async function carregarMatriculas() {
  const { data } = await supabaseClient
    .from("matriculas")
    .select("id, aluno:alunos(usuario:usuarios(nome)), turma:turmas(nome), data, status")
    .order("created_at", { ascending: false });

  const tbody = document.getElementById("tabelaMatriculas");
  tbody.innerHTML = "";
  data.forEach(m => {
    tbody.innerHTML += `
      <tr>
        <td>${m.aluno.usuario.nome}</td>
        <td>${m.turma.nome}</td>
        <td>${m.data}</td>
        <td>${m.status}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="removerMatricula('${m.id}')">Excluir</button>
        </td>
      </tr>
    `;
  });
}

async function adicionarMatricula() {
  const aluno_id = document.getElementById("alunoMatricula").value;
  const turma_id = document.getElementById("turmaMatricula").value;
  const data = document.getElementById("dataMatricula").value;
  const status = document.getElementById("statusMatricula").value;

  await supabaseClient.from("matriculas").insert([{ aluno_id, turma_id, data, status }]);
  carregarMatriculas();
  fecharModal();
}

async function removerMatricula(id) {
  if(!confirm("Deseja realmente excluir esta matrícula?")) return;
  await supabaseClient.from("matriculas").delete().eq("id", id);
  carregarMatriculas();
}

// Inicialização
carregarAlunos();
carregarTurmas();
carregarMatriculas();