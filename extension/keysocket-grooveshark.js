function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('#play-next');
    } else if (key === PLAY) {
        simulateClick('#play-pause');
    } else if (key === PREV) {
        simulateClick('#play-prev');
    }
}
