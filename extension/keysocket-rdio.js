function onKeyPress(key) {
	if(key === NEXT) {
		simulateClick(document.querySelector('.left_controls .next'));
	} else if(key === PLAY) {
		simulateClick(document.querySelector('.left_controls .play_pause'));
	} else if(key === PREV) {
		simulateClick(document.querySelector('.left_controls .prev'));
	}
}
