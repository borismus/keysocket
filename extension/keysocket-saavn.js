keySocket.init(
    "saavn",
    {
        "play-pause": function () {
            var playButton = document.querySelector('button#play');
            var pauseButton = document.querySelector('button#pause');
            var hideButton = document.querySelector('button.controls.hide');
            if (hideButton) {
                if (hideButton.id === "play")
                    keySocket.simulateClick(pauseButton);
                else
                    keySocket.simulateClick(playButton);
            }
        },
        "prev": "button#rew",
        "next": "button#fwd"
        // stop is omitted
    }
);