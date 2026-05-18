// ========== AUTHENTICATION SYSTEM - MOCK ==========

class MockAuthSystem {
    constructor() {
        this.currentUser = null;
        this.credentials = {
            'admin@ippe.ao': { password: '123', type: 'admin', name: 'Administrador' },
            'professor@ippe.ao': { password: '123', type: 'professor', name: 'Dr. Carlos Silva' },
            'joao@ippe.ao': { password: '123', type: 'aluno', name: 'João Silva' },
            'maria@ippe.ao': { password: '123', type: 'aluno', name: 'Maria Santos' },
            'financeiro@ippe.ao': { password: '123', type: 'financeiro', name: 'Financeiro' }
        };
    }

    login(email, password) {
        const cred = this.credentials[email];
        if (!cred || cred.password !== password) {
            return { success: false, error: 'Email ou password incorretos' };
        }
        
        this.currentUser = {
            email,
            nome: cred.name,
            tipo: cred.type,
            avatar: this.getAvatar(cred.type)
        };

        // Salvar na sessão (não localStorage)
        sessionStorage.setItem('user', JSON.stringify(this.currentUser));
        return { success: true, user: this.currentUser };
    }

    logout() {
        this.currentUser = null;
        sessionStorage.removeItem('user');
        window.location.href = './login.html';
    }

    getCurrentUser() {
        if (this.currentUser) return this.currentUser;
        
        const stored = sessionStorage.getItem('user');
        if (stored) {
            this.currentUser = JSON.parse(stored);
            return this.currentUser;
        }
        return null;
    }

    isAuthenticated() {
        return this.getCurrentUser() !== null;
    }

    hasRole(role) {
        const user = this.getCurrentUser();
        return user && user.tipo === role;
    }

    requireRole(role) {
        if (!this.hasRole(role)) {
            window.location.href = './login.html';
            return false;
        }
        return true;
    }

    getAvatar(type) {
        const avatars = {
            admin: '👨‍💼',
            professor: '👨‍🏫',
            aluno: '👨‍🎓',
            financeiro: '💰'
        };
        return avatars[type] || '👤';
    }
}

const Auth = new MockAuthSystem();
window.Auth = Auth;

// Auto-carregamento na página
document.addEventListener('DOMContentLoaded', () => {
    const user = Auth.getCurrentUser();
    if (user && document.getElementById('userGreeting')) {
        document.getElementById('userGreeting').textContent = `Bem-vindo, ${user.nome}!`;
    }
});
