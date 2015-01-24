function onKeyPress(key) {
	if(key == NEXT) {
		var nextbutton = document.querySelector('div.player_wrapper > a.next');
		simulateClick(nextbutton);
	} else if(key == PREV) {
		var prevbutton = document.querySelector('div.player_wrapper > a.prev');
		simulateClick(prevbutton);
	} else if(key == PLAY) {
		var playbutton = document.querySelector('div.player_wrapper > a.playPause.pause');
		var pausebutton = document.querySelector('div.player_wrapper > a.playPause.play');
		if(playbutton)
			simulateClick(playbutton);
		else
			simulateClick(pausebutton);
	}
}