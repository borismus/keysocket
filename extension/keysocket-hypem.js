function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('#playerNext');
    } else if (key === PLAY) {
        simulateClick('#playerPlay');
    } else if (key === PREV) {
        simulateClick('#playerPrev');
    }
}
