// ========== DATABASE SYSTEM ==========

class Database {
    constructor() {
        this.initData();
    }

    initData() {
        if (!localStorage.getItem('ippe_data')) {
            const initialData = {
                alunos: [
                    { id: 1, nome: 'João Silva', email: 'joao@ippe.ao', matricula: '#2024001', curso: 'Informática de Gestão', ano: '10º', status: 'Ativo', telefone: '923456789', data_inscricao: '01/04/2024' },
                    { id: 2, nome: 'Maria Santos', email: 'maria@ippe.ao', matricula: '#2024002', curso: 'Enfermagem Geral', ano: '10º', status: 'Ativo', telefone: '923456790', data_inscricao: '30/03/2024' },
                    { id: 3, nome: 'Pedro Costa', email: 'pedro@ippe.ao', matricula: '#2024003', curso: 'Análises Clínica', ano: '10º', status: 'Ativo', telefone: '923456791', data_inscricao: '28/03/2024' },
                    { id: 4, nome: 'Ana Silva', email: 'ana@ippe.ao', matricula: '#2024004', curso: 'Informática de Gestão', ano: '11º', status: 'Ativo', telefone: '923456792', data_inscricao: '15/03/2024' },
                ],
                professores: [
                    { id: 1, nome: 'Dr. Carlos Silva', email: 'carlos@ippe.ao', especialidade: 'Programação', departamento: 'Informática', status: 'Ativo', telefone: '923111111' },
                    { id: 2, nome: 'Dra. Sofia Martins', email: 'sofia@ippe.ao', especialidade: 'Enfermagem', departamento: 'Saúde', status: 'Ativo', telefone: '923111112' },
                    { id: 3, nome: 'Dr. Pedro Gomes', email: 'pedro@prof.ippe.ao', especialidade: 'Análises Clínica', departamento: 'Saúde', status: 'Ativo', telefone: '923111113' },
                ],
                cursos: [
                    { id: 1, nome: 'Informática de Gestão', sigla: 'IG', coordenador: 'Dr. Carlos Silva', anos: 3, turmas: 4, status: 'Ativo' },
                    { id: 2, nome: 'Enfermagem Geral', sigla: 'EG', coordenador: 'Dra. Ana Costa', anos: 3, turmas: 3, status: 'Ativo' },
                    { id: 3, nome: 'Análises Clínica', sigla: 'AC', coordenador: 'Dr. Pedro Martins', anos: 3, turmas: 2, status: 'Ativo' },
                ],
                disciplinas: [
                    { id: 1, nome: 'Programação I', codigo: 'PROG-001', cursos: 'IG', ano: '10º', docente: 'Dr. Carlos', horas: 60 },
                    { id: 2, nome: 'Anatomia', codigo: 'ANAT-001', cursos: 'EG, AC', ano: '10º', docente: 'Dra. Sofia', horas: 80 },
                    { id: 3, nome: 'Sistemas Operacionais', codigo: 'SIST-001', cursos: 'IG', ano: '10º', docente: 'Dr. Carlos', horas: 60 },
                    { id: 4, nome: 'Farmacologia', codigo: 'FARM-001', cursos: 'AC', ano: '10º', docente: 'Dr. Pedro', horas: 70 },
                ],
                turmas: [
                    { id: 1, codigo: 'IG-10-A', curso: 'Informática de Gestão', ano: '10º', alunos: 35, diretor: 'Dr. João', status: 'Ativa' },
                    { id: 2, codigo: 'EG-10-A', curso: 'Enfermagem Geral', ano: '10º', alunos: 32, diretor: 'Dra. Maria', status: 'Ativa' },
                    { id: 3, codigo: 'AC-10-A', curso: 'Análises Clínica', ano: '10º', alunos: 28, diretor: 'Dr. Pedro', status: 'Ativa' },
                    { id: 4, codigo: 'IG-11-A', curso: 'Informática de Gestão', ano: '11º', alunos: 30, diretor: 'Dr. João', status: 'Ativa' },
                ],
                notas: [
                    { id: 1, aluno: 'João Silva', disciplina: 'Programação I', turma: 'IG-10-A', nota: 15, status: 'Aprovado' },
                    { id: 2, aluno: 'Maria Santos', disciplina: 'Anatomia', turma: 'EG-10-A', nota: 16, status: 'Aprovado' },
                    { id: 3, aluno: 'Pedro Costa', disciplina: 'Farmacologia', turma: 'AC-10-A', nota: 14, status: 'Aprovado' },
                    { id: 4, aluno: 'Ana Silva', disciplina: 'Programação I', turma: 'IG-11-A', nota: 17, status: 'Aprovado' },
                ],
                matriculas: [
                    { id: 1, aluno: 'João Silva', turma: 'IG-10-A', curso: 'Informática de Gestão', data: '01/04/2024', status: 'Ativa' },
                    { id: 2, aluno: 'Maria Santos', turma: 'EG-10-A', curso: 'Enfermagem Geral', data: '30/03/2024', status: 'Ativa' },
                    { id: 3, aluno: 'Pedro Costa', turma: 'AC-10-A', curso: 'Análises Clínica', data: '28/03/2024', status: 'Ativa' },
                ]
            };
            localStorage.setItem('ippe_data', JSON.stringify(initialData));
        }
    }

    getData() {
        return JSON.parse(localStorage.getItem('ippe_data')) || {};
    }

    saveData(data) {
        localStorage.setItem('ippe_data', JSON.stringify(data));
    }

    // Alunos
    getAlunos() {
        return this.getData().alunos || [];
    }

    addAluno(aluno) {
        const data = this.getData();
        aluno.id = Math.max(...data.alunos.map(a => a.id), 0) + 1;
        data.alunos.push(aluno);
        this.saveData(data);
        return aluno;
    }

    updateAluno(id, aluno) {
        const data = this.getData();
        const index = data.alunos.findIndex(a => a.id === id);
        if (index !== -1) data.alunos[index] = { ...data.alunos[index], ...aluno, id };
        this.saveData(data);
    }

    deleteAluno(id) {
        const data = this.getData();
        data.alunos = data.alunos.filter(a => a.id !== id);
        this.saveData(data);
    }

    // Professores
    getProfessores() {
        return this.getData().professores || [];
    }

    addProfessor(professor) {
        const data = this.getData();
        professor.id = Math.max(...data.professores.map(p => p.id), 0) + 1;
        data.professores.push(professor);
        this.saveData(data);
        return professor;
    }

    updateProfessor(id, professor) {
        const data = this.getData();
        const index = data.professores.findIndex(p => p.id === id);
        if (index !== -1) data.professores[index] = { ...data.professores[index], ...professor, id };
        this.saveData(data);
    }

    deleteProfessor(id) {
        const data = this.getData();
        data.professores = data.professores.filter(p => p.id !== id);
        this.saveData(data);
    }

    // Cursos
    getCursos() {
        return this.getData().cursos || [];
    }

    addCurso(curso) {
        const data = this.getData();
        curso.id = Math.max(...data.cursos.map(c => c.id), 0) + 1;
        data.cursos.push(curso);
        this.saveData(data);
        return curso;
    }

    updateCurso(id, curso) {
        const data = this.getData();
        const index = data.cursos.findIndex(c => c.id === id);
        if (index !== -1) data.cursos[index] = { ...data.cursos[index], ...curso, id };
        this.saveData(data);
    }

    deleteCurso(id) {
        const data = this.getData();
        data.cursos = data.cursos.filter(c => c.id !== id);
        this.saveData(data);
    }

    // Disciplinas
    getDisciplinas() {
        return this.getData().disciplinas || [];
    }

    addDisciplina(disciplina) {
        const data = this.getData();
        disciplina.id = Math.max(...data.disciplinas.map(d => d.id), 0) + 1;
        data.disciplinas.push(disciplina);
        this.saveData(data);
        return disciplina;
    }

    updateDisciplina(id, disciplina) {
        const data = this.getData();
        const index = data.disciplinas.findIndex(d => d.id === id);
        if (index !== -1) data.disciplinas[index] = { ...data.disciplinas[index], ...disciplina, id };
        this.saveData(data);
    }

    deleteDisciplina(id) {
        const data = this.getData();
        data.disciplinas = data.disciplinas.filter(d => d.id !== id);
        this.saveData(data);
    }

    // Turmas
    getTurmas() {
        return this.getData().turmas || [];
    }

    addTurma(turma) {
        const data = this.getData();
        turma.id = Math.max(...data.turmas.map(t => t.id), 0) + 1;
        data.turmas.push(turma);
        this.saveData(data);
        return turma;
    }

    updateTurma(id, turma) {
        const data = this.getData();
        const index = data.turmas.findIndex(t => t.id === id);
        if (index !== -1) data.turmas[index] = { ...data.turmas[index], ...turma, id };
        this.saveData(data);
    }

    deleteTurma(id) {
        const data = this.getData();
        data.turmas = data.turmas.filter(t => t.id !== id);
        this.saveData(data);
    }

    // Notas
    getNotas() {
        return this.getData().notas || [];
    }

    addNota(nota) {
        const data = this.getData();
        nota.id = Math.max(...data.notas.map(n => n.id), 0) + 1;
        data.notas.push(nota);
        this.saveData(data);
        return nota;
    }

    updateNota(id, nota) {
        const data = this.getData();
        const index = data.notas.findIndex(n => n.id === id);
        if (index !== -1) data.notas[index] = { ...data.notas[index], ...nota, id };
        this.saveData(data);
    }

    deleteNota(id) {
        const data = this.getData();
        data.notas = data.notas.filter(n => n.id !== id);
        this.saveData(data);
    }

    // Matrículas
    getMatriculas() {
        return this.getData().matriculas || [];
    }

    addMatricula(matricula) {
        const data = this.getData();
        matricula.id = Math.max(...data.matriculas.map(m => m.id), 0) + 1;
        data.matriculas.push(matricula);
        this.saveData(data);
        return matricula;
    }

    updateMatricula(id, matricula) {
        const data = this.getData();
        const index = data.matriculas.findIndex(m => m.id === id);
        if (index !== -1) data.matriculas[index] = { ...data.matriculas[index], ...matricula, id };
        this.saveData(data);
    }

    deleteMatricula(id) {
        const data = this.getData();
        data.matriculas = data.matriculas.filter(m => m.id !== id);
        this.saveData(data);
    }
}

const db = new Database();

const DB = {
    getAll(collection) {
        switch (collection) {
            case 'alunos': return db.getAlunos();
            case 'professores': return db.getProfessores();
            case 'cursos': return db.getCursos();
            case 'disciplinas': return db.getDisciplinas();
            case 'turmas': return db.getTurmas();
            case 'notas': return db.getNotas();
            case 'matriculas': return db.getMatriculas();
            default: return [];
        }
    },
    add(collection, item) {
        switch (collection) {
            case 'alunos': return db.addAluno(item);
            case 'professores': return db.addProfessor(item);
            case 'cursos': return db.addCurso(item);
            case 'disciplinas': return db.addDisciplina(item);
            case 'turmas': return db.addTurma(item);
            case 'notas': return db.addNota(item);
            case 'matriculas': return db.addMatricula(item);
            default: return null;
        }
    },
    update(collection, id, updatedItem) {
        switch (collection) {
            case 'alunos': return db.updateAluno(id, updatedItem);
            case 'professores': return db.updateProfessor(id, updatedItem);
            case 'cursos': return db.updateCurso(id, updatedItem);
            case 'disciplinas': return db.updateDisciplina(id, updatedItem);
            case 'turmas': return db.updateTurma(id, updatedItem);
            case 'notas': return db.updateNota(id, updatedItem);
            case 'matriculas': return db.updateMatricula(id, updatedItem);
            default: return null;
        }
    },
    delete(collection, id) {
        switch (collection) {
            case 'alunos': return db.deleteAluno(id);
            case 'professores': return db.deleteProfessor(id);
            case 'cursos': return db.deleteCurso(id);
            case 'disciplinas': return db.deleteDisciplina(id);
            case 'turmas': return db.deleteTurma(id);
            case 'notas': return db.deleteNota(id);
            case 'matriculas': return db.deleteMatricula(id);
            default: return null;
        }
    },
    search(collection, query) {
        if (!query) return this.getAll(collection);
        const normalized = query.toString().toLowerCase();
        return this.getAll(collection).filter(item => {
            return Object.values(item).some(value => {
                return String(value).toLowerCase().includes(normalized);
            });
        });
    }
};

window.DB = DB;