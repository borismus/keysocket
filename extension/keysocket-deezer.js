function onKeyPress(key) {
    if (document.querySelector('#player_control_play')) { // old deezer style
        if (key === NEXT) {
            simulateSelectorClick('#player_control_next');
        } else if (key === PLAY) {
            if (document.querySelector('#player_control_play').style.display === 'none') {
                simulateSelectorClick('#player_control_pause');
            } else {
                simulateSelectorClick('#player_control_play');
            }
        } else if (key === PREV) {
            simulateSelectorClick('#player_control_prev');
        }
    } else { // new deezer style
        if (key === NEXT) {
            simulateSelectorClick('.control-next');
        } else if (key === PLAY) {
            if (!document.querySelector('.control-play')[0]) {
                simulateSelectorClick('.control-pause');
            } else {
                simulateSelectorClick('.control-play');
            }
        } else if (key === PREV) {
            simulateSelectorClick('.control-prev');
        }
    }
}
