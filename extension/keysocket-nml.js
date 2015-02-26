function onKeyPress(key){
    if(key === NEXT) {
        var nextButton = document.querySelector('#ctrl-next');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var isPlaying = document.querySelector('#ctrl-play').style.display == 'none';
        var playPauseButton = null;
        if(isPlaying) {
          playPauseButton = document.querySelector('#ctrl-pause');
        } else {
          playPauseButton = document.querySelector('#ctrl-play');
        }
        simulateClick(playPauseButton);
    } else if(key === PREV) {
        var prevButton = document.querySelector('#ctrl-previous');
        simulateClick(prevButton);
    } else if(key === STOP) {
        var isPlaying = document.querySelector('#ctrl-play').style.display == 'none';
        var playPauseButton = null;
        if(isPlaying) {
          playPauseButton = document.querySelector('#ctrl-pause');
        }
        simulateClick(playPauseButton);
    }
}
