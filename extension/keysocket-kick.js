keySocket.init(
    "kick",
    function (key) {
        var player = document.querySelector("video");
        if (player && key === keySocket.PLAY) {
            player.paused ? player.play() : player.pause();
        }
    }
);