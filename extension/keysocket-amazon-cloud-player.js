function onKeyPress(key) {
	if(key === NEXT) {
		simulateClick(document.querySelector('[playeraction=next]'));
	} else if(key === PLAY) {
		simulateClick(document.querySelector('[playeraction=togglePlay]'));
	} else if(key === PREV) {
		simulateClick(document.querySelector('[playeraction=previous]'));
	}
}