var playButton = '.jp-play';
var pauseButton = '.jp-pause'
var nextButton = '.jp-next';
var prevButton = '.jp-previous';

function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick(document.querySelector(nextButton));
    } else if (key === PLAY) {
        var isPlaying = document.querySelector(playButton).style.display == 'none';
        var playPauseButton = null;
        if (isPlaying) {
            playPauseButton = document.querySelector(pauseButton);
        } else {
            playPauseButton = document.querySelector(playButton);
        }
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        simulateClick(document.querySelector(prevButton));
    }
}