keySocket.init(
    "spotify",
    function (key) {
        if (key === keySocket.NEXT) {
            var nextButton = document.querySelector(`[data-testid="control-button-skip-forward"]`);
            nextButton.click();
        } else if (key === keySocket.PLAY) {
			var playButton = document.querySelector(`[data-testid="control-button-play"]`);
            var pauseButton = document.querySelector(`[data-testid="control-button-pause"]`);
			if (playButton === null) {
				pauseButton.click();
			} else if (pauseButton === null) {
				playButton.click();
			} else {
				console.log("Could not find play or pause buttons..");
			}
        } else if (key === keySocket.PREV) {
            var backButton = document.querySelector(`[aria-label="Previous"]`);
            backButton.click();
        } else if (key === keySocket.STOP) {
            var stopButton = document.querySelector(`[data-testid="control-button-pause"]`);
            stopButton.click();
        }
    }
);
