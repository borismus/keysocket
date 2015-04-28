function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('[data-id=forward]');
    } else if (key === PLAY) {
        simulateClick('[data-id=play-pause]');
    } else if (key === PREV) {
        simulateClick('[data-id=rewind]');
    }
}

console.log('keysocket: Loading Gmusic extension');
