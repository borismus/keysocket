function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('.skipControl__next');
    } else if (key === PLAY) {
        simulateSelectorClick('.playControl');
    } else if (key === PREV) {
        simulateSelectorClick('.skipControl__previous');
    }
}
