keySocket.init(
    "noisli",
    {
        "play-pause": function () {
            var muteButton = document.querySelector("#sound-button-out")
            var unmuteButton = document.querySelector("#unmute-button-out")
            if (muteButton.style.display === 'none') {
                unmuteButton.click();
            } else {
                muteButton.click();
            }
        }
    }
);
