document.getElementById('actionButton').addEventListener('click', function() {
    var lampGif = document.getElementById('lampGif');
    var explosionGif = document.getElementById('explosionGif');
    
    // Reset GIFs
    lampGif.style.display = 'none';
    explosionGif.style.display = 'none';
    lampGif.classList.remove('animate');
    explosionGif.classList.remove('animate');
    
    // Start lamp GIF animatie
    lampGif.style.display = 'block';
    setTimeout(function() {
        lampGif.classList.add('animate');
    }, 10); // Kleine vertraging om de animatie te starten
    
    // Wacht tot de animatie is voltooid voordat de lamp GIF begint af te spelen
    lampGif.addEventListener('transitionend', function() {
        lampGif.src = lampGif.src; // Herlaad de lamp GIF om deze af te spelen
        
        // Wacht tot de lamp GIF is afgespeeld voordat de explosie GIF wordt getoond
        setTimeout(function() {
            lampGif.style.display = 'none'; // Verberg de lamp GIF
            explosionGif.style.display = 'block'; // Toon de explosie GIF
            setTimeout(function() {
                explosionGif.classList.add('animate');
            }, 10); // Kleine vertraging om de animatie te starten
            
            // Wacht tot de explosie GIF is afgespeeld voordat deze verdwijnt
            setTimeout(function() {
                explosionGif.style.display = 'none'; // Verberg de explosie GIF
            }, 3000); // Verander deze waarde naar de duur van de explosie GIF
        }, 3000); // Verander deze waarde naar de duur van de lamp GIF
    }, { once: true });
});