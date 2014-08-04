function onKeyPress(key) {
    if(key === NEXT) {
        window.nextTrack();
    } else if(key === PLAY) {
        window.togglePlay();
    } else if(key === PREV) {
        window.prevTrack();
    }
}