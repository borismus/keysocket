function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('.pct-player-prev');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('.pct-player-play');
        var pausePauseButton = document.querySelector('.pct-player-pause');
        playPauseButton && simulateClick(playPauseButton) || simulateClick(pausePauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('.pct-player-next');
        simulateClick(backButton);
    }
}
