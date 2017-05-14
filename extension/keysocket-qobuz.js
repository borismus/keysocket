function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.getElementById('player-next-button');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.getElementById('player-play-button');
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.getElementById('player-previous-button');
        simulateClick(backButton);
    }
}
