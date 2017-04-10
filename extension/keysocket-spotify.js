function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('.spoticon-skip-forward-16');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('.spoticon-pause-16, .spoticon-play-16');
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('.spoticon-skip-back-16');
        simulateClick(backButton);
    }
}
