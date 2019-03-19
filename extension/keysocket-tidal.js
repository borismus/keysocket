// Tested on Brave Version 0.61.51 Chromium: 73.0.3683.75 (Official Build) (64-bit)

keySocket.init(
    "tidal",
    {
        "play-pause": function () {
            var playButton = document.querySelectorAll('[data-test=play]')[0];
            var pauseButton = document.querySelectorAll('[data-test=pause]')[0];
            if (playButton) {
                keySocket.simulateClick(playButton);             
            } else {
                keySocket.simulateClick(pauseButton);
            }
        },
        "prev": "[data-test=previous]",
        "next": "[data-test=next]"
        // stop is omitted
    }
);