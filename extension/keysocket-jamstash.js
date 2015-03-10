function onKeyPress(key) {
    if (key === PREV) {
        simulateSelectorClick('#PreviousTrack');
    } else if (key === NEXT) {
        simulateSelectorClick('#NextTrack');
    } else if (key === PLAY) {
        var playing = document.getElementsByClassName('PlayTrack')[0];
        if (playing.style.display === 'none') {
            simulateSelectorClick('.PauseTrack');
        } else {
            simulateSelectorClick('.PlayTrack');
		}
    }
}
