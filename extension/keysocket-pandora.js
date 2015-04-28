function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('div.skipButton > a');
    } else if (key === PLAY) {
        if (document.querySelector('div.playButton').style.display !== 'block') {
            simulateClick('div.pauseButton > a');
        } else {
            simulateClick('div.playButton > a');
        }
    }
}
