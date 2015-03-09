function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('.left_controls .next');
    } else if (key === PLAY) {
        simulateSelectorClick('.left_controls .play_pause');
    } else if (key === PREV) {
        simulateSelectorClick('.left_controls .prev');
    }
}
