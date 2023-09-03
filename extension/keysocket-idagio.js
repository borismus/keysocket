keySocket.init(
    "idagio",
    {
        "play-pause": "[data-test=\"player-controls.pause-btn\"], [data-test=\"player-controls.play-btn\"]",
        "prev": function() {
            var button = document.querySelector("[data-test=\"player-controls.pause-btn\"], [data-test=\"player-controls.play-btn\"]").previousElementSibling;
            if (button) {
                button.click();
            }
        },
        "next": function() {
            var button = document.querySelector("[data-test=\"player-controls.pause-btn\"], [data-test=\"player-controls.play-btn\"]").nextElementSibling;
            if (button) {
                button.click();
            }
        },
        "stop": "[\"data-test=player-controls.pause-btn\"]"
    }
);
