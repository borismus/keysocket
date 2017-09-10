function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.getElementById('fap-next');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.getElementById('fap-play-pause');
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.getElementById('fap-previous');
        simulateClick(backButton);
    }
}
