function onKeyPress(key) {
    if(key === NEXT) {
        var nextButton = document.querySelector('div.skipButton > a');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var isPlaying = document.querySelector('div.playButton').style.display !== 'block';
        var playPauseButton = null;
        if(isPlaying) {
          playPauseButton = document.querySelector('div.pauseButton > a');
        } else {
          playPauseButton = document.querySelector('div.playButton > a');
        }
        simulateClick(playPauseButton);
    } else if(key === STOP) {
        var isPlaying = document.querySelector('div.playButton').style.display !== 'block';
        var playPauseButton = null;
        if(isPlaying) {
          playPauseButton = document.querySelector('div.pauseButton > a');
		  simulateClick(playPauseButton);
        }
    }
}
