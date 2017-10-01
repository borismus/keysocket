keySocket.init(
    "nexflix",
    {
        "play-pause": ".player-play-pause",
        "prev": function () {
            var prevButtonEpisode = null;
            var episodeList = document.querySelector('li.episode-list-item--expanded');
            if (episodeList) {
                prevButtonEpisode = episodeList.previousElementSibling.querySelector('div.play-icon');
                if (prevButtonEpisode) {
                    episodeList.previousElementSibling.className += ' episode-list-item--expanded';
                    keySocket.simulateClick(prevButtonEpisode);
                }
            }
        },
        "next": "div.player-next-episode",
        "stop": function () {
            var isPlaying = document.querySelector('div.player-play-pause.pause');
            if (isPlaying) {
                var playPauseButton = document.querySelector('.player-play-pause');
                keySocket.simulateClick(playPauseButton);
            }
        }
    }
);