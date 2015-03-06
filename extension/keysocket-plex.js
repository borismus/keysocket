function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('button.next-btn');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playButton = document.querySelector('button.play-btn'),
            pauseButton;
        try {
            if (playButton.classList.contains('hidden')) {
                pauseButton = document.querySelector('button.pause-btn');
                simulateClick(pauseButton);
            } else {
                simulateClick(playButton);
            }
        } catch (e) {
            var playAllButton = document.querySelector('a.play-btn');
            simulateClick(playAllButton);
        }
    } else if (key === PREV) {
        var backButton = document.querySelector('button.previous-btn');
        simulateClick(backButton);
    } else if (key === STOP) {
        var stopButton = document.querySelector('button.stop-btn');
        simulateClick(stopButton);
    }
}
