document.addEventListener('DOMContentLoaded', function() {
    var isFullscreenDesired = localStorage.getItem('isFullscreen') === 'true';
    var btn = document.getElementById('fullscreenToggle');

    if (isFullscreenDesired) {
        btn.innerText = "Vollbild verlassen";
    } else {
        btn.innerText = "Vollbild aktivieren";
    }

    btn.addEventListener('click', function() {
        toggleFullScreen();
    });
});

function toggleFullScreen() {
    var isInFullScreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

    if (!isInFullScreen) {
        enterFullScreen();
    } else {
        exitFullScreen();
    }
}

function enterFullScreen() {
    var docElm = document.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
    }
    localStorage.setItem('isFullscreen', 'true');
    document.getElementById('fullscreenToggle').innerText = "Vollbild verlassen";
}

function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    localStorage.setItem('isFullscreen', 'false');
    document.getElementById('fullscreenToggle').innerText = "Vollbild aktivieren";
}

