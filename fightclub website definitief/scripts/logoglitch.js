document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const autosleutel = document.getElementById('autosleutel');
    const sleutelgat = document.getElementById('sleutelgat');
    const f1auto = document.querySelector('.f1auto');
    const hond = document.querySelector('.hond');

    // Toon het logo bij een klik linksboven
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
});