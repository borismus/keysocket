function onKeyPress(key) {
    var videoElement = document.getElementsByTagName("video")[0];
    
    if (key === PLAY) {
        if (videoElement.paused) {
            videoElement.play();
        }
        else {
            videoElement.pause();
        }
    }
}
