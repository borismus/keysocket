var playTarget = '.player-controls__btn_play';
var nextTarget = '.player-controls__btn_next';
var prevTarget = '.player-controls__btn_prev';

function onKeyPress(key) {
    if (key === PREV) {
        simulateClick(document.querySelector(prevTarget));
    } else if (key === NEXT) {
        simulateClick(document.querySelector(nextTarget));
    } else if (key === PLAY) {
        simulateClick(document.querySelector(playTarget));
    }
}
