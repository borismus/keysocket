function onKeyPress(key) {
    if (key === PLAY) {
	    var playPauseButton = document.querySelector('#playstop');
	    simulateClick(playPauseButton);
    }
}
