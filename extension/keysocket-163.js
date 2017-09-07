function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('.m-playbar .nxt');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('.m-playbar .ply');
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('.m-playbar .prv');
        simulateClick(backButton);
    }
}