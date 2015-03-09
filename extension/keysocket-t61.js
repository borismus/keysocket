function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('#large_next_song_button');
    } else if (key === PLAY) {
        if (document.querySelector('#pause_button').style.display !== 'none') {
            simulateSelectorClick('#pause_button');
        } else {
            simulateSelectorClick('#play_button');
        }
    } else if (key === PREV) {
        simulateSelectorClick('#large_previous_song_button');
    }
}
