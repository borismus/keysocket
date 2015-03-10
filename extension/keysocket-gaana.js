function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('div.player_wrapper > a.next');
    } else if (key === PREV) {
        simulateSelectorClick('div.player_wrapper > a.prev');
    } else if (key === PLAY) {
        if (!document.querySelector('div.player_wrapper > a.playPause.play'))
            simulateSelectorClick('div.player_wrapper > a.playPause.pause');
        else
            simulateSelectorClick('div.player_wrapper > a.playPause.play');
    }
}
