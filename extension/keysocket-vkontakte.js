// Example of shared2.js usage

keySocket.init(
    "vkontakte",
    {
        // function example
        "play-pause": function () {
            keySocket.simulateClick(document.querySelector('button.top_audio_player_play'));
        },
        "prev": 'button.top_audio_player_prev', // selector example
        "next": 'button.top_audio_player_next' // selector example
        // stop is skipped
    }
);