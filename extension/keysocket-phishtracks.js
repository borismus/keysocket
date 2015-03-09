function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('[data-control=next]');
    } else if (key === PLAY) {
        simulateSelectorClick('[data-control=togglePause]');
    } else if (key === PREV) {
        simulateSelectorClick('[data-control=prev]');
    }
}

console.log('keysocket: Loading Phishtracks extension');
