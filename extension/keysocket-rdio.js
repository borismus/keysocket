var connection = null;
var isConnected = false;

function controlRdio(key) {
    if(key === NEXT) {
        var nextButton = document.querySelector('.left_controls .next');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.querySelector('.left_controls .play_pause');
        simulateClick(playPauseButton);
    } else if(key === PREV) {
        var backButton = document.querySelector('.left_controls .prev');
        simulateClick(backButton);
    }
}

reconnect(controlRdio, connection, isConnected);
