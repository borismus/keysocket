function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('.next-button');
        simulateClick(nextButton);
    } else if (key === PLAY) {
	    var playButton = document.querySelector('.jp-play');
	    var pauseButton = document.querySelector('.jp-pause');
	    if (playButton.style.display === 'none') {
		    simulateClick(pauseButton);
	    } else {
		    simulateClick(playButton);
	    }
    } else if (key === PREV) {
        var backButton = document.querySelector('.prev-button');
        simulateClick(backButton);
    }
}
