function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('#next', '#app-player');
    } else if (key === PLAY) {
        simulateSelectorClick('#play-pause', '#app-player');
    } else if (key === PREV) {
        simulateSelectorClick('#previous', '#app-player');
    }
}
