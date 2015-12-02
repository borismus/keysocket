var playTarget = '.inline_player .playbutton';
var nextTarget = '.inline_player .nextbutton';
var prevTarget = '.inline_player .prevbutton';

function onKeyPress(key) {
    if (key === PREV) {
        simulateClick(document.querySelector(prevTarget));
    } else if (key === NEXT) {
        simulateClick(document.querySelector(nextTarget));
    } else if (key === PLAY) {
        simulateClick(document.querySelector(playTarget));
    }
}
