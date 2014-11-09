// support both old and new Yandex Music interfaces: '.old, .new'
var playTarget = '.b-jambox__play, .player-controls__btn_play';
var nextTarget = '.b-jambox__next, .player-controls__btn_next';
var prevTarget = '.b-jambox__prev, .player-controls__btn_prev';

function onKeyPress(key) {
    if (key === PREV) {
        simulateClick(document.querySelector(prevTarget));
    } else if (key === NEXT) {
        simulateClick(document.querySelector(nextTarget));
    } else if (key === PLAY) {
        simulateClick(document.querySelector(playTarget));
    }
}
