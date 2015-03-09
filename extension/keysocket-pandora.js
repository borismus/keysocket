function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('div.skipButton > a');
    } else if (key === PLAY) {
        if (document.querySelector('div.playButton').style.display !== 'block') {
            simulateSelectorClick('div.pauseButton > a');
        } else {
            simulateSelectorClick('div.playButton > a');
        }
    }
}
