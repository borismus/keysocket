keySocket.init(
    "streamsquid",
    {
        "play-pause": function () {
            var playPauseButton = document.querySelector('#player-play');

            if(document.querySelector('#player-pause').style.getPropertyValue("display") === "block"){
                playPauseButton = document.querySelector('#player-pause');
            }

            keySocket.simulateClick(playPauseButton);
        },
        "prev": "#player-back",
        "next": "#player-next"
        // stop is omitted
    }
);