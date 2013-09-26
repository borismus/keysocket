var connection = null;
var isConnected = false;

function controlGrooveShark(key) {
    if(key === NEXT) {
        var nextButton = document.getElementById('play-next');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.getElementById('play-pause');
        simulateClick(playPauseButton)
    } else if(key === PREV) {
        var backButton = document.getElementById('play-prev');
        simulateClick(backButton);
    }
}

reconnect(controlGrooveShark, connection, isConnected);
