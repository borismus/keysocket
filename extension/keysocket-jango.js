function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('#btn-ff button.pcb');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('#btn-playpause button.pcb');
        simulateClick(playPauseButton);
    }
}
