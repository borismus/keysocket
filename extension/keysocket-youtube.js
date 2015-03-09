function onKeyPress(key) {
    var video = document.querySelector('#movie_player');
    if (!video.getPlayerState) { // HTML5
        if (key === NEXT) {
            var nextButton = document.querySelector('.ytp-button-next');
            simulateClick(nextButton);
        } else if (key === PLAY) {
            var playPauseButton = document.querySelector('.ytp-button-pause, .ytp-button-play');
            simulateClick(playPauseButton);
        } else if (key === PREV) {
            var backButton = document.querySelector('.ytp-button-prev');
            simulateClick(backButton);
        }
    } else { // Flash
        if (key === PLAY) {
            if (video.getPlayerState() === 2) {
                video.playVideo();
            } else {
                video.pauseVideo();
            }
        }
    }
}