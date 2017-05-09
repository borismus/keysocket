// support both pleer.com
var playTarget = '#play';
var nextTarget = '#fw';
var prevTarget = '#rw';

function onKeyPress(key) {
    if (key === PREV) {
        simulateClick(document.querySelector(prevTarget));
    } else if (key === NEXT) {
        simulateClick(document.querySelector(nextTarget));
    } else if (key === PLAY) {
        simulateClick(document.querySelector(playTarget));
    }
}
