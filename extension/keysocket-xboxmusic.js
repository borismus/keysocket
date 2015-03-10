function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('.iconPlayerNext');
    } else if (key === PLAY) {
        simulateSelectorClick('.iconPlayerPause, .iconPlayerPlay');
    } else if (key === PREV) {
        simulateSelectorClick('.iconPlayerPrevious');
    }
}

console.log('keysocket: Loading Xbox Music extension');
