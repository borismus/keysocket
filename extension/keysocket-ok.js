function onKeyPress(key) {
    if (key === PREV) {
        simulateSelectorClick('.mus_player-controls_i.__back');
    } else if (key === NEXT) {
        simulateSelectorClick('.mus_player-controls_i.__forward');
    } else if (key === PLAY) {
        simulateSelectorClick('.mus_player-controls_i.__pause, .toolbar_music-play');
    }
}
