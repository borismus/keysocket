function onKeyPress(key) {
	if(key === NEXT) {
		simulateClick(document.querySelector('[data-id=forward]'));
	} else if(key === PLAY) {
		simulateClick(document.querySelector('[data-id=play-pause]'));
	} else if(key === PREV) {
		simulateClick(document.querySelector('[data-id=rewind]'));
	} else if(key === STOP) {
		if(document.querySelector('[data-id=play-pause].playing') != null) simulateClick(document.querySelector('[data-id=play-pause].playing'));
	}
}