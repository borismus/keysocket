function onKeyPress(key){
    if(key === NEXT) {
        var nextButton = document.querySelector('.skipControl__next');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.querySelector('.playControl');
        simulateClick(playPauseButton);
    } else if(key === STOP) {
        var playPauseButton = document.querySelector('.playControl.playing');
        if (playPauseButton != null) simulateClick(playPauseButton);
    } else if(key === PREV) {
        var backButton = document.querySelector('.skipControl__previous');
        simulateClick(backButton);
    }
}
