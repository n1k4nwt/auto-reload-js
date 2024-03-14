// Initialisiert und aktualisiert den Reload-Counter
function initializeCounter() {
    if (localStorage.getItem('reloadCount') === null) {
        localStorage.setItem('reloadCount', '0');               //schaut ob ob der reload-counter null is und wenn ja wird er durch 0 ersetzt
    }
    let currentCount = parseInt(localStorage.getItem('reloadCount'), 10);       // wandet reload-counter zu dezimal um
    localStorage.setItem('reloadCount', (++currentCount).toString());             //erhöht um 1               
    document.getElementById('reloadCounter').innerText = `Seiten-Reloads: ${currentCount}`;
}

// kümmert sich um den Countdown bis zum Neuladen der Seite 
let countdownTime = 10;             //start wert
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = `Seite lädt in ${countdownTime} Sekunden neu...`;
    const interval = setInterval(() => {
        countdownTime--;                // zählt runter
        countdownElement.innerText = `Seite lädt in ${countdownTime} Sekunden neu...`;
        if (countdownTime <= 0) {           // wenn counter kleiner oder gleich null ist dann reloaded er
            clearInterval(interval);
            window.location.reload();
        }
    }, 1000);
}
// setzt den Timer zurück
function resetCounter() {
    localStorage.setItem('reloadCount', '0');           // ersetzt den reload-counter durch 0
    document.getElementById('reloadCounter').innerText = `Seiten-Reloads: 0`;
}

window.onload = function() {
    initializeCounter();        //startet die funktionen
    startCountdown();
};