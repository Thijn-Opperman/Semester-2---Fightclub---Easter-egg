document.getElementById('actionButton').addEventListener('click', function() {
    var lampImage0 = document.getElementById('lampImage0');
    var otherLampImages = document.querySelectorAll('.lampImage:not(#lampImage0)');
    
    // Laat lampImage0 naar beneden komen
    lampImage0.classList.add('animate');
    
    // Na de animatie van lampImage0, verberg lampImage0 en wissel de andere afbeeldingen af
    setTimeout(() => {
        lampImage0.style.display = 'none'; // Verberg lampImage0
        let index = 0;
        setInterval(() => {
            otherLampImages.forEach(img => img.style.display = 'none'); // Verberg alle andere afbeeldingen
            otherLampImages[index].style.display = 'block'; // Toon de huidige afbeelding
            index = (index + 1) % otherLampImages.length; // Ga naar de volgende afbeelding
        }, 1000); // Wissel elke seconde
    }, 2000); // Wacht tot de animatie van lampImage0 is voltooid
});