console.log('keysocket: Loading Music Choice extension');

function onKeyPress(key) {
    if (key === PLAY) {
        simulateClick(document.querySelector('#audiomute'));
    }
}
