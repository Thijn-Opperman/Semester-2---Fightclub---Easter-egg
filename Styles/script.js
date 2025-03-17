document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    document.body.addEventListener('click', function(event) {
        if (event.clientX < 400 && event.clientY < 250) { // Controleer of de klik linksboven is
            logo.classList.remove('hidden');
            logo.classList.add('flicker');
            setTimeout(() => {
                logo.classList.remove('flicker');
                logo.classList.add('fade-out');
                setTimeout(() => {
                    logo.classList.add('hidden');
                    logo.classList.remove('fade-out');
                }, 4000); // Verberg het logo na de fade-out animatie
            }, 2000); // Stop het flikkeren na 2 seconden
        }
    });

    document.body.addEventListener('dblclick', function() {
        document.body.classList.toggle('cursor-blikje'); // Wissel de cursor naar het blikje bij dubbelklik
    });

    const autosleutel = document.getElementById('autosleutel');
    const sleutelgat = document.getElementById('sleutelgat');
    const startlichten = document.getElementById('startlichten');
    const f1auto = document.querySelector('.f1auto');
    const hond = document.querySelector('.hond');

    autosleutel.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'autosleutel');
    });

    sleutelgat.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    sleutelgat.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        if (data === 'autosleutel') {
            // Verplaats de sleutel naar het sleutelgat
            sleutelgat.appendChild(autosleutel);
            autosleutel.style.position = "absolute";
            autosleutel.style.top = "0";
            autosleutel.style.left = "0";

            // Toon de startlichten
            startlichten.classList.remove('hidden');
            startlichten.classList.add('slide-down');

            // Laat de auto bewegen
            f1auto.classList.add('moveCar');
        }
    });

    // Start de animatie van de hond
    setInterval(() => {
        hond.classList.remove('move-dog');
        void hond.offsetWidth; // Trigger reflow om de animatie opnieuw te starten
        hond.classList.add('move-dog');
    }, 10000); // Herhaal elke 10 seconden

    // Voeg een click event listener toe aan de hond
    hond.addEventListener('click', () => {
        window.location.href = 'https://www.enorm.com/';
    });
});

