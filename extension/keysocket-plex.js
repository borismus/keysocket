// can't simulate click, not working

keySocket.init(
    "plex",
    function(key) {
        if (key === keySocket.NEXT) {
            var nextButton = document.querySelector("button[aria-label=\"Next\"]");
            keySocket.simulateClick(nextButton, {complex:true});
        } else if (key === keySocket.PLAY) {
            var playPauseButton = document.querySelector("button[aria-label=\"Play\"], button[aria-label=\"Pause\"");
            keySocket.simulateClick(playPauseButton, {complex:true});
        } else if (key === keySocket.PREV) {
            var backButton = document.querySelector("button[aria-label=\"Previous\"]");
            keySocket.simulateClick(backButton, {complex:true});
        }
    }
);