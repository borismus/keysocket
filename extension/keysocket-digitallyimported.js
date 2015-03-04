function onKeyPress(key) {
    if(key === PLAY) {
        var playPauseButton = document.querySelector('#webplayer-region .controls a:first-child');
        simulateClick(playPauseButton);
    }
}