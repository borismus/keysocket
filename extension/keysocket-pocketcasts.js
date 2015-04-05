function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('div.skip_forward_button');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playButton = document.querySelector('div.play_pause_button');
        simulateClick(playButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('div.skip_back_button');
        simulateClick(backButton);
    }
}
