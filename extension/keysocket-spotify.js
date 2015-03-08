function onKeyPress(key) {
    if (key === NEXT) {
        clickHelper('#next', '#app-player');
    } else if (key === PLAY) {
        clickHelper('#play-pause', '#app-player');
    } else if (key === PREV) {
        clickHelper('#previous', '#app-player');
    }
}
