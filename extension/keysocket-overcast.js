// not tested (account is needed)

keySocket.init(
    "overcast.fm",
    {
        "play-pause": function () {
            if (!player.paused) {
                player.pause();
            } else {
                player.play();
            }
        }
        // prev is skipped
        // next is skipped
        // stop is omitted
    }
);