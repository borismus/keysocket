function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('[data-control=next]');
    } else if (key === PLAY) {
        simulateClick('[data-control=togglePause]');
    } else if (key === PREV) {
        simulateClick('[data-control=prev]');
    }
}

console.log('keysocket: Loading Phishtracks extension');
