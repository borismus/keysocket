function onKeyPress(key) {
    if (key === NEXT) {
        var nextButtonEpisode = document.querySelector('div.player-next-episode');
        simulateClick(nextButtonEpisode);
    } else if (key === PREV) {
        var prevButtonEpisode = null;
        try {
          prevButtonEpisode = document.querySelector('li.episode-list-item--expanded').previousElementSibling.querySelector('div.play-icon');
        }
        catch(e) {
          prevButtonEpisode = null;
        }
        if (prevButtonEpisode) {
          document.querySelector('li.episode-list-item--expanded').previousElementSibling.className += ' episode-list-item--expanded';
          simulateClick(prevButtonEpisode);
        }
    } else if (key === PLAY) {
        var isPlaying = document.querySelector('div.player-play-pause.pause'); //maybe in use for later changes on netflix controls of player
        var playPauseButton = null;
        if (isPlaying) {
            playPauseButton = document.querySelector('.player-play-pause');
        } else {
            playPauseButton = document.querySelector('.player-play-pause');
        }
        simulateClick(playPauseButton);
    }
}
