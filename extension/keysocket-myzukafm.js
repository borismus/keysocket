keySocket.init(
    "myzuka.me",
    {
        "play-pause": function () {
            var playButton = '.jp-play';
            var pauseButton = '.jp-pause';

            var isPlaying = document.querySelector(playButton).style.display === 'none';
            if (isPlaying) {
                var playPauseButton = document.querySelector(pauseButton);
            } else {
                playPauseButton = document.querySelector(playButton);
            }
            keySocket.simulateClick(playPauseButton);
        },
        prev: ".jp-previous",
        next: ".jp-next"
        // stop is omitted
    }
);