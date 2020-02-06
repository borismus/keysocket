keySocket.init(
    "prime",
    function(key) {
        if (key === keySocket.NEXT) {
            var nextButton = document.querySelector(".fastSeekForward > img");
            keySocket.simulatePointer(nextButton);
        } else if (key === keySocket.PLAY) {
            var playPauseButton = document.querySelector(".playIcon > img, .pausedIcon > img");
            keySocket.simulatePointer(playPauseButton);
        } else if (key === keySocket.PREV) {
            var backButton = document.querySelector(".fastSeekBack > img");
            keySocket.simulatePointer(backButton);
        }
    }
);