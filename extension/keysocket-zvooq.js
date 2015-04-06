var playTarget = '.topPanelPlay, .topPanelPause';
var nextTarget = '.topPanelForward';
var prevTarget = '.topPanelRewind';

function onKeyPress(key) {
    if (key === PREV) {
        simulateClick(document.querySelector(prevTarget));
    } else if (key === NEXT) {
        simulateClick(document.querySelector(nextTarget));
    } else if (key === PLAY) {
        simulateClick(document.querySelector(playTarget));
    }
}
