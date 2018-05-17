keySocket.init("overcast.fm", function (key) {
    if (key === keySocket.NEXT) {
        var seekForwardButton = document.getElementById("seekforwardbutton");
        keySocket.simulateClick(seekForwardButton);
    } else if (key === keySocket.PLAY) {
        var playPauseButton = document.getElementById("playpausebutton");
        keySocket.simulateClick(playPauseButton);
    } else if (key === keySocket.PREV) {
        var seekBackButton = document.getElementById("seekbackbutton");
        keySocket.simulateClick(seekBackButton);
    }
});