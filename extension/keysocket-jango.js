function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('#btn-ff', '[name=content]');
    } else if (key === PLAY) {
        simulateSelectorClick('#btn-playpause', '[name=content]');
    }
}
