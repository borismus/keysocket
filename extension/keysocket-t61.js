function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('#large_next_song_button');
    } else if (key === PLAY) {
        if (document.querySelector('#pause_button').style.display !== 'none') {
            simulateClick('#pause_button');
        } else {
            simulateClick('#play_button');
        }
    } else if (key === PREV) {
        simulateClick('#large_previous_song_button');
    }
}
