function onKeyPress(key) {
	var frame = document.querySelector('[name=content]');
	if(key === NEXT) {
		simulateClick(frame.contentDocument.querySelector('.btn-ff'));
	} else if(key === PLAY) {
		simulateClick(frame.contentDocument.querySelector('.btn-playpause'));
	}
}