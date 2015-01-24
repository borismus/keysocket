function onKeyPress(key) {
    if(key === PREV) {
        var prevButton = document.getElementById('PreviousTrack');
        simulateClick(prevButton);
    } else if(key === NEXT) {
        var nextButton = document.getElementById('NextTrack');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.getElementsByClassName('PlayTrack')[0];
        var isPlaying = playPauseButton.style.display === 'none';
        if(isPlaying) {
          playPauseButton = document.getElementsByClassName('PauseTrack')[0];
        }
        simulateClick(playPauseButton);
    }
}
