keySocket.init(
    "jamstash",
    {
        "play-pause": function () {
            var playPauseButton = document.getElementsByClassName('PlayTrack')[0];
            var isPlaying = playPauseButton.style.display === 'none';
            if (isPlaying) {
                playPauseButton = document.getElementsByClassName('PauseTrack')[0];
            }
            keySocket.simulateClick(playPauseButton);
        },
        "prev": function () {
            var prev = document.getElementById('PreviousTrack');
            keySocket.simulateClick(prev);
        },
        "next": function () {
            var next = document.getElementById('NextTrack');
            keySocket.simulateClick(next);
        }
        // stop is omitted
    }
);
