keySocket.init(
    "naxosmusiclibrary",
    {
        "play-pause": function () {
            var isPlaying = document.querySelector('#ctrl-play').style.display === 'none';
            if (isPlaying) {
                var playPauseButton = document.querySelector('#ctrl-pause');
            } else {
                playPauseButton = document.querySelector('#ctrl-play');
            }
            keySocket.simulateClick(playPauseButton);
        },
        prev: "#ctrl-previous",
        next: "#ctrl-next"
        // stop is omitted
    }
);