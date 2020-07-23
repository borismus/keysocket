keySocket.init(
    "jiosaavan",
    function (key) {
		if (key === keySocket.NEXT) {
			var nextButton = document.querySelector('span.o-icon-next');
			keySocket.simulateClick(nextButton);
		} else if (key === keySocket.PLAY) {
			var playPauseButton = document.querySelector('span.o-icon-play, span.o-icon-pause');
			keySocket.simulateClick(playPauseButton);
		} else if (key === keySocket.PREV) {
			var backButton = document.querySelector('span.o-icon-previous');
			keySocket.simulateClick(backButton);
		} else if (key === keySocket.STOP) {
			var stopButton = document.querySelector('span.o-icon-pause');
			keySocket.simulateClick(stopButton);
		}
    }
);