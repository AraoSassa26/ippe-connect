// ========== MOCK DATA - Sistema completo simulado ==========

const MockData = {
    alunos: [
        { id: 1, nome: 'João Silva', email: 'joao@ippe.ao', turma: 'IG-10-A', ano: '10º', telemovel: '923123456', data_inscricao: '2023-09-01', status: 'Ativo', media: 15.5 },
        { id: 2, nome: 'Maria Santos', email: 'maria@ippe.ao', turma: 'IG-10-A', ano: '10º', telemovel: '923234567', data_inscricao: '2023-09-01', status: 'Ativo', media: 17.2 },
        { id: 3, nome: 'Pedro Costa', email: 'pedro@ippe.ao', turma: 'IG-11-B', ano: '11º', telemovel: '923345678', data_inscricao: '2023-09-02', status: 'Ativo', media: 14.8 },
        { id: 4, nome: 'Ana Rodrigues', email: 'ana@ippe.ao', turma: 'IG-10-A', ano: '10º', telemovel: '923456789', data_inscricao: '2023-09-01', status: 'Ativo', media: 16.3 },
        { id: 5, nome: 'Carlos Neves', email: 'carlos.n@ippe.ao', turma: 'IG-11-C', ano: '11º', telemovel: '923567890', data_inscricao: '2023-09-03', status: 'Inativo', media: 12.1 }
    ],
    professores: [
        { id: 1, nome: 'Dr. Carlos Silva', email: 'professor@ippe.ao', especialidade: 'Matemática', departamento: 'Ciências Exactas', telemovel: '912123456', data_admissao: '2020-01-15', status: 'Ativo' },
        { id: 2, nome: 'Eng. Sofia Martins', email: 'sofia@ippe.ao', especialidade: 'Programação', departamento: 'Informática', telemovel: '912234567', data_admissao: '2021-08-10', status: 'Ativo' },
        { id: 3, nome: 'Dr. João Ferreira', email: 'joao.ferreira@ippe.ao', especialidade: 'Física', departamento: 'Ciências Exactas', telemovel: '912345678', data_admissao: '2019-03-20', status: 'Ativo' },
        { id: 4, nome: 'Dra. Marta Oliveira', email: 'marta@ippe.ao', especialidade: 'Português', departamento: 'Humanidades', telemovel: '912456789', data_admissao: '2022-02-01', status: 'Ativo' }
    ],
    cursos: [
        { id: 1, nome: 'Técnico de Informática', descricao: 'Formação técnica em Informática', duracao: '2 anos', creditos: 120, coordenador: 'Dr. Carlos Silva', status: 'Ativo' },
        { id: 2, nome: 'Técnico Comercial', descricao: 'Formação em Gestão Comercial', duracao: '2 anos', creditos: 120, coordenador: 'Dra. Marta Oliveira', status: 'Ativo' },
        { id: 3, nome: 'Contabilidade', descricao: 'Formação em Contabilidade', duracao: '2 anos', creditos: 120, coordenador: 'Eng. Sofia Martins', status: 'Ativo' }
    ],
    disciplinas: [
        { id: 1, nome: 'Programação I', codigo: 'PROG101', docente: 'Eng. Sofia Martins', turma: 'IG-10-A', periodo: '1º Semestre', creditos: 6 },
        { id: 2, nome: 'Matemática I', codigo: 'MAT101', docente: 'Dr. Carlos Silva', turma: 'IG-10-A', periodo: '1º Semestre', creditos: 6 },
        { id: 3, nome: 'Física Aplicada', codigo: 'FIS101', docente: 'Dr. João Ferreira', turma: 'IG-11-B', periodo: '1º Semestre', creditos: 6 },
        { id: 4, nome: 'Português Aplicado', codigo: 'PORT101', docente: 'Dra. Marta Oliveira', turma: 'IG-10-A', periodo: '2º Semestre', creditos: 3 }
    ],
    turmas: [
        { id: 1, nome: 'IG-10-A', nivel: '10º', turno: 'Manhã', capacidade: 35, alunos_inscritos: 28, sala: 'Sala 101', coordenador: 'Dr. Carlos Silva' },
        { id: 2, nome: 'IG-11-B', nivel: '11º', turno: 'Tarde', capacidade: 30, alunos_inscritos: 25, sala: 'Sala 202', coordenador: 'Eng. Sofia Martins' },
        { id: 3, nome: 'IG-11-C', nivel: '11º', turno: 'Noite', capacidade: 25, alunos_inscritos: 20, sala: 'Sala 301', coordenador: 'Dr. João Ferreira' }
    ],
    notas: [
        { id: 1, aluno_id: 1, aluno_nome: 'João Silva', disciplina: 'Programação I', nota_parcial: 15, nota_final: 16, data: '2024-05-10', periodo: '1º Semestre', status: 'Aprovado' },
        { id: 2, aluno_id: 1, aluno_nome: 'João Silva', disciplina: 'Matemática I', nota_parcial: 14, nota_final: 15, data: '2024-05-12', periodo: '1º Semestre', status: 'Aprovado' },
        { id: 3, aluno_id: 2, aluno_nome: 'Maria Santos', disciplina: 'Programação I', nota_parcial: 18, nota_final: 18, data: '2024-05-10', periodo: '1º Semestre', status: 'Aprovado' },
        { id: 4, aluno_id: 3, aluno_nome: 'Pedro Costa', disciplina: 'Física Aplicada', nota_parcial: 13, nota_final: 14, data: '2024-05-15', periodo: '1º Semestre', status: 'Aprovado' }
    ],
    matriculas: [
        { id: 1, aluno_id: 1, aluno_nome: 'João Silva', turma_id: 1, turma_nome: 'IG-10-A', data_matricula: '2023-09-01', status: 'Ativa', mes_pagamento: 'Pago' },
        { id: 2, aluno_id: 2, aluno_nome: 'Maria Santos', turma_id: 1, turma_nome: 'IG-10-A', data_matricula: '2023-09-01', status: 'Ativa', mes_pagamento: 'Pago' },
        { id: 3, aluno_id: 3, aluno_nome: 'Pedro Costa', turma_id: 2, turma_nome: 'IG-11-B', data_matricula: '2023-09-02', status: 'Ativa', mes_pagamento: 'Pendente' }
    ],
    publicacoes: [
        { id: 1, titulo: 'Bem-vindo ao IPPE CONNECT', conteudo: 'Plataforma escolar moderna e profissional', autor: 'Admin', data: '2024-05-18', categoria: 'Notícia', views: 234, likes: 45 },
        { id: 2, titulo: 'Cronograma de Avaliações', conteudo: 'As avaliações do 2º semestre começam em Junho', autor: 'Dr. Carlos Silva', data: '2024-05-17', categoria: 'Aviso', views: 512, likes: 89 },
        { id: 3, titulo: 'Resultado das Olimpíadas Escolares', conteudo: 'Alunos ganham medalhas na competição regional', autor: 'Administrador', data: '2024-05-16', categoria: 'Notícia', views: 678, likes: 156 }
    ],
    utilizadores: [
        { id: 1, email: 'admin@ippe.ao', nome: 'Administrador', tipo: 'admin', status: 'Ativo', ultimo_acesso: '2024-05-18 14:30' },
        { id: 2, email: 'professor@ippe.ao', nome: 'Dr. Carlos Silva', tipo: 'professor', status: 'Ativo', ultimo_acesso: '2024-05-18 10:15' },
        { id: 3, email: 'joao@ippe.ao', nome: 'João Silva', tipo: 'aluno', status: 'Ativo', ultimo_acesso: '2024-05-18 09:45' },
        { id: 4, email: 'financeiro@ippe.ao', nome: 'Departamento Financeiro', tipo: 'financeiro', status: 'Ativo', ultimo_acesso: '2024-05-18 11:20' }
    ],
    pagamentos: [
        { id: 1, aluno_id: 1, aluno_nome: 'João Silva', valor: 450000, mes: 'Abril 2024', data_vencimento: '2024-04-10', data_pagamento: '2024-04-08', status: 'Pago' },
        { id: 2, aluno_id: 2, aluno_nome: 'Maria Santos', valor: 450000, mes: 'Abril 2024', data_vencimento: '2024-04-10', data_pagamento: null, status: 'Pendente' },
        { id: 3, aluno_id: 3, aluno_nome: 'Pedro Costa', valor: 450000, mes: 'Março 2024', data_vencimento: '2024-03-10', data_pagamento: '2024-03-09', status: 'Pago' }
    ],
    conteudos: [
        { id: 1, titulo: 'Introdução à Programação', disciplina: 'Programação I', tipo: 'PDF', data_upload: '2024-05-10', downloads: 45, docente: 'Eng. Sofia Martins' },
        { id: 2, titulo: 'Aula de Matemática - Cálculo I', disciplina: 'Matemática I', tipo: 'Vídeo', data_upload: '2024-05-12', downloads: 78, docente: 'Dr. Carlos Silva' },
        { id: 3, titulo: 'Exercícios Físicos Semana 1', disciplina: 'Física Aplicada', tipo: 'ZIP', data_upload: '2024-05-14', downloads: 32, docente: 'Dr. João Ferreira' }
    ],
    frequencia: [
        { id: 1, aluno_id: 1, aluno_nome: 'João Silva', disciplina: 'Programação I', data: '2024-05-18', status: 'Presente', turma: 'IG-10-A' },
        { id: 2, aluno_id: 2, aluno_nome: 'Maria Santos', disciplina: 'Programação I', data: '2024-05-18', status: 'Presente', turma: 'IG-10-A' },
        { id: 3, aluno_id: 3, aluno_nome: 'Pedro Costa', disciplina: 'Física Aplicada', data: '2024-05-18', status: 'Falta', turma: 'IG-11-B' }
    ],
    calendario: [
        { id: 1, titulo: 'Início do 2º Semestre', data: '2024-02-01', tipo: 'Evento', descricao: 'Retorno às atividades letivas' },
        { id: 2, titulo: 'Avaliação Parcial', data: '2024-06-01', tipo: 'Avaliação', descricao: 'Realização de testes parciais' },
        { id: 3, titulo: 'Férias Escolares', data: '2024-07-20', tipo: 'Feriado', descricao: 'Início das férias de Verão' }
    ]
};

// ========== ESTATÍSTICAS E SUMÁRIOS ==========

const Statistics = {
    getAlunosCount: () => MockData.alunos.length,
    getProfessoresCount: () => MockData.professores.length,
    getCursosCount: () => MockData.cursos.length,
    getTurmasCount: () => MockData.turmas.length,
    getPublicacoesCount: () => MockData.publicacoes.length,
    getAlunosAtivos: () => MockData.alunos.filter(a => a.status === 'Ativo').length,
    getMediaNotas: () => {
        const notas = MockData.notas.map(n => n.nota_final);
        return (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2);
    },
    getTaxaAprovacao: () => {
        const aprovados = MockData.notas.filter(n => n.status === 'Aprovado').length;
        return ((aprovados / MockData.notas.length) * 100).toFixed(1);
    },
    getTaxaFrequencia: () => {
        const presentes = MockData.frequencia.filter(f => f.status === 'Presente').length;
        return ((presentes / MockData.frequencia.length) * 100).toFixed(1);
    },
    getPagamentosPendentes: () => MockData.pagamentos.filter(p => p.status === 'Pendente').length,
    getTotalPagamentosPendentes: () => {
        return MockData.pagamentos.filter(p => p.status === 'Pendente').reduce((sum, p) => sum + p.valor, 0);
    }
};

// ========== GESTÃO DE DADOS ==========

class DataManager {
    constructor(data) {
        this.data = JSON.parse(JSON.stringify(data)); // Deep copy
    }

    getAll(collection) {
        return this.data[collection] || [];
    }

    getById(collection, id) {
        return this.getAll(collection).find(item => item.id === id);
    }

    add(collection, item) {
        if (!this.data[collection]) this.data[collection] = [];
        const maxId = this.data[collection].reduce((max, item) => Math.max(max, item.id || 0), 0);
        item.id = maxId + 1;
        this.data[collection].push(item);
        return item;
    }

    update(collection, id, updates) {
        const item = this.getById(collection, id);
        if (item) Object.assign(item, updates);
        return item;
    }

    delete(collection, id) {
        const index = this.data[collection].findIndex(item => item.id === id);
        if (index > -1) {
            this.data[collection].splice(index, 1);
            return true;
        }
        return false;
    }

    search(collection, query) {
        const q = query.toLowerCase();
        return this.getAll(collection).filter(item => {
            return Object.values(item).some(val => 
                String(val).toLowerCase().includes(q)
            );
        });
    }

    filter(collection, predicate) {
        return this.getAll(collection).filter(predicate);
    }
}

// Instância global
const Data = new DataManager(MockData);

// Exposição global
window.MockData = MockData;
window.Statistics = Statistics;
window.Data = Data;
