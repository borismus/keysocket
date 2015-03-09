function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('li.next');
    } else if (key === PLAY) {
        simulateSelectorClick('li.play-pause');
    } else if (key === STOP) {
        if (document.querySelector('li.playing') != null) simulateSelectorClick('li.playing');
    } else if (key === PREV) {
        simulateSelectorClick('li.prev');
    }
}

console.log('keysocket: Loading JB Hi-Fi Now extension');
