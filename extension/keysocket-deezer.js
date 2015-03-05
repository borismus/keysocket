function onKeyPress(key) {
	if(document.querySelector('#player_control_play')) { // old deezer style
		if(key === NEXT) {
			simulateClick(document.querySelector('#player_control_next'));
		} else if(key === PLAY) {
			simulateClick(document.querySelector('#player_control_play').style.display === 'none' ? document.querySelector('#player_control_pause') : document.querySelector('#player_control_play'));
		} else if(key === PREV) {
			simulateClick(document.querySelector('#player_control_prev'));
		} else if(key === STOP) {
			simulateClick(document.querySelector('#player_control_pause'));
		}
	} else { // new deezer style
		if(key === NEXT) {
			simulateClick(document.querySelector('.control-next')[0]);
		} else if(key === PLAY) {
			simulateClick(document.querySelector('.control-play')[0] ? document.querySelector('.control-play')[0] : document.querySelector('.control-pause')[0]);
		} else if(key === PREV) {
			simulateClick(document.querySelector('.control-prev')[0]);
		} else if(key === STOP) {
			simulateClick(document.querySelector('.control-pause')[0]);
		}
	}
}
