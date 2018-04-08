keySocket.init(
    "nexflix",
    {
        "play-pause": function () {
                var playPauseButton = document.querySelector('.button-nfplayerPlay, .button-nfplayerPause');
                keySocket.simulateClick(playPauseButton);
        },
        "prev": function () { //Dont work.
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
        "next":  function () {      
                var nextButton = document.querySelector('.button-nfplayerNextEpisode');
                keySocket.simulateClick(nextButton);     
        },
        "stop": function () {           
                var stopButton = document.querySelector('.button-nfplayerPause');
                keySocket.simulateClick(stopButton);   
        }
    }
);
