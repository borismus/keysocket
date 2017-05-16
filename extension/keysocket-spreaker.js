function onKeyPress(key){
    if(key === NEXT) {
        var nextButton = document.getElementById('pl_next_button');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.getElementById('pl_play_button');
        simulateClick(playPauseButton);
    } else if(key === PREV) {
        var backButton = document.getElementById('pl_prev_button');
        simulateClick(backButton);
    }
}
