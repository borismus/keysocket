function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('.iconPlayerNext');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('.iconPlayerPause') || document.querySelector('.iconPlayerPlay');
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('.iconPlayerPrevious');
        simulateClick(backButton);
    }
}

console.log('keysocket: Loading Groove Music extension');
