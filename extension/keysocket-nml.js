function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('#ctrl-next');
    } else if (key === PLAY) {
        if (document.querySelector('#ctrl-play').style.display == 'none') {
            simulateSelectorClick('#ctrl-pause');
        } else {
            simulateSelectorClick('#ctrl-play');
        }
    } else if (key === PREV) {
        simulateSelectorClick('#ctrl-previous');
    }
}
