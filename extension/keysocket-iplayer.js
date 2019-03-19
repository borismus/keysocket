keySocket.init(
    "iplayer",
    function(key) {
        if (key === keySocket.PLAY) {
			var playPauseButton = document.querySelector("button[aria-label=\"Play\"], button[aria-label=\"Pause\"");
            keySocket.simulateClick(playPauseButton, {complex:true});
        }
    }
);