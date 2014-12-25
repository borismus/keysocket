var playTarget = '.mus_player-controls_i.__pause, .toolbar_music-play';
var nextTarget = '.mus_player-controls_i.__forward';
var prevTarget = '.mus_player-controls_i.__back';

function onKeyPress(key) {
    if (key === PREV) {
        simulateClick(document.querySelector(prevTarget));
    } else if (key === NEXT) {
        simulateClick(document.querySelector(nextTarget));
    } else if (key === PLAY) {
        simulateClick(document.querySelector(playTarget));
    }
}
