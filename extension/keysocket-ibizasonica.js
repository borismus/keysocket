keySocket.init(
    'ibizasonica', 
    {
        "play-pause": function() {
            var player = document.querySelector("#jp_container_1");
            if (player.classList.contains("jp-state-playing")) {
                var pauseButton = document.querySelector(".jp-pause");
                pauseButton.click();
            } else {
                var playButton = document.querySelector(".jp-play");
                playButton.click();
            }
        }
    }
);