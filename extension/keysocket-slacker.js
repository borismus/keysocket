function onKeyPress(key) {
    if(key === NEXT) {
        var nextButton = document.getElementById('playerSkipButton');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.getElementById('playerPlayPauseButton');
        simulateClick(playPauseButton);
    } else if(key === PREV) {
        var backButton = document.getElementById('playerSkipBackButton');
        simulateClick(backButton);
    }
}