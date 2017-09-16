keySocket.init(
    "qobuz",
    {
        "play-pause": function () {
            var playPauseButton = document.querySelector('.pct-player-play');
            var pausePauseButton = document.querySelector('.pct-player-pause');
            playPauseButton && keySocket.simulateClick(playPauseButton) || keySocket.simulateClick(pausePauseButton);
        },
        "prev": ".pct-player-prev",
        "next": ".pct-player-next"
        // stop is omitted
    }
);