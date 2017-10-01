keySocket.init(
    "picarto.tv",
    {
        "play-pause": function () {
            var playPauseButtons = document.getElementsByClassName('vjs-play-control');
            for (var i = playPauseButtons.length - 1; i >= 0; i--) {
                keySocket.simulateClick(playPauseButtons[i]);
            }
        }
        // prev is skipped
        // next is skipped
        // stop is omitted
    }
);