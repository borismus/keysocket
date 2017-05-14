function onKeyPress(key) {
    var controls = document.findElementById("playControls");
    if (key === NEXT) {
        var nextButton = controls.querySelector('.next');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playButton = controls.querySelector('.play');
        simulateClick(playButton);
    } else if (key === PREV) {
        var backButton = controls.querySelector('.previous');
        simulateClick(backButton);
    }
}
