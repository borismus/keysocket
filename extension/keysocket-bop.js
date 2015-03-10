function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('.icon-next');
    } else if (key === PLAY) {
        simulateSelectorClick('.wrapper-icon-play-pause');
    } else if (key === PREV) {
        simulateSelectorClick('.icon-previous');
    }
}
