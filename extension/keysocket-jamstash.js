function onKeyPress(key) {
	if(key === NEXT) {
		simulateClick(document.querySelector('#NextTrack'));
	} else if(key === PLAY) {
		simulateClick((document.querySelector('.PlayTrack')[0]).style.display === 'none' ? document.querySelector('.PauseTrack')[0] : document.querySelector('.PlayTrack')[0]);
	} else if(key === PREV) {
		simulateClick(document.querySelector('#PreviousTrack'));
	} else if(key === STOP) {
		simulateClick(document.querySelector('.PauseTrack')[0]);
	}
}