function abrirModal() { document.getElementById("modalCurso").style.display = "block"; }
function fecharModal() { document.getElementById("modalCurso").style.display = "none"; }

async function carregarCursos() {
  const { data } = await supabaseClient.from("cursos").select("*").order("created_at", { ascending: false });
  const tbody = document.getElementById("tabelaCursos");
  tbody.innerHTML = "";
  data.forEach(curso => {
    tbody.innerHTML += `
      <tr>
        <td>${curso.nome}</td>
        <td>${curso.descricao || "-"}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="removerCurso('${curso.id}')">Excluir</button>
        </td>
      </tr>
    `;
  });
}

async function adicionarCurso() {
  const nome = document.getElementById("nomeCurso").value;
  const descricao = document.getElementById("descricaoCurso").value;
  await supabaseClient.from("cursos").insert([{ nome, descricao }]);
  carregarCursos();
  fecharModal();
}

async function removerCurso(id) {
  if(!confirm("Deseja realmente excluir este curso?")) return;
  await supabaseClient.from("cursos").delete().eq("id", id);
  carregarCursos();
}

carregarCursos();