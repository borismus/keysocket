function onKeyPress(key) {
    var player = null;
    var objs = document.querySelectorAll("object");
    for (var i = 0; i < objs.length; i++) {
        if(objs[i].id.endsWith("-flash-player")) {
            player = objs[i];
            break;
        }
    }
    if (player && key === PLAY) {
        if (player.isPaused()) {
            player.playVideo();
        } else {
            player.pauseVideo();
        }
    }
}