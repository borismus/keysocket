function onKeyPress(key) {
    if (key === PLAY) {
        var playPauseButton = document.querySelector('button.ludo-bar__button--playpause');
        simulateClick(playPauseButton);
    }
}
