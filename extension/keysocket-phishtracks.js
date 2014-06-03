function onKeyPress(key) {
    if(key === NEXT) {
        var nextButton = document.querySelector('[data-control=next]');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.querySelector('[data-control=togglePause]');
        simulateClick(playPauseButton);
    } else if(key === PREV) {
        var backButton = document.querySelector('[data-control=prev]');
        simulateClick(backButton);
    }
}

console.log("keysocket: Loading Phishtracks extension");