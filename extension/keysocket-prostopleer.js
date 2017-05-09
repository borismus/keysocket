function onKeyPress(key) {
    if (key === PREV) {
        simulateClick(document.querySelector('#rw'));
    } else if (key === NEXT) {
        simulateClick(document.querySelector('#fw'));
    } else if (key === PLAY) {
        simulateClick(document.querySelector('#play'));
    }
}