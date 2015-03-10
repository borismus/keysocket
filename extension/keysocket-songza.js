function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('#player .miniplayer-control-skip');
    } else if (key === PLAY) {
        simulateSelectorClick('#player .miniplayer-control-play-pause');
    }
}
