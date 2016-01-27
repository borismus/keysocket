var playPauseButtonSelectors = [
    '.control-buttons .fa-pause',
    '.control-buttons .fa-play',
    '[ng-click="PlayPauseClick()"]',
    '[ng-click^="playPause"]',
    '[ng-click^="player.play"]:not(.ng-hide)',
    '[class*="pause"]'
];

function onKeyPress(key) {
    if (key === PLAY) {
        for (var i = 0; i < playPauseButtonSelectors.length; i++) {
            var playPauseButtonCandidate = document.querySelector(playPauseButtonSelectors[i]);
            if (playPauseButtonCandidate) {
                simulateClick(playPauseButtonCandidate, {cancelable: true});
                return;
            }
        }
    } else if (key === NEXT) {
        var nextButton = document.querySelector('[ng-click="audio.PlayNextSong()"], .fa-forward');
        simulateClick(nextButton, {cancelable: true});
    } else if (key === PREV) {
        var prevButton = document.querySelector('[ng-click="audio.PlayPreviousSong()"], .fa-backward');
        simulateClick(prevButton, {cancelable: true});
    }
}
