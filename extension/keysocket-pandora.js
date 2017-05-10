function onKeyPress(key) {
    if (key === NEXT) {
        var skipButton = document.querySelector('div.Tuner__Control__Skip span button');
        simulateClick(skipButton);
    } else if (key === PREV) {
        var replayButton = document.querySelector('div.Tuner__Control__Replay span button');
        simulateClick(replayButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('div.Tuner__Control__Play span button');
        simulateClick(playPauseButton);
    } else if (key === STOP) {
        stopButton = document.querySelector('div.Tuner__Control__ThumbDown span button');
        simulateClick(stopButton);
    }
}
