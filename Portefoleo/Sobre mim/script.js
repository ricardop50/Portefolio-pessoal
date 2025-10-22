document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header'); // Seleciona o seu header

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // Pega o ID da seção (ex: "sobre" de "#sobre")
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calcula a posição de rolagem, descontando a altura do header
                const headerHeight = header.offsetHeight; // Altura do seu header
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerHeight - 10; // -10 para um pequeno respiro acima

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});