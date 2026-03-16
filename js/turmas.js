//////////////////////////////
// Funções de Modal
//////////////////////////////
function abrirModal() {
  document.getElementById("modalTurma").style.display = "block";
}

function fecharModal() {
  document.getElementById("modalTurma").style.display = "none";
}

//////////////////////////////
// Carregar Cursos no Select
//////////////////////////////
async function carregarCursos() {
  const { data: cursos, error } = await supabaseClient
    .from("cursos")
    .select("*")
    .order("nome", { ascending: true });

  if (error) {
    console.error("Erro ao carregar cursos:", error);
    return;
  }

  const select = document.getElementById("cursoTurma");
  select.innerHTML = "";
  cursos.forEach(curso => {
    select.innerHTML += `<option value="${curso.id}">${curso.nome}</option>`;
  });
}

//////////////////////////////
// Carregar Turmas na Tabela
//////////////////////////////
async function carregarTurmas() {
  const { data: turmas, error } = await supabaseClient
    .from("turmas")
    .select("id, nome, ano, curso:cursos(nome)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao carregar turmas:", error);
    return;
  }

  const tbody = document.getElementById("tabelaTurmas");
  tbody.innerHTML = "";

  turmas.forEach(turma => {
    tbody.innerHTML += `
      <tr>
        <td>${turma.nome}</td>
        <td>${turma.ano}</td>
        <td>${turma.curso.nome}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="removerTurma('${turma.id}')">Excluir</button>
        </td>
      </tr>
    `;
  });
}

//////////////////////////////
// Adicionar Turma
//////////////////////////////
async function adicionarTurma() {
  const nome = document.getElementById("nomeTurma").value.trim();
  const ano = document.getElementById("anoTurma").value;
  const curso_id = document.getElementById("cursoTurma").value;

  if (!nome || !ano || !curso_id) {
    alert("Preencha todos os campos!");
    return;
  }

  const { error } = await supabaseClient
    .from("turmas")
    .insert([{ nome, ano, curso_id }]);

  if (error) {
    console.error("Erro ao adicionar turma:", error);
    alert("Erro ao adicionar turma. Veja console.");
    return;
  }

  carregarTurmas();
  fecharModal();
}

//////////////////////////////
// Remover Turma
//////////////////////////////
async function removerTurma(id) {
  if (!confirm("Deseja realmente excluir esta turma?")) return;

  const { error } = await supabaseClient
    .from("turmas")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Erro ao remover turma:", error);
    alert("Erro ao remover turma. Veja console.");
    return;
  }

  carregarTurmas();
}

//////////////////////////////
// Inicialização
//////////////////////////////
carregarCursos();
carregarTurmas();