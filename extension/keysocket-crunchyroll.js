keySocket.init(
    "crunchyroll",
    {
        "play-pause": function () {
            var video = document.querySelector('#showmedia_video_player');
            video.togglePlayPause();
        },
        "prev": function () {
            location.href = document.querySelector("link[rel=prev]").getAttribute("href");
        },
        "next": function () {
            location.href = document.querySelector("link[rel=next]").getAttribute("href");
        },
        "stop": function () {
            var video = document.querySelector('#showmedia_video_player');
            video.pauseVideo();
        },
    }
);