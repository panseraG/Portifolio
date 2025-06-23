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
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const body = document.body;
    const isDark = body.classList.contains('dark-mode');

    if (window.scrollY > 100) {
        if (isDark) {
            header.style.background = '#1e1e1e';
            header.style.color = '#f5f5f5';
        } else {
            header.style.background = '#667eea';
            header.style.color = '#333';
        }
    } else {
        if (isDark) {
            header.style.background = 'rgba(255, 255, 255, 0.05)';
            header.style.color = 'white';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.1)';
            header.style.color = 'white';
        }
    }
});


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

        document.querySelectorAll('.skill-card, .project-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

    const toggleBtn = document.getElementById('toggle-theme');
    const body = document.body;

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