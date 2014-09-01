function onKeyPress(key) {
    if(key === NEXT) {
        var nextButton = document.getElementById('J_nextBtn');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.getElementById('J_playBtn');
        simulateClick(playPauseButton);
    } else if(key === PREV) {
        var backButton = document.getElementById('J_prevBtn');
        simulateClick(backButton);
    }
}