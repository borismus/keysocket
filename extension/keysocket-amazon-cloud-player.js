function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('.button.icon-fastForward');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector(".button.playButton");
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('.button.icon-fastBackward');
        simulateClick(backButton);
    }
}
