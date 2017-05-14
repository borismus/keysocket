function onKeyPress(key) {
    if (key === PLAY) {
        var playPauseButton = document.querySelector('.xa-icon-button.tv-player-play-toggle-button');
        simulateClick(playPauseButton);
    }
}
