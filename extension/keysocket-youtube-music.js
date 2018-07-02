keySocket.init(
    "youtube.music",
    function (key) {
        if (key === keySocket.NEXT) {
            var nextButton = document.querySelector('#left-controls > div > paper-icon-button:nth-child(3)');
            keySocket.simulateClick(nextButton);
        } else if (key === keySocket.PLAY) {
            var playPauseButton = document.querySelector('#left-controls > div > paper-icon-button.play-pause-button.style-scope.ytmusic-player-bar');
            playPauseButton.click();
        } else if (key === keySocket.PREV) {
            var backButton = document.querySelector('#left-controls > div > paper-icon-button:nth-child(1)');
            keySocket.simulateClick(backButton);
        } else if (key === keySocket.STOP) {
            var stopButton = document.querySelector('#left-controls > div > paper-icon-button.play-pause-button.style-scope.ytmusic-player-bar');
            stopButton.click();
        }
    }
);
