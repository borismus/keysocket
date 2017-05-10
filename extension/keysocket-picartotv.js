function onKeyPress(key) {
    if (key === PLAY) {
        var playPauseButtons = document.getElementsByClassName('vjs-play-control');
        for (var i = playPauseButtons.length - 1; i >= 0; i--) {
        	simulateClick(playPauseButtons[i]);
        }
    }
}
