function onKeyPress(key) {
    if (key === NEXT) {
        clickHelper('.skipControl__next');
    } else if (key === PLAY) {
        simulateClick('.playControl');
    } else if (key === PREV) {
        simulateClick('.skipControl__previous');
    }
}
