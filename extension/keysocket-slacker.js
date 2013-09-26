var connection = null;
var isConnected = false;

function controlSlacker(key) {
    if(key === NEXT) {
        var nextButton = document.getElementById('playerSkipButton');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.getElementById('playerPlayPauseButton');
        simulateClick(playPauseButton)
    } else if(key === PREV) {
        var backButton = document.getElementById('playerSkipBackButton');
        simulateClick(backButton);
    }
}

reconnect(controlSlacker, connection, isConnected);
