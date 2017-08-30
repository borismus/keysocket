function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('.nxt');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('.ply');
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('.prv');
        simulateClick(backButton);
    }
}