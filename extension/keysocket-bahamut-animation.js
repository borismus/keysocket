keySocket.init(
    "bahamut-animation",
    {
        "play-pause": function () {
            var agreeButton = document.querySelector(".choose-btn-agree");
            if (agreeButton) {
                keySocket.simulateClick(agreeButton);
            } else {
                var playPauseButton = document.querySelector("#ani_video button.vjs-play-control.vjs-control.vjs-button");
                keySocket.simulateClick(playPauseButton);
            }
        },
        "prev": "#ani_video button.vjs-pre-button",
        "next": "#ani_video button.vjs-next-button"
        // stop is omitted
    }
);