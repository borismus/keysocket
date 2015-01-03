function onKeyPress(key) {
    if(key === NEXT) {
        var nextButton = document.getElementsByClassName('icon-next')[0];
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.getElementsByClassName('wrapper-icon-play-pause')[0];
        simulateClick(playPauseButton);
    } else if(key === PREV) {
        var backButton = document.getElementsByClassName('icon-previous')[0];
        simulateClick(backButton);
    }
}