function onKeyPress(key){
    if(key === NEXT) {
        var nextButton = document.querySelector('#player .miniplayer-control-skip');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.querySelector('#player .miniplayer-control-play-pause');
        simulateClick(playPauseButton);
    } 
}