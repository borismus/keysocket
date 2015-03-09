function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('button.play-controls__next');
    } else if (key === PLAY) {
        if (document.querySelector('button.play-controls__play').offsetParent != null) {
            simulateSelectorClick('button.play-controls__play');
        } else {
            simulateSelectorClick('button.play-controls__pause');
        }
    } else if (key === PREV) {
        simulateSelectorClick('button.play-controls__previous');
    }
}
