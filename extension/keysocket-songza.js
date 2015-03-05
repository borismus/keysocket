function onKeyPress(key) {
    if(key === NEXT) {
        simulateClick(document.querySelector('#player .miniplayer-control-skip'));
    } else if(key === PLAY) {
        simulateClick(document.querySelector('#player .miniplayer-control-play-pause'));
    }
}