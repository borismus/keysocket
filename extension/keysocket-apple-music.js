keySocket.init(
    "apple-music",
    {
        "play-pause": function () {
            var playButton = document.querySelector('button[aria-label="Play"]');
            var pauseButton = document.querySelector('button[aria-label="Pause"]');
            if (pauseButton) {
                keySocket.simulateClick(pauseButton);
            } else {
                keySocket.simulateClick(playButton);
            }
        },
        "prev": function(){
            keySocket.simulateClick(document.querySelector('button[aria-label="Previous"]'));
        },
        "next": function(){
            keySocket.simulateClick(document.querySelector('button[aria-label="Next"]'));
        }
        // stop is omitted
    }
);
