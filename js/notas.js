// Função para mostrar mensagens ao usuário
function showMessage(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.insertBefore(alertDiv, document.body.firstChild);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 4000);
}

function abrirModal(){
    document.getElementById("modalNotas").style.display="block"
}

function fecharModal(){
    document.getElementById("modalNotas").style.display="none"
}

// Função de validação
function validarNota(valor) {
    if (valor === '' || valor === null) return false;
    const num = parseFloat(valor);
    if (isNaN(num) || num < 0 || num > 20) return false;
    return true;
}

function calcularNotas(mac, npp, npt, pg) {
    let CT1 = (mac + npp + npt) / 3
    let CT2 = (mac + CT1) / 2
    let CT3 = (mac + npp) / 2
    let CF = (CT3 + CT2) / 2
    
    let CA;
    if (pg && pg > 0) {
        CA = (CF * 0.6) + (pg * 0.4)
    } else {
        CA = CF
    }
    
    return { CT1, CT2, CT3, CF, CA }
}

async function salvarNota() {
    try {
        let aluno_id = document.getElementById("alunoNota").value
        let disciplina_id = document.getElementById("disciplinaNota").value
        
        let mac = document.getElementById("mac").value
        let npp = document.getElementById("npp").value
        let npt = document.getElementById("npt").value
        let pg = document.getElementById("pg").value
        
        // Validações
        if (!aluno_id || !disciplina_id) {
            showMessage("⚠️ Selecione aluno e disciplina!", "warning");
            return;
        }
        
        if (!validarNota(mac)) {
            showMessage("❌ MAC deve ser um número entre 0 e 20", "danger");
            return;
        }
        
        if (!validarNota(npp)) {
            showMessage("❌ NPP deve ser um número entre 0 e 20", "danger");
            return;
        }
        
        if (!validarNota(npt)) {
            showMessage("❌ NPT deve ser um número entre 0 e 20", "danger");
            return;
        }
        
        if (pg && !validarNota(pg)) {
            showMessage("❌ PG deve ser um número entre 0 e 20", "danger");
            return;
        }
        
        mac = parseFloat(mac);
        npp = parseFloat(npp);
        npt = parseFloat(npt);
        pg = pg ? parseFloat(pg) : null;
        
        let resultado = calcularNotas(mac, npp, npt, pg)
        
        const { error } = await supabaseClient.from("notas").insert([{
            aluno_id,
            disciplina_id,
            mac,
            npp,
            npt,
            ct1: resultado.CT1,
            ct2: resultado.CT2,
            ct3: resultado.CT3,
            cf: resultado.CF,
            ca: resultado.CA
        }])
        
        if (error) throw error;
        
        showMessage("✅ Nota salva com sucesso!", "success");
        document.getElementById("alunoNota").value = "";
        document.getElementById("disciplinaNota").value = "";
        document.getElementById("mac").value = "";
        document.getElementById("npp").value = "";
        document.getElementById("npt").value = "";
        document.getElementById("pg").value = "";
        
        carregarNotas()
        fecharModal()
        
    } catch (error) {
        console.error("Erro ao salvar nota:", error);
        showMessage("❌ Erro ao salvar nota: " + error.message, "danger");
    }
}

async function carregarNotas() {
    try {
        let { data, error } = await supabaseClient
            .from("notas")
            .select(`
                id,
                mac,npp,npt,
                ct1,ct2,ct3,cf,ca,
                aluno:alunos(
                    usuarios(nome)
                ),
                disciplina:disciplinas(nome)
            `)
        
        if (error) throw error;
        
        let tabela = document.getElementById("tabelaNotas")
        tabela.innerHTML = ""
        
        if (!data || data.length === 0) {
            tabela.innerHTML = "<tr><td colspan='11' class='text-center'>Nenhuma nota registrada</td></tr>";
            return;
        }
        
        data.forEach(n => {
            tabela.innerHTML += `
                <tr>
                    <td>${n.aluno?.usuarios?.nome || 'N/A'}</td>
                    <td>${n.disciplina?.nome || 'N/A'}</td>
                    <td>${n.mac}</td>
                    <td>${n.npp}</td>
                    <td>${n.npt}</td>
                    <td>${n.ct1.toFixed(2)}</td>
                    <td>${n.ct2.toFixed(2)}</td>
                    <td>${n.ct3.toFixed(2)}</td>
                    <td>${n.cf.toFixed(2)}</td>
                    <td>${n.ca.toFixed(2)}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="removerNota('${n.id}')">
                            Excluir
                        </button>
                    </td>
                </tr>
            `
        })
        
    } catch (error) {
        console.error("Erro ao carregar notas:", error);
        showMessage("❌ Erro ao carregar notas: " + error.message, "danger");
    }
}

async function removerNota(id) {
    try {
        if (!confirm("Deseja realmente excluir esta nota?")) return
        
        const { error } = await supabaseClient.from("notas").delete().eq("id", id)
        
        if (error) throw error;
        
        showMessage("✅ Nota excluída com sucesso!", "success");
        carregarNotas()
        
    } catch (error) {
        console.error("Erro ao remover nota:", error);
        showMessage("❌ Erro ao excluir nota: " + error.message, "danger");
    }
}

// Carregar notas ao iniciar
carregarNotas()