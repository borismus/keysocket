function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.getElementsByClassName('js-rewind')[0];
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.getElementsByClassName('js-play')[0];
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.getElementsByClassName('js-forward')[0];
        simulateClick(backButton);
    }
}
