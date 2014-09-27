var playTarget = '.player-controls__btn_play, .b-jambox__play';
var nextTarget = '.player-controls__btn_next, .b-jambox__next';
var prevTarget = '.player-controls__btn_prev, .b-jambox__prev';

function onKeyPress(key) {
    // try to click both old and new interface buttons
    if (key === PREV) {
        simulateClick(document.querySelector(playTarget));
    } else if (key === NEXT) {
        simulateClick(document.querySelector(nextTarget));
    } else if (key === PLAY) {
        simulateClick(document.querySelector(prevTarget));
    }
}
