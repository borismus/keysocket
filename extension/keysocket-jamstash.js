var connection = null;
var isConnected = false;

function controlJamstash(key) {
    if(key === PREV) {
        var prevButton = document.getElementById('PreviousTrack');
        simulateClick(prevButton);
    } else if(key === NEXT) {
        var nextButton = document.getElementById('NextTrack');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var isPlaying = document.getElementById('PlayTrack').style.display === 'none';
        var playPauseButton = null;
        if(isPlaying) {
          playPauseButton = document.getElementById('PauseTrack');
        } else {
          playPauseButton = document.getElementById('PlayTrack');
        }
        simulateClick(playPauseButton);
    }
}

reconnect(controlJamstash, connection, isConnected);
