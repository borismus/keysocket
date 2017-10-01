// not tested (account is needed)

keySocket.init(
    "noonpacific",
    {
        "play-pause": function () {
            var playPauseButtonSelectors = [
                '.control-buttons .fa-pause',
                '.control-buttons .fa-play',
                '[ng-click="PlayPauseClick()"]',
                '[ng-click^="playPause"]',
                '[ng-click^="player.play"]:not(.ng-hide)',
                '[class*="pause"]'
            ];
            for (var i = 0; i < playPauseButtonSelectors.length; i++) {
                var playPauseButtonCandidate = document.querySelector(playPauseButtonSelectors[i]);
                if (playPauseButtonCandidate) {
                    keySocket.simulateClick(playPauseButtonCandidate, {cancelable: true});
                    return;
                }
            }
        },
        "prev": function () {
            var prevButton = document.querySelector('[ng-click="audio.PlayPreviousSong()"], .fa-backward');
            keySocket.simulateClick(prevButton, {cancelable: true});
        },
        "next": function () {
            var nextButton = document.querySelector('[ng-click="audio.PlayNextSong()"], .fa-forward');
            keySocket.simulateClick(nextButton, {cancelable: true});
        }
        // stop is omitted
    }
);