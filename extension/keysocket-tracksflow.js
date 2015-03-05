function onKeyPress(key) {
	if(key === NEXT) {
		simulateClick(document.querySelector('.js-rewind')[0]);
	} else if(key === PLAY) {
		simulateClick(document.querySelector('.js-play')[0]);
	} else if(key === PREV) {
		simulateClick(document.querySelector('.js-forward')[0]);
	}
}