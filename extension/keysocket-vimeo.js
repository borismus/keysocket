var playTarget = '.controls button.play';

function onKeyPress(key) {
    if (key === PLAY) {
        simulateClick(document.querySelector(playTarget));
        return;
    }
}
