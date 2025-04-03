document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('audioPlayer');
    const audio = document.getElementById('spiderAudio');
    const icon = player.querySelector('i');
    
    // Carregar ícones do Font Awesome (se ainda não estiver carregado)
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const faLink = document.createElement('link');
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
        document.head.appendChild(faLink);
    }
    
    player.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            player.classList.add('playing');
        } else {
            audio.pause();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            player.classList.remove('playing');
        }
    });
    
    // Atualizar ícone quando o áudio terminar
    audio.addEventListener('ended', function() {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        player.classList.remove('playing');
    });
});