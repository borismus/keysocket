function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('li.next');
    } else if (key === PLAY) {
        simulateClick('li.play-pause');
    } else if (key === STOP) {
        if (document.querySelector('li.playing') != null) simulateClick('li.playing');
    } else if (key === PREV) {
        simulateClick('li.prev');
    }
}

console.log('keysocket: Loading JB Hi-Fi Now extension');
