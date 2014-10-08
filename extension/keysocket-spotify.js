function onKeyPress(key) {
    var frame = document.getElementById('app-player');
    if(key === NEXT) {
        var nextButton = frame.contentDocument.getElementById('next');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = frame.contentDocument.getElementById('play-pause');
        simulateClick(playPauseButton);
    } else if(key === PREV) {
        var backButton = frame.contentDocument.getElementById('previous');
        simulateClick(backButton);
    }
}