function onKeyPress(key) {
	if (this.jwplayer) {
		location.href = "javascript:window.jwplayer().play()";
	}
}
