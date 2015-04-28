function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('.icon-next');
    } else if (key === PLAY) {
        simulateClick('.wrapper-icon-play-pause');
    } else if (key === PREV) {
        simulateClick('.icon-previous');
    }
}
