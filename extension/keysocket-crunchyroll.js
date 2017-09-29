function onKeyPress(key) {
    var video = document.querySelector('#showmedia_video_player');
    if (key === NEXT) {
        location.href = document.querySelector("link[rel=next]").getAttribute("href");
    } else if (key === PREV) {
        location.href = document.querySelector("link[rel=prev]").getAttribute("href");
    } if (key === PLAY) {
        video.togglePlayPause();
    } else if (key === STOP) {
        video.pauseVideo();
    }
}
