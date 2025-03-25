document.addEventListener("DOMContentLoaded", function () {
    const blikje = document.getElementById("blikje");
    const container = document.getElementById("blikcontainer");
    const counterDisplay = document.getElementById("counter");
    const logo = document.querySelector('.logo');
    const tekstContainer = document.querySelector('.container');
    let counter = 0;
    let scriptActivated = false;

    counterDisplay.textContent = ""; // Verberg de score

    function getRandomPosition() {
        const containerRect = container.getBoundingClientRect();
        const x = Math.floor(Math.random() * (containerRect.width - blikje.clientWidth));
        const y = Math.floor(Math.random() * (containerRect.height - blikje.clientHeight));
        return { x, y };
    }

    function moveBlikje() {
        const { x, y } = getRandomPosition();
        blikje.style.transform = `translate(${x}px, ${y}px)`;
    }

    function startShaking() {
        blikje.classList.add("shake");
        document.body.classList.add("shake"); // Voeg shake-klasse toe aan body
    }

    function stopShaking() {
        blikje.classList.remove("shake");
        document.body.classList.remove("shake"); // Verwijder shake-klasse van body
    }

    function activateScript() {
        if (!scriptActivated) {
            scriptActivated = true;
            blikje.addEventListener("click", function () {
                counter++;
                counterDisplay.textContent = `${counter}/10`; // Toon de score als 0/10, 1/10, etc.
                if (counter >= 10) {
                    startShaking();
                    setTimeout(function () {
                        stopShaking(); // Stop het shaken na 2 seconden
                    }, 2000);
                    setTimeout(function () {
                        blikje.style.display = "none";
                        
                        // Verwijs naar de Enorm-pagina
                        window.location.href = "./pages/enorm/index.html";
                    }, 3000); // Verwijder het blikje en navigeer na 3 seconden
    
                    // Voeg de animatie toe aan het logo en de tekstcontainer
                    logo.classList.add('slide-down-out');
                    tekstContainer.classList.add('slide-down-out');
                }
            });
    
            setInterval(moveBlikje, 900); // Verplaats het blikje elke 0.9 seconde
        }
    }
    // Voeg een event listener toe om te wachten op een klik op het blikje
    blikje.addEventListener("click", function (event) {
        if (!scriptActivated) {
            // Toon een pop-up met uitleg
            alert("Welkom bij het spel! Klik op het blikje om punten te scoren. Je moet 10 punten halen om te winnen!");
        }
        activateScript(); // Start het spel
    });
});