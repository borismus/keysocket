function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('#dragonflyTransport .button.icon-fastForward');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector("#dragonflyTransport .button.playButton");
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('#dragonflyTransport .button.icon-fastBackward');
        simulateClick(backButton);
    }
}
