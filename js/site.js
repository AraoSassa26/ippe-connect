// Função para carregar cursos
async function carregarCursos() {
    try {
        const { data, error } = await supabaseClient
            .from('cursos')
            .select('*');
        
        if (error) throw error;
        
        const listaCursos = document.getElementById('listaCursos');
        listaCursos.innerHTML = '';
        
        if (!data || data.length === 0) {
            listaCursos.innerHTML = '<p class="text-center">Nenhum curso disponível</p>';
            return;
        }
        
        data.forEach(curso => {
            listaCursos.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${curso.nome}</h5>
                            <p class="card-text">${curso.descricao || 'Sem descrição'}</p>
                            <p class="card-text"><small>Professor: ${curso.professor || 'N/A'}</small></p>
                            <a href="pages/login.html" class="btn btn-primary btn-sm">Ver Detalhes</a>
                        </div>
                    </div>
                </div>
            `;
        });
        
    } catch (error) {
        console.error('Erro ao carregar cursos:', error);
        document.getElementById('listaCursos').innerHTML = '<p class="text-danger">Erro ao carregar cursos</p>';
    }
}

// Função para carregar notícias
async function carregarNoticias() {
    try {
        const { data, error } = await supabaseClient
            .from('noticias')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        const listaNoticias = document.getElementById('listaNoticias');
        listaNoticias.innerHTML = '';
        
        if (!data || data.length === 0) {
            listaNoticias.innerHTML = '<p class="text-center">Nenhuma notícia disponível</p>';
            return;
        }
        
        data.forEach(noticia => {
            const data_formatada = new Date(noticia.created_at).toLocaleDateString('pt-BR');
            listaNoticias.innerHTML += `
                <div class="col-md-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${noticia.titulo}</h5>
                            <p class="card-text">${noticia.conteudo}</p>
                            <small class="text-muted">Publicado em: ${data_formatada}</small>
                        </div>
                    </div>
                </div>
            `;
        });
        
    } catch (error) {
        console.error('Erro ao carregar notícias:', error);
        document.getElementById('listaNoticias').innerHTML = '<p class="text-danger">Erro ao carregar notícias</p>';
    }
}

// Carregar dados ao iniciar página
document.addEventListener('DOMContentLoaded', () => {
    carregarCursos();
    carregarNoticias();
});