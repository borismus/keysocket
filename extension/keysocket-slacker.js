function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('#transport > li.skip-forward > a');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('#transport > li.playpause > a.play');
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('#transport > li.skip-back > a');
        simulateClick(backButton);
    }
}
