function onKeyPress(key) {
    switch(key) {
        case PREV:
            return;
        break;
        case PLAY:
            var playPauseTemplate = '.player-control-button.player-play-pause.%s.icon-player-%s';
            var regExpObj = new RegExp('%s', 'g');
            var playElem = document.querySelector(playPauseTemplate.replace(regExpObj, 'play'));
            var pauseElem = document.querySelector(playPauseTemplate.replace(regExpObj, 'pause'));

            if (!playElem) {
                simulateClick(pauseElem);
            } else {
                simulateClick(playElem);
            }
        break;
        case NEXT:
            simulateClick(document.querySelector('.player-control-button.player-next-episode.container-icon-player-next-episode'));
        break;
    }
}

console.log('keysocket: Loading Netflix extension');