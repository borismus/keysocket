keySocket.init(
    "builtin-player",
    {
        "play-pause": function () {
            var videoElement = document.getElementsByTagName("video")[0];

            if (videoElement.paused) {
                videoElement.play();
            }
            else {
                videoElement.pause();
            }
        }
        // prev is skipped
        // next is skipped
        // stop is omitted
    }
);