function onKeyPress(key) {
    var video = document.querySelector('#movie_player');
    if (!video.getPlayerState) { // HTML5 Player
        if (key === NEXT) {
            var nextButton = document.querySelector('.ytp-button-next');
            simulateClick(nextButton);
        } else if (key === PLAY) {
            var playPauseButton = document.querySelector('.ytp-button-pause, .ytp-button-play');
            simulateClick(playPauseButton);
        } else if (key === PREV) {
            var backButton = document.querySelector('.ytp-button-prev');
            simulateClick(backButton);
        } else if (key === STOP) {
            var stopButton = document.querySelector('.ytp-button-pause');
            simulateClick(stopButton);
        }
    } else { // Flash Player
        if (key === PLAY) {
            if (video.getPlayerState() === 2) {
                video.playVideo();
            } else {
                video.pauseVideo();
            }
        } else if (key === STOP) {
            video.pauseVideo();
        }
    }
}
