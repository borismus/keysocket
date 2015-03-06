function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.getElementById('large_next_song_button');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var isPlaying = document.getElementById('pause_button').style.display !== 'none';
        var playPauseButton = null;
        if (isPlaying) {
            playPauseButton = document.getElementById('pause_button');
        } else {
            playPauseButton = document.getElementById('play_button');
        }
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.getElementById('large_previous_song_button');
        simulateClick(backButton);
    }
}
