
const logo = document.querySelector('.logo');
const autosleutel = document.getElementById('autosleutel');
const sleutelgat = document.getElementById('sleutelgat');
const startlichten = document.getElementById('startlichten');
const f1auto = document.querySelector('.f1auto');
const hond = document.querySelector('.hond');


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


