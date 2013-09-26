var connection = null;
var isConnected = false;

function controlJango(key) {
    var frame = document.querySelector('[name=content]')
    if(key === NEXT) {
        var nextButton = frame.contentDocument.getElementById('btn-ff');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = frame.contentDocument.getElementById('btn-playpause');
        simulateClick(playPauseButton)
    }
}

reconnect(controlJango, connection, isConnected);

