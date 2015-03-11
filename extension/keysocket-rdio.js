function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('.left_controls .next');
    } else if (key === PLAY) {
        simulateClick('.left_controls .play_pause');
    } else if (key === PREV) {
        simulateClick('.left_controls .prev');
    }
}
