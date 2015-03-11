function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('#ctrl-next');
    } else if (key === PLAY) {
        if (document.querySelector('#ctrl-play').style.display == 'none') {
            simulateClick('#ctrl-pause');
        } else {
            simulateClick('#ctrl-play');
        }
    } else if (key === PREV) {
        simulateClick('#ctrl-previous');
    }
}
