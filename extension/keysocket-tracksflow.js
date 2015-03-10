function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('.js-rewind');
    } else if (key === PLAY) {
        simulateSelectorClick('.js-play');
    } else if (key === PREV) {
        simulateSelectorClick('.js-forward');
    }
}
