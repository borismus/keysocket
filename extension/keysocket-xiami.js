function onKeyPress(key) {
	if(key === NEXT) {
		simulateClick(document.querySelector('#J_nextBtn'));
	} else if(key === PLAY) {
		simulateClick(document.querySelector('#J_playBtn'));
	} else if(key === PREV) {
		simulateClick(document.querySelector('#J_prevBtn'));
	}
}