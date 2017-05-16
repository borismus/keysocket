function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.getElementsByTagName('button')[4];
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.getElementsByTagName('button')[3];
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.getElementsByTagName('button')[2];
        simulateClick(backButton);
    }
}
