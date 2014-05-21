function onKeyPress(key) {
    if(key === NEXT) {
        var nextButton = document.getElementById('player_control_next');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var isPlaying = document.getElementById('player_control_play').style.display === 'none';
        var playPauseButton = null;
        if(isPlaying) {
          playPauseButton = document.getElementById('player_control_pause');
        } else {
          playPauseButton = document.getElementById('player_control_play');
        }
        simulateClick(playPauseButton);
    } else if(key === PREV) {
        var backButton = document.getElementById('player_control_next');
        simulateClick(backButton);
    }
}