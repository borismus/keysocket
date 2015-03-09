console.log('keysocket: Loading Music Choice extension');

function onKeyPress(key) {
    if (key === PLAY) {
        simulateSelectorClick('#audiomute');
    }
}
