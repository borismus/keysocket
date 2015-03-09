function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('[data-id=forward]');
    } else if (key === PLAY) {
        simulateSelectorClick('[data-id=play-pause]');
    } else if (key === PREV) {
        simulateSelectorClick('[data-id=rewind]');
    }
}

console.log('keysocket: Loading Gmusic extension');
