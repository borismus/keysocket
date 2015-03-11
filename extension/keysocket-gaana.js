function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('div.player_wrapper > a.next');
    } else if (key === PREV) {
        simulateClick('div.player_wrapper > a.prev');
    } else if (key === PLAY) {
        if (!document.querySelector('div.player_wrapper > a.playPause.play'))
            simulateClick('div.player_wrapper > a.playPause.pause');
        else
            simulateClick('div.player_wrapper > a.playPause.play');
    }
}
