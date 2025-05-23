document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('fillScreenButton');
    const body = document.body;
 
    button.addEventListener('click', function () {
        // Start een interval om blikken toe te voegen
        let interval = setInterval(() => {
            // Maak een nieuw blik-element
            const blik = document.createElement('img');
            blik.src = 'img/blik_liggend.png'; // Zorg ervoor dat dit pad correct is
            blik.classList.add('blik');
 
            // Plaats het blik op een willekeurige positie
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            blik.style.left = `${randomX}px`;
            blik.style.top = `${randomY}px`;
 
            // Voeg het blik toe aan de body
            body.appendChild(blik);
        }, 200); // Voeg elke 200ms een nieuw blik toe
 
        // Stop het interval na 10 seconden
        setTimeout(() => {
            clearInterval(interval);
 
            // Laat de blikken trillen en verwijder ze daarna
            const blikken = document.querySelectorAll('.blik');
            blikken.forEach(blik => {
                blik.classList.add('shake'); // Voeg de shake-animatie toe
                setTimeout(() => {
                    blik.remove(); // Verwijder het blik na de animatie
                }, 1000); // Wacht 0.5 seconden (duur van de shake-animatie)
            });
        }, 10000); // 10 seconden in milliseconden
    });
});