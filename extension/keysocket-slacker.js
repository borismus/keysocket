function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('#playerSkipButton');
    } else if (key === PLAY) {
        simulateSelectorClick('#playerPlayPauseButton');
    } else if (key === PREV) {
        simulateSelectorClick('#playerSkipBackButton');
    }
}
