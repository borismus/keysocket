function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('[data-function=next]');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('[data-function=play]');
        simulateClick(playPauseButton);
    }
}

console.log('keysocket: Loading Superplayer extension');
