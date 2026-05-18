# 🎓 IPPE CONNECT - Portal de Gestão Académica

## Visão Geral

**IPPE CONNECT** é um portal web moderno e profissional de gestão académica completo, totalmente funcional com dados simulados. O sistema foi reconstruído com foco em experiência visual, navegação intuitiva e funcionamento 100% operacional.

## ✨ Características Principais

### 🔐 Autenticação
- Sistema de login com múltiplos níveis de acesso
- 3 tipos de utilizadores: Admin, Professor, Aluno
- Autenticação segura com sessão
- Credenciais de demonstração integradas

### 👨‍💼 Painel Administrativo
- Dashboard com estatísticas em tempo real
- Gestão completa de alunos (CRUD)
- Gestão de professores
- Gestão de cursos e disciplinas
- Gestão de turmas
- Lançamento e visualização de notas
- Gestão de publicações
- Controle de utilizadores
- Modais funcionais para criar/editar registos
- Notificações visuais (toast notifications)
- Busca global de dados

### 👨‍🏫 Painel do Professor
- Dashboard com estatísticas pessoais
- Visualização de turmas atribuídas
- Lançamento de notas para alunos
- Visualização de frequência
- Acesso a conteúdos de aula
- Publicação de avisos e materiais
- Relatórios de desempenho dos alunos

### 👨‍🎓 Painel do Aluno
- Dashboard pessoal com métricas
- Visualização de perfil
- Consulta de notas por disciplina
- Histórico de frequência
- Acesso a conteúdos educacionais (download)
- Visualização de pagamentos pendentes
- Calendário académico
- Avisos e notícias relevantes

## 🗂️ Estrutura de Dados Simulados

O sistema utiliza **dados completamente simulados** e realistas armazenados localmente:

```
mockData.js contém:
├── Alunos (5+ registos com perfis completos)
├── Professores (4+ registos com especialidades)
├── Cursos (3 cursos técnicos)
├── Disciplinas (8+ disciplinas com docentes)
├── Turmas (3+ turmas ativas)
├── Notas (múltiplos registos de avaliações)
├── Matrículas (registos de inscrições)
├── Publicações (notícias e avisos)
├── Utilizadores (4+ contas diferentes)
├── Pagamentos (histórico financeiro)
├── Conteúdos (materiais de aula)
├── Frequência (registos de presenças)
└── Calendário (eventos académicos)
```

## 🚀 Como Usar

### 1. Abrir o Portal
Abra `index.html` num navegador web moderno (Chrome, Firefox, Safari, Edge)

### 2. Fazer Login
Acesse `pages/login.html` ou clique em "Entrar" na página inicial

**Contas de Demonstração:**

| Perfil | Email | Senha | Acesso |
|--------|-------|-------|--------|
| Admin | `admin@ippe.ao` | `123` | Painel Administrativo Completo |
| Professor | `professor@ippe.ao` | `123` | Dashboard de Professor |
| Aluno 1 | `joao@ippe.ao` | `123` | Dashboard de Aluno |
| Aluno 2 | `maria@ippe.ao` | `123` | Dashboard de Aluno |
| Financeiro | `financeiro@ippe.ao` | `123` | (Futuro desenvolvimento) |

### 3. Navegar no Sistema

**Admin:**
- Aceda ao Dashboard para ver estatísticas
- Clique em "Alunos" para gerir registos
- Use o botão "+ Novo" para adicionar registos
- Clique em "Editar" ou "Excluir" nas tabelas
- Pesquise globalmente usando a barra de busca

**Professor:**
- Visualize suas turmas
- Lance notas para estudantes
- Consulte frequência
- Gerencie conteúdos
- Publique avisos

**Aluno:**
- Veja seu perfil completo
- Consulte suas notas
- Verifique frequência
- Acesse conteúdos de aula
- Visualize pagamentos

## 📊 Funcionalidades Implementadas

### ✅ CRUD Completo
- ✓ Criar novos registos
- ✓ Visualizar dados em tabelas
- ✓ Editar registos existentes
- ✓ Eliminar registos com confirmação
- ✓ Busca em tempo real
- ✓ Filtros por status

### ✅ Interface
- ✓ Design responsivo (mobile, tablet, desktop)
- ✓ Animações suaves e transições
- ✓ Notificações visuais (toasts)
- ✓ Modais funcionales
- ✓ Tabelas com dados realistas
- ✓ Ícones e emojis intuitivos
- ✓ Cores e tipografia profissional

### ✅ Dados & Lógica
- ✓ Estatísticas calculadas em tempo real
- ✓ Cálculo de médias de notas
- ✓ Taxa de aprovação automática
- ✓ Percentual de frequência
- ✓ Estados de badges e validações
- ✓ Dados persistentes em sessão

### ✅ Segurança
- ✓ Controlo de acesso por papel
- ✓ Redirecionamento automático após logout
- ✓ Validação de permissões
- ✓ Verificação de autenticação

## 🎨 Design & UX

### Paleta de Cores
- Verde Escuro: `#1a472a` (Primário)
- Verde Médio: `#2d5a3d` (Gradiente)
- Amarelo: `#ffd700` (Destaque/Botões)
- Cinza: `#f5f7fa` (Fundo)
- Branco: `#ffffff` (Cards e modals)

### Tipografia
- Fonte Principal: Segoe UI, Tahoma, Verdana
- Tamanhos Variados: 11px a 48px
- Weights: 400 (normal), 500, 700 (bold)

### Componentes
- Sidebar de navegação fixa
- Top bar com user info
- Cards de estatísticas
- Tabelas responsivas
- Modals com formulários
- Notificações toast
- Badges coloridas

## 📱 Responsividade

O sistema é totalmente responsivo:
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Móvel (480px)

## 🔧 Arquitetura Técnica

### Ficheiros Principais
```
index.html
├── pages/
│   ├── login.html              (Login com auth mock)
│   ├── dashboard-admin.html    (Painel administrativo)
│   ├── dashboard-professor.html (Painel professor)
│   └── dashboard-aluno.html    (Painel aluno)
└── js/
    ├── mockData.js             (Dados simulados)
    ├── mockAuth.js             (Autenticação local)
```

### Tecnologias
- **HTML5**: Estrutura semântica
- **CSS3**: Styled com Flexbox e Grid
- **JavaScript ES6+**: Lógica interativa
- **SessionStorage**: Persistência de sessão

## 🎯 Funcionalidades por Módulo

### Admin Dashboard
- 6 cartões de estatísticas
- 9 secções (Alunos, Professores, Cursos, Disciplinas, Turmas, Notas, Publicações, Utilizadores)
- CRUD completo para cada entidade
- Modais com formulários dinâmicos
- Validação de dados
- Busca global

### Professor Dashboard
- 4 cartões de estatísticas
- 6 secções (Dashboard, Turmas, Notas, Frequência, Conteúdos, Publicações)
- Visualização de turmas atribuídas
- Tabelas com dados editáveis
- Histórico de frequência
- Gestão de conteúdos

### Student Dashboard
- 4 cartões de estatísticas
- 7 secções (Dashboard, Perfil, Notas, Frequência, Conteúdos, Pagamentos, Calendário)
- Visualização de perfil completo
- Notas com status (Aprovado/Reprovado)
- Calendário com eventos académicos
- Histórico de pagamentos

## 📝 Notas Importantes

- **Sem Banco de Dados Real**: Todo os dados são simulados em memória
- **Sem Supabase**: Sistema completamente autónomo
- **Sem APIs Externas**: Tudo funciona localmente
- **Dados Resetados**: Ao recarregar a página, dados retornam ao estado original
- **Performance**: Rápido e leve, sem dependências externas

## 🔒 Credenciais de Teste

### Admin
- Email: `admin@ippe.ao`
- Senha: `123`
- Acesso: Painel administrativo completo

### Professor
- Email: `professor@ippe.ao`
- Senha: `123`
- Acesso: Gestão de turmas e notas

### Aluno
- Email: `joao@ippe.ao`
- Senha: `123`
- Acesso: Visualização de notas e frequência

## 🚀 Começar Agora

1. Abra o ficheiro `index.html` no navegador
2. Clique em "Entrar" ou aceda a `pages/login.html`
3. Use uma das credenciais acima
4. Explore o sistema

## 📞 Suporte

Para dúvidas ou problemas:
- Email: suporte@ippe.ao
- Telefone: +244 923 123 456

## 📄 Licença

© 2024 IPPE CONNECT. Todos os direitos reservados.

---

**Versão:** 2.0 (Reconstruída com Mock Data)  
**Data:** 18 de Maio de 2024  
**Status:** ✅ Totalmente Funcional
