document.addEventListener('DOMContentLoaded', () => {

    // 1. Redirecionamento do botão 'Vamos lá'
    const botoes = document.querySelectorAll('.button');
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            window.location.href = 'home.html';
        });
    });

    // 2. Rolagem suave para os links do Navbar
    const linksDeAncora = document.querySelectorAll('a[href^="#"]');
    linksDeAncora.forEach(link => {
        link.addEventListener('click', function(evento) {
            evento.preventDefault();
            const idAlvo = this.getAttribute('href');
            const elementoAlvo = document.querySelector(idAlvo);
            if (elementoAlvo) {
                elementoAlvo.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Funcionalidade do Modal de Vídeo
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("youtubeIframe");
    const closeBtn = document.querySelector(".close-button");
    const playButtons = document.querySelectorAll(".bi-play-circle-fill");
    const bannerButton = document.querySelector(".growcast-button");

    // Adiciona evento de clique para os botões de play dentro dos cards
    playButtons.forEach(button => {
        button.addEventListener("click", (evento) => {
            evento.stopPropagation(); // Impede que o clique seja propagado para o card pai
            const card = button.closest('.episode-card');
            if (card) {
                const videoUrl = card.getAttribute("data-video");
                iframe.src = videoUrl; // Inicia o vídeo automaticamente
                modal.style.display = "flex";
            }
        });
    });

    // Adiciona evento de clique no botão do banner, se ele existir
    if (bannerButton) {
        bannerButton.addEventListener("click", () => {
            const videoUrl = bannerButton.getAttribute("data-video");
            iframe.src = videoUrl;
            modal.style.display = "flex";
        });
    }

    // Fechar modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        iframe.src = "";
    });

    // Fechar clicando fora do modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            iframe.src = "";
        }
    });
});
