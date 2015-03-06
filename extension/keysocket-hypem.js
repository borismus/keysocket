function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick(document.querySelector('#playerNext'));
    } else if (key === PLAY) {
        simulateClick(document.querySelector('#playerPlay'));
    } else if (key === PREV) {
        simulateClick(document.querySelector('#playerPrev'));
    }
}
