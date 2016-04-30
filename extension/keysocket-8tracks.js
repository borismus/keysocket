function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('#player_skip_button');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('#player_pause_button');

        if(document.querySelector('#player_play_button').style.getPropertyValue("display") == "block"){
            playPauseButton = document.querySelector('#player_play_button');
        }

        simulateClick(playPauseButton);
    }
}