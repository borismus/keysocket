function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('.nextButton');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('.playButton');
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('.previousButton');
        simulateClick(backButton);
    }
}
