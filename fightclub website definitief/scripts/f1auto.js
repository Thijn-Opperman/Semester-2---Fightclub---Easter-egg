document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const autosleutel = document.getElementById('autosleutel');
    const sleutelgat = document.getElementById('sleutelgat');
    const startlichten = document.getElementById('startlichten');
    const f1auto = document.querySelector('.f1auto');
    const hond = document.querySelector('.hond');
    
    // Logica voor slepen en neerzetten van de sleutel
    autosleutel.addEventListener('dragstart', (e) => {
        console.log('Sleutel wordt gesleept');
        e.dataTransfer.setData('text/plain', 'autosleutel');
    });

    sleutelgat.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('Sleutel is boven het sleutelgat');
    });

    sleutelgat.addEventListener('drop', (e) => {
        e.preventDefault();
        console.log('Sleutel wordt gedropt');
        const data = e.dataTransfer.getData('text/plain');
        if (data === 'autosleutel') {
            // Verplaats de sleutel naar het sleutelgat
            sleutelgat.appendChild(autosleutel);
            autosleutel.style.position = "absolute";
            autosleutel.style.top = "0";
            autosleutel.style.left = "0";

            // Laat de auto bewegen
            console.log('Auto begint te bewegen');
            f1auto.classList.add('moveCar');
        }
    });
});