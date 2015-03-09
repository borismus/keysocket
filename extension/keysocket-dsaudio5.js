function onKeyPress(key) {
    if (key === PREV) {
        simulateSelectorClick(".player-prev [type='button']");
    } else if (key === NEXT) {
        simulateSelectorClick(".player-next [type='button']");
    } else if (key === PLAY) {
        simulateSelectorClick(".player-play [type='button']");
    }
}

console.log('keysocket: Loading Synology extension');
