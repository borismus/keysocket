function onKeyPress(key) {
    var player = document.getElementById('audioplayer');
    if (key === PLAY) {
        if (!player.paused) {
            player.pause();
        } else {
            player.play();
        }
    } elseif (key === STOP) {
        if (!player.paused) {
            player.pause();
        }
    }
}
