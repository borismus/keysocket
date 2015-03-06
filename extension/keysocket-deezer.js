function onKeyPress(key) {
    if (document.getElementById('player_control_play')) { // old deezer style
        if (key === NEXT) {
            var nextButton = document.getElementById('player_control_next');
            simulateClick(nextButton);
        } else if (key === PLAY) {
            var isPlaying = document.getElementById('player_control_play').style.display === 'none';
            var playPauseButton = null;
            if (isPlaying) {
                playPauseButton = document.getElementById('player_control_pause');
            } else {
                playPauseButton = document.getElementById('player_control_play');
            }
            simulateClick(playPauseButton);
        } else if (key === PREV) {
            var backButton = document.getElementById('player_control_prev');
            simulateClick(backButton);
        }
    } else { // new deezer style
        if (key === NEXT) {
            var nextButton = document.getElementsByClassName('control-next')[0];
            simulateClick(nextButton);
        } else if (key === PLAY) {
            var isPlaying = document.getElementsByClassName('control-play')[0] ? false : true;
            var playPauseButton = null;
            if (isPlaying) {
                playPauseButton = document.getElementsByClassName('control-pause')[0];
            } else {
                playPauseButton = document.getElementsByClassName('control-play')[0];
            }
            simulateClick(playPauseButton);
        } else if (key === PREV) {
            var backButton = document.getElementsByClassName('control-prev')[0];
            simulateClick(backButton);
        }
    }
}
