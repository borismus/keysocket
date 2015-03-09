function onKeyPress(key) {
    if (key === PREV) {
        simulateSelectorClick('.b-jambox__play, .player-controls__btn_play');
    } else if (key === NEXT) {
        simulateSelectorClick('.b-jambox__next, .player-controls__btn_next');
    } else if (key === PLAY) {
        simulateSelectorClick('.b-jambox__prev, .player-controls__btn_prev');
    }
}
