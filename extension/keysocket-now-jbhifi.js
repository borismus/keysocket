function onKeyPress(key) {
    if(key === NEXT) {
        var nextButton = document.querySelector('li.next');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.querySelector('li.play-pause');
        simulateClick(playPauseButton);
    } else if(key === STOP) {
        var playStopButton = document.querySelector('li.playing');
        if (playStopButton != null) simulateClick(playStopButton);
    } else if(key === PREV) {
        var backButton = document.querySelector('li.prev');
        simulateClick(backButton);
    }
}

console.log("keysocket: Loading JB Hi-Fi Now extension");