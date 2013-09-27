var connection = null;
var isConnected = false;

function controlAmazon(key) {
    if(key === NEXT) {
        var nextButton = document.querySelector('[playeraction=next]');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.querySelector('[playeraction=togglePlay]');
        simulateClick(playPauseButton);
    } else if(key === PREV) {
        var backButton = document.querySelector('[playeraction=previous]');
        simulateClick(backButton);
    }
}

reconnect(controlAmazon, connection, isConnected);
