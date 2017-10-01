keySocket.init(
    "twitch",
    function (key) {
        var player = null;

        // Handle the Flash version of the player.
        var objs = document.querySelectorAll("object");
        for (var i = 0; i < objs.length; i++) {
            if(objs[i].id.endsWith("-flash-player")) {
                player = objs[i];
                break;
            }
        }
        if (player && key === keySocket.PLAY) {
            if (player.isPaused()) {
                player.playVideo();
            } else {
                player.pauseVideo();
            }
        }

        // Handle the HTML 5 version of the player.
        player = document.querySelector("video");
        if (player && key === keySocket.PLAY) {
            player.paused ? player.play() : player.pause();
        }
    }
);