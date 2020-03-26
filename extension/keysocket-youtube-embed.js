keySocket.init(
    "youtube.embed",
    function (key) {
        if (key === keySocket.PLAY) {
            var playPauseButton = document.querySelector('.ytp-play-button');
            keySocket.simulateClick(playPauseButton);
        }
    }
);
