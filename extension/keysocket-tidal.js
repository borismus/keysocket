// not tested (account is needed)

keySocket.init(
    "tidal",
    {
        "play-pause": function () {
            var playButton = document.querySelector('button.play-controls__play');
            var pauseButton = document.querySelector('button.play-controls__pause');
            if (playButton.offsetParent !== null) {
                keySocket.simulateClick(playButton);
            } else {
                keySocket.simulateClick(pauseButton);
            }
        },
        "prev": "button.play-controls__previous",
        "next": "button.play-controls__next"
        // stop is omitted
    }
);