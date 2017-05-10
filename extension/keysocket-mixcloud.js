function onKeyPress(key) {
    if (key === PLAY) {
        var playPauseButton = document.querySelector('.player-control');
        simulateClick(playPauseButton);
    }
}
