function onKeyPress(key) {
    var video = document.querySelector('#movie_player');
    if (!video.getPlayerState) { // HTML5 Player
        if (key === NEXT) {
            simulateClick('.ytp-button-next');
        } else if (key === PLAY) {
            simulateClick('.ytp-button-pause, .ytp-button-play');
        } else if (key === PREV) {
            simulateClick('.ytp-button-prev');
        }
    } else { // Flash Player
        if (key === PLAY) {
            if (video.getPlayerState() === 2) {
                video.playVideo();
            } else {
                video.pauseVideo();
            }
        }
    }
}
