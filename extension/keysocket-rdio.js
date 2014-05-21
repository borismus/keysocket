function onKeyPress(key) {
    if(key === NEXT) {
        var nextButton = document.querySelector('.left_controls .next');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.querySelector('.left_controls .play_pause');
        simulateClock(playPauseButton);
    } else if(key === PREV) {
        var backButton = document.querySelector('.left_controls .prev');
        simulateClick(backButton);
    }
}