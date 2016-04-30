function onKeyPress(key) {
    if (key === NEXT) {
        var nextButton = document.querySelector('#player-next');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var playPauseButton = document.querySelector('#player-play');

        if(document.querySelector('#player-pause').style.getPropertyValue("display") == "block"){
            playPauseButton = document.querySelector('#player-pause');
        }

        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = document.querySelector('#player-back');
        simulateClick(backButton);
    }
}