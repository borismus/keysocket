function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('[data-click-object-type="GlobalNavPlayerPrevious"]');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playButton = document.querySelector('[data-click-object-type="GlobalNavPlayerPlay"]');
        simulateClick(playButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('[data-click-object-type="GlobalNavPlayerNext"]');
        simulateClick(backButton);
    }
}
