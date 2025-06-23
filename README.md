# 🌟 Portfólio Pessoal - Gabriel Pansera

Um portfólio pessoal moderno e responsivo desenvolvido com HTML, CSS e JavaScript puro, apresentando projetos, habilidades e informações profissionais de Gabriel Pansera, desenvolvedor júnior especializado em desenvolvimento web.

## 📋 Sumário

- [Demonstração](#demonstração)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Desenvolvimento](#desenvolvimento)
- [Contato](#contato)

## 🎯 Demonstração



## ✨ Funcionalidades

### 🎨 Interface e Design
- **Design Responsivo**: Adaptável a diferentes tamanhos de tela (desktop, tablet, mobile)
- **Tema Escuro/Claro**: Alternância entre modos com persistência no localStorage
- **Animações Suaves**: Transições CSS e animações de entrada dos elementos
- **Navegação Intuitiva**: Menu fixo com rolagem suave entre seções
- **Header Dinâmico**: Mudança de cor do header baseada na rolagem da página

### 📱 Seções Principais
- **Página Inicial (Hero)**: Apresentação pessoal com gradiente de fundo e call-to-action
- **Sobre Mim**: Biografia pessoal com foto de perfil e descrição detalhada
- **Habilidades**: Cards interativos com tecnologias organizadas por categoria:
  - Frontend: HTML, CSS
  - Backend: Node.js, JavaScript
  - Database: MySQL, PostgreSQL
  - Design: Figma, Photoshop
- **Projetos**: Showcase de 3 projetos principais:
  - **Landing Page - Dra Tamara**: Site profissional para perícias judiciais
  - **Arrumaê**: Aplicação web completa com banco de dados
  - **Processamento de Imagens**: Ferramenta de manipulação de imagens
- **Contato**: Informações de contato com ícones e links para redes sociais

### 🔧 Funcionalidades Interativas
- **Scroll Suave**: Navegação fluida entre seções com JavaScript
- **Animações de Scroll**: Elementos aparecem gradualmente durante a rolagem (Intersection Observer)
- **Modo Escuro Persistente**: Preferência salva no localStorage
- **Hover Effects**: Efeitos visuais em cards e botões
- **Header Responsivo**: Simplificação do menu em dispositivos móveis

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização avançada com:
  - Flexbox e CSS Grid
  - Animações e transições
  - Media queries para responsividade
  - Variáveis CSS para temas
- **JavaScript ES6+**: Funcionalidades interativas incluindo:
  - Manipulação do DOM
  - Event listeners
  - Animações dinâmicas
  - Validação de formulários
  - Local Storage para preferências

### Ferramentas e Bibliotecas
- **Fontes**: Segoe UI (fonte padrão do sistema)
- **Ícones**: Emojis nativos para ícones de seções e redes sociais
- **Imagens**: Imagens locais para projetos e perfil

## 📁 Estrutura do Projeto

```
portfolio/
│
├── index.html              # Página principal
├── Desing/
│   └── style.css          # Estilos principais com modo escuro
├── script.js              # Funcionalidades JavaScript
├── Imagens/
│   ├── Foto-de-perfil.jpg # Foto pessoal
│   ├── Projeto1.png       # Screenshot Landing Page Dra Tamara
│   ├── projeto2.svg       # Logo projeto Arrumaê
│   ├── Projeto3.png       # Screenshot Processamento de Imagens
│   ├── icongit.png        # Ícone GitHub
│   └── icon insta.png     # Ícone Instagram
└── README.md              # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno
- Servidor local (opcional, mas recomendado)

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/panseraG/portfolio.git
```

2. Navegue até o diretório:
```bash
cd portfolio
```

3. Abra o arquivo `index.html` no navegador ou use um servidor local:
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server

# Usando Live Server (VS Code)
# Clique com botão direito no index.html > "Open with Live Server"
```

4. Acesse `http://localhost:8000` no navegador

## 💻 Desenvolvimento

### Processo de Desenvolvimento
1. **Planejamento**: Definição do layout e funcionalidades
2. **Wireframing**: Criação de mockups e protótipos
3. **Desenvolvimento**: 
   - Estrutura HTML semântica
   - Estilização CSS mobile-first
   - Implementação de funcionalidades JavaScript
4. **Testes**: Verificação em diferentes dispositivos e navegadores
5. **Otimização**: Melhoria de performance e acessibilidade
6. **Deploy**: Publicação online

### Principais Desafios e Soluções
- **Responsividade**: Implementação de design mobile-first com CSS Grid e Flexbox
- **Modo Escuro**: Sistema completo de alternância de temas com persistência no localStorage
- **Animações Performáticas**: Uso do Intersection Observer para animações otimizadas
- **Header Dinâmico**: Mudança de estilo baseada na posição do scroll
- **Cross-browser**: Compatibilidade com diferentes navegadores usando CSS moderno

### Funcionalidades Detalhadas

#### Navegação Suave
```javascript
// Scroll suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
```

#### Header Dinâmico
```javascript
// Mudança de cor do header baseada no scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const body = document.body;
    const isDark = body.classList.contains('dark-mode');

    if (window.scrollY > 100) {
        if (isDark) {
            header.style.background = '#1e1e1e';
        } else {
            header.style.background = '#667eea';
        }
    } else {
        // Estilo transparente no topo
        header.style.background = isDark ? 
            'rgba(255, 255, 255, 0.05)' : 
            'rgba(255, 255, 255, 0.1)';
    }
});
```

#### Tema Escuro/Claro
```javascript
// Alternância de tema com persistência
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Carrega preferência salva
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Modo Claro';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️ Modo Claro';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.textContent = '🌙 Modo Escuro';
        localStorage.setItem('theme', 'light');
    }
});
```

#### Animações de Scroll
```javascript
// Animações de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplica animações aos cards
document.querySelectorAll('.skill-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
```

## 🎨 Projetos em Destaque

### 1. Landing Page - Dra Tamara
- **Descrição**: Site profissional para escritório especializado em perícias judiciais e extrajudiciais
- **Tecnologias**: HTML5, CSS3
- **Características**: Design clean, foco em credibilidade, formulário de contato otimizado
- **Link**: [tamarapericias.com.br](https://tamarapericias.com.br/)

### 2. Arrumaê
- **Descrição**: Aplicação web completa desenvolvida em equipe
- **Tecnologias**: HTML5, CSS3, JavaScript, PostgreSQL
- **Características**: Sistema full-stack com banco de dados
- **Link**: [GitHub - Teams 2023](https://github.com/uri-erechim/teams-2023-time-teu)

### 3. Processamento de Imagens
- **Descrição**: Ferramenta web para manipulação básica de imagens
- **Tecnologias**: HTML5, CSS3, JavaScript
- **Características**: Interface intuitiva para edição de imagens
- **Link**: [GitHub - Processamento de Imagem](https://github.com/panseraG/processamentoDeImagem)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: gabrielpansera2004g@gmail.com
- **Telefone**: (54) 99904-4954
- **Localização**: Erechim, RS
- **LinkedIn**: [Gabriel Pansera](https://linkedin.com/in/gabriel-pansera)
- **GitHub**: [panseraG](https://github.com/panseraG)
- **Instagram**: [@gabriel.pansera_](https://www.instagram.com/gabriel.pansera_/)

---

**Desenvolvido com ❤️ por Gabriel Pansera**