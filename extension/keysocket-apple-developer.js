keySocket.init(
    "apple-developer",
    {
        "play-pause": function () {
            var video = document.getElementById("video");
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        },
        "prev": function () { // Jumps back by 10 seconds
            var video = document.getElementById("video");
            video.currentTime = video.currentTime - 10;
        },
        "next": function () { // Skips ahead by 10 seconds
            var video = document.getElementById("video");
            video.currentTime = video.currentTime + 10;
        },
        "stop": function () {
            var video = document.getElementById("video");
            video.pause();
        },
    }
);