var connection = null;
var isConnected = false;

function controlYoutube(key) {
    if(key === NEXT) {
        var nextButton = document.getElementsByClassName('yt-uix-button-icon-playlist-bar-next')[0];
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var video = document.getElementById('movie_player');
        if(video.getPlayerState() === 1) {
            video.pauseVideo();
        } else {
            video.playVideo();
        }
    } else if(key === PREV) {
        var backButton = document.getElementsByClassName('yt-uix-button-icon-playlist-bar-prev')[0];
        simulateClick(backButton);
    }
}

reconnect(controlYoutube, connection, isConnected);
