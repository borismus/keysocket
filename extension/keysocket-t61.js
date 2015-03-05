function onKeyPress(key) {
	if(key === NEXT) {
		simulateClick(document.querySelector('#large_next_song_button'));
	} else if(key === PLAY) {
		simulateClick(document.querySelector('#pause_button').style.display !== 'none' ? document.querySelector('#pause_button') : document.querySelector('#play_button'));
	} else if(key === PREV) {
		simulateClick(document.querySelector('#large_previous_song_button'));
	} else if(key === STOP) {
		simulateClick(document.querySelector('#pause_button'));
	}
}