function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('[playeraction=next]');
    } else if (key === PLAY) {
        simulateSelectorClick('[playeraction=togglePlay]');
    } else if (key === PREV) {
        simulateSelectorClick('[playeraction=previous]');
    }
}
