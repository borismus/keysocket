function onKeyPress(key) {
    if (key === NEXT) {
        var nextButtonEpisode = document.querySelector('div.player-next-episode');
        simulateClick(nextButtonEpisode);
    } else if (key === PREV) {
        var prevButtonEpisode = null;
        var episodeList = document.querySelector('li.episode-list-item--expanded');
        if (episodeList) {
            prevButtonEpisode = episodeList.previousElementSibling.querySelector('div.play-icon');
            if (prevButtonEpisode) {
                episodeList.previousElementSibling.className += ' episode-list-item--expanded';
                simulateClick(prevButtonEpisode);
            }
        }
    } else if (key === PLAY) {
        playPauseButton = document.querySelector('.player-play-pause');
        simulateClick(playPauseButton);
    } else if (key === STOP) {
        var isPlaying = document.querySelector('div.player-play-pause.pause');
        if (isPlaying) {
            var playPauseButton = document.querySelector('.player-play-pause');
            simulateClick(playPauseButton);
        }
    }
}