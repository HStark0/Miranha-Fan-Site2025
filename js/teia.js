document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.options h1');
    
    options.forEach(option => {
        option.addEventListener('mouseenter', () => {
            // Cria elementos de teia
            for (let i = 0; i < 3; i++) {
                const webLine = document.createElement('div');
                webLine.style.position = 'absolute';
                webLine.style.backgroundColor = 'rgba(255,255,255,0.3)';
                webLine.style.height = '1px';
                webLine.style.width = '0';
                webLine.style.transition = 'all 0.3s ease';
                
                // Posiciona aleatoriamente
                const angle = Math.random() * 360;
                const distance = 5 + Math.random() * 10;
                webLine.style.transform = `rotate(${angle}deg)`;
                webLine.style.left = '50%';
                webLine.style.top = '50%';
                
                option.appendChild(webLine);
                
                // Animação
                setTimeout(() => {
                    webLine.style.width = `${distance}px`;
                }, 10);
            }
        });
        
        option.addEventListener('mouseleave', () => {
            // Remove as teias
            const webLines = option.querySelectorAll('div');
            webLines.forEach(line => {
                line.style.width = '0';
                setTimeout(() => line.remove(), 300);
            });
        });
    });
});