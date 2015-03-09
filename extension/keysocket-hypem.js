function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('#playerNext');
    } else if (key === PLAY) {
        simulateSelectorClick('#playerPlay');
    } else if (key === PREV) {
        simulateSelectorClick('#playerPrev');
    }
}
