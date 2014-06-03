var playTarget = '.b-jambox__play';
var nextTarget = '.b-jambox__next';
var prevTarget = '.b-jambox__prev';

function onKeyPress(key) {
    if (key === PREV) {
        simulateClick(document.querySelector(prevTarget));
    } else if (key === NEXT) {
        simulateClick(document.querySelector(nextTarget));
    } else if (key === PLAY) {
        simulateClick(document.querySelector(playTarget));
    }
}