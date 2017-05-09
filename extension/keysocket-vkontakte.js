function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('button.top_audio_player_next');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('button.top_audio_player_play');
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('button.top_audio_player_prev');
        simulateClick(backButton);
    }
}