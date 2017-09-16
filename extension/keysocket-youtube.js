keySocket.init(
    "youtube",
    function (key) {
        var video = document.querySelector('#movie_player');

        if (!video.getPlayerState) { // HTML5 Player
            if (key === keySocket.NEXT) {
                var nextButton = document.querySelector('.ytp-button-next, .ytp-next-button');
                keySocket.simulateClick(nextButton);
            } else if (key === keySocket.PLAY) {
                var playPauseButton = document.querySelector('.ytp-button-pause, .ytp-button-play, .ytp-pause-button, .ytp-play-button');
                keySocket.simulateClick(playPauseButton);
            } else if (key === keySocket.PREV) {
                var backButton = document.querySelector('.ytp-button-prev, .ytp-prev-button');
                keySocket.simulateClick(backButton);
            } else if (key === keySocket.STOP) {
                var stopButton = document.querySelector('.ytp-button-pause');
                keySocket.simulateClick(stopButton);
            }
        } else { // Flash Player
            if (key === keySocket.PLAY) {
                if (video.getPlayerState() === 2) {
                    video.playVideo();
                } else {
                    video.pauseVideo();
                }
            } else if (key === keySocket.STOP) {
                video.pauseVideo();
            }
        }
    }
);