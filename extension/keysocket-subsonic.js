function onKeyPress(key) {
	if (this.jwplayer) {
		if (key === NEXT) {
			var playPauseButton = document.querySelector('img[src="icons/default_dark/forward.png"]');
			simulateClick(playPauseButton);
		} else if (key === PLAY) {
      location.href = "javascript:window.jwplayer().play()";
		} else if (key === PREV) {
			var backButton = document.querySelector('img[src="icons/default_dark/back.png"]');
			simulateClick(backButton);
		}
	}
}
