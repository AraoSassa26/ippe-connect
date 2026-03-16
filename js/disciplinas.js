function abrirModal() { document.getElementById("modalDisciplina").style.display = "block"; }
function fecharModal() { document.getElementById("modalDisciplina").style.display = "none"; }

async function carregarCursos() {
  const { data } = await supabaseClient.from("cursos").select("*");
  const select = document.getElementById("cursoDisciplina");
  select.innerHTML = "";
  data.forEach(curso => {
    select.innerHTML += `<option value="${curso.id}">${curso.nome}</option>`;
  });
}

async function carregarDisciplinas() {
  const { data } = await supabaseClient
    .from("disciplinas")
    .select("id, nome, descricao, curso:cursos(nome)")
    .order("created_at", { ascending: false });

  const tbody = document.getElementById("tabelaDisciplinas");
  tbody.innerHTML = "";
  data.forEach(d => {
    tbody.innerHTML += `
      <tr>
        <td>${d.nome}</td>
        <td>${d.curso.nome}</td>
        <td>${d.descricao || "-"}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="removerDisciplina('${d.id}')">Excluir</button>
        </td>
      </tr>
    `;
  });
}

async function adicionarDisciplina() {
  const nome = document.getElementById("nomeDisciplina").value;
  const descricao = document.getElementById("descricaoDisciplina").value;
  const curso_id = document.getElementById("cursoDisciplina").value;
  await supabaseClient.from("disciplinas").insert([{ nome, descricao, curso_id }]);
  carregarDisciplinas();
  fecharModal();
}

async function removerDisciplina(id) {
  if(!confirm("Deseja realmente excluir esta disciplina?")) return;
  await supabaseClient.from("disciplinas").delete().eq("id", id);
  carregarDisciplinas();
}

carregarCursos();
carregarDisciplinas();