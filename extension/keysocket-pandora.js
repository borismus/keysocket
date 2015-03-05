function onKeyPress(key) {
	if(key === NEXT) {
		simulateClick(document.querySelector('div.skipButton > a'));
	} else if(key === PLAY) {
		simulateClick(document.querySelector('div.playButton').style.display !== 'block' ? document.querySelector('div.pauseButton > a') : document.querySelector('div.playButton > a'));
	} else if(key === STOP) {
		simulateClick(document.querySelector('div.pauseButton > a'));
	}
}