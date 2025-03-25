document.addEventListener('DOMContentLoaded', function () {
    const boostCan = document.getElementById('boostCan');
    const boostSound = document.getElementById('boostSound');
    const body = document.body;

    // Functies voor het schudden
    function startShaking() {
        boostCan.classList.add("shake"); // Voeg de shake-klasse toe aan het element
    }

    function stopShaking() {
        boostCan.classList.remove("shake"); // Verwijder de shake-klasse van het element
    }

    boostCan.addEventListener('click', function () {
        if (boostSound) {
            // Speel het geluid af
            boostSound.currentTime = 0;
            boostSound.play();

            // Wacht tot het geluid is afgelopen voordat de animatie start
            boostSound.addEventListener('ended', function () {
                // Start het schudden
                startShaking();

                // Stop het schudden na 2 seconden
                setTimeout(function () {
                    stopShaking();

                    // Voeg de energiegolf-animatie toe
                    body.classList.add('energy-boost');

                    // Laat de tekst trillen
                    const allText = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
                    allText.forEach(text => text.classList.add('text-shake'));

                    // Verwijder de animatie na 1.5 seconden
                    setTimeout(() => {
                        body.classList.remove('energy-boost');
                        allText.forEach(text => text.classList.remove('text-shake'));

                        // Navigeer direct naar de nieuwe pagina
                        window.location.href = "./pages/enorm/index.html";
                    }, 1500);
                }, 2000); // Stop het schudden na 2 seconden
            }, { once: true }); // Zorg ervoor dat de eventlistener slechts één keer wordt uitgevoerd
        } else {
            console.error("Boost sound element not found!");
        }
    });
});