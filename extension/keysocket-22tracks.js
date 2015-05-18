function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector("[ng-click=\"Audio.next()\"]");
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector("[ng-click=\"Audio.playpause()\"]");
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector("[ng-click=\"Audio.previous()\"]");
        simulateClick(backButton);
    }
}
