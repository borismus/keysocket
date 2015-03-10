function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('#J_nextBtn');
    } else if (key === PLAY) {
        simulateSelectorClick('#J_playBtn');
    } else if (key === PREV) {
        simulateSelectorClick('#J_prevBtn');
    }
}
