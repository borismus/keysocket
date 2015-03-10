function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('#play-next');
    } else if (key === PLAY) {
        simulateSelectorClick('#play-pause');
    } else if (key === PREV) {
        simulateSelectorClick('#play-prev');
    }
}
