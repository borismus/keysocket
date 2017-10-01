keySocket.init(
    "sowndhaus",
    {
        "play-pause": function () {
            var playButton = document.querySelector('.jp-play');
            var pauseButton = document.querySelector('.jp-pause');
            if (playButton.style.display === 'none') {
                keySocket.simulateClick(pauseButton);
            } else {
                keySocket.simulateClick(playButton);
            }
        },
        "prev": ".prev-button",
        "next": ".next-button"
        // stop is omitted
    }
);