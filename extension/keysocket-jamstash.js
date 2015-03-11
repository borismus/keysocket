function onKeyPress(key) {
    if (key === PREV) {
        simulateClick('#PreviousTrack');
    } else if (key === NEXT) {
        simulateClick('#NextTrack');
    } else if (key === PLAY) {
        var playing = document.getElementsByClassName('PlayTrack')[0];
        if (playing.style.display === 'none') {
            simulateClick('.PauseTrack');
        } else {
            simulateClick('.PlayTrack');
		}
    }
}
