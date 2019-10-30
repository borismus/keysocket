keySocket.init(
    "youtube.music",
    function (key) {
        if (key === keySocket.NEXT) {
            var nextButton = document.querySelector('#left-controls > div > paper-icon-button.next-button');
            keySocket.simulateClick(nextButton);
        } else if (key === keySocket.PLAY) {
            var playPauseButton = document.querySelector('#left-controls > div > paper-icon-button.play-pause-button');
            playPauseButton.click();
        } else if (key === keySocket.PREV) {
            var backButton = document.querySelector('#left-controls > div > paper-icon-button.previous-button');
            keySocket.simulateClick(backButton);
        } else if (key === keySocket.STOP) {
            var stopButton = document.querySelector('#left-controls > div > paper-icon-button.play-pause-button');
            stopButton.click();
        }
    }
);
