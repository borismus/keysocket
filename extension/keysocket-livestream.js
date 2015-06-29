if(!window.__isPlaying){
    window.__isPlaying = false;
}
function onKeyPress(key) {
    var player = null;
    var objs = document.querySelectorAll("object");
    if(objs.length == 0){
        objs = document.querySelectorAll("button");
        for (var i = 0; i < objs.length; i++) {
            if(objs[i].className === "js-vod_play play_btn") {
                objs[i].click();
                window.__isPlaying = true;
                break;
            }
        }
    }
    for (var i = 0; i < objs.length; i++) {
        if(objs[i].id.startsWith("live_player_") || objs[i].id.startsWith("vod_player_")) {
            player = objs[i];
            break;
        }
    }
    if (player && key === PLAY) {
        if (window.__isPlaying) {
            player.pausePlayback();
            window.__isPlaying = false;
        } else {
            player.startPlayback();
            window.__isPlaying = true;
        }
    }
}