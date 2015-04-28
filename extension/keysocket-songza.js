function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('#player .miniplayer-control-skip');
    } else if (key === PLAY) {
        simulateClick('#player .miniplayer-control-play-pause');
    }
}
