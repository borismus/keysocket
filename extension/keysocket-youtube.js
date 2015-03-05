function onKeyPress(key) {
	if(key === NEXT) {
		simulateClick(document.querySelector('.yt-uix-button-icon-playlist-bar-next,.yt-uix-button-icon-watch-appbar-play-next'));
	} else if(key === PREV) {
		simulateClick(document.querySelector('.yt-uix-button-icon-playlist-bar-prev,.yt-uix-button-icon-watch-appbar-play-prev'));
	}
	var video = document.querySelector('#movie_player');
	// The extension has no access to this function when using the HTML-5 <video>-player
	// but we can still access the controls on the <video>-element itself
	if(!video.getPlayerState) {
		video = document.querySelector('#movie_player video'); // HTML-5 <video>-player
		if(video.paused) {
			if(key === PLAY) {
				video.play();
			}
		} else {
			if(key === PLAY || key === STOP) {
				video.pause();
			}
		}
	} else {
		if(video.getPlayerState() === 2) {
			if(key === PLAY) {
				video.playVideo();
			}
		} else {
			if(key === PLAY || key === STOP) {
				video.pauseVideo();
			}
		}
	}
}