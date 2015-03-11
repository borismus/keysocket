function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('#next', '#app-player');
    } else if (key === PLAY) {
        simulateClick('#play-pause', '#app-player');
    } else if (key === PREV) {
        simulateClick('#previous', '#app-player');
    }
}
