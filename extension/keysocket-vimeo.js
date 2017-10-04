function onKeyPress(key) {
    var video = document.querySelector('#showmedia_video_player');
    if (key === NEXT) {
        location.href = document.querySelector("a[rel=next]").getAttribute("href");
    } else if (key === PREV) {
        location.href = document.querySelector("a[rel=prev]").getAttribute("href");
    } if (key === PLAY) {
        var playPauseButton = document.querySelector(".controls button");
        keySocket.simulateClick(playPauseButton);
    } else if (key === STOP) {
        location.href = document.querySelector("link[rel=canonical]").getAttribute("href");
    }
}