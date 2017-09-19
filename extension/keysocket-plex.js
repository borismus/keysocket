function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('button[aria-label="Next"]');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playButton = document.querySelector('button[aria-label="Play"]'),
            pauseButton;
        if (playButton === null) {
            pauseButton = document.querySelector('button[aria-label="Pause"]');
            simulateClick(pauseButton);
        } else {
            simulateClick(playButton);
        }
    } else if (key === PREV) {
        var backButton = document.querySelector('button[aria-label="Previous"]');
        simulateClick(backButton);
    }
}
