function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('button.next-btn');
    } else if (key === PLAY) {
        try {
            if (document.querySelector('button.play-btn').classList.contains('hidden')) {
                simulateSelectorClick('button.pause-btn');
            } else {
                simulateSelectorClick('button.play-btn');
            }
        } catch (e) {
            simulateSelectorClick('a.play-btn');
        }
    } else if (key === PREV) {
        simulateSelectorClick('button.previous-btn');
    } else if (key === STOP) {
        simulateSelectorClick('button.stop-btn');
    }
}
