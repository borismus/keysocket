function onKeyPress(key) {
	if(key === NEXT) {
		simulateClick(document.querySelector(".player-next [type='button']"));
	} else if(key === PLAY) {
		simulateClick(document.querySelector(".player-play [type='button']"));
	} else if(key === PREV) {
		simulateClick(document.querySelector(".player-prev [type='button']"));
	}
}