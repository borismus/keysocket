function onKeyPress(key) {
    if(key === NEXT) {
        var nextButton = document.querySelector('button.play-controls__next');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playButton = document.querySelector('button.play-controls__play');
        var pauseButton = document.querySelector('button.play-controls__pause');
        if(isVisible(playButton)) {
            simulateClick(playButton);
        } else {
            simulateClick(pauseButton)
        }
    } else if(key === PREV) {
        var backButton = document.querySelector('button.play-controls__previous');
        simulateClick(backButton);
    } else if(key === STOP) {
        var playButton = document.querySelector('button.play-controls__play');
        var pauseButton = document.querySelector('button.play-controls__pause');
        if(!isVisible(playButton)) {
            simulateClick(pauseButton)
        }
    }
}

function isVisible(el) {
    return el.offsetParent != null;
}
