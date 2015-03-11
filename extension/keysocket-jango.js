function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('#btn-ff', '[name=content]');
    } else if (key === PLAY) {
        simulateClick('#btn-playpause', '[name=content]');
    }
}
