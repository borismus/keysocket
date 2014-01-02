var connection = null;
var isConnected = false;

function controlPlex(key) {
    if(key === NEXT) {
        var nextButton = document.querySelector('.music-player .next-btn');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playButton = document.querySelector('.music-player .play-btn');
        var pauseButton = null;
        var firstTrack = null;
        try {
            if (playButton.className.indexOf('hide') != -1) {
                pauseButton = document.querySelector('.music-player .pause-btn');
                simulateClick(pauseButton);
            } else {
                simulateClick(playButton);
            }
        } catch (e) {
            firstTrack = document.querySelector('ul.track-list>li:first-child>a')
            simulateClick(firstTrack);
        }
    } else if(key === PREV) {
        var backButton = document.querySelector('.music-player .previous-btn');
        simulateClick(backButton);
    }
}

reconnect(controlPlex, connection, isConnected);
