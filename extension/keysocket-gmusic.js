var connection = null;
var isConnected = false;

function controlGmusic(key) {
    if(key === NEXT) {
        var nextButton = document.querySelector('[data-id=forward]');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.querySelector('[data-id=play-pause]');
        simulateClick(playPauseButton);
    } else if(key === PREV) {
        var backButton = document.querySelector('[data-id=rewind]');
        simulateClick(backButton);
    }
}

reconnect(controlGmusic, connection, isConnected);
