function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('.scrub-controls .next');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playButtonElement = document.querySelector('.scrub-controls .play');
        simulateClick(playButtonElement);
    } else if (key === PREV) {
        var backButton = document.querySelector('.scrub-controls .prev');
        simulateClick(backButton);
    }
}
