keySocket.init(
    "subsonic",
    {
        "play-pause": function () {
            location.href = "javascript:if(localPlayer.paused)window.onStart();else window.onStop();";
        },
        "prev": function () {
            location.href = "javascript:window.onPrevious()";
        },
        "next": function () {
            location.href = "javascript:window.onNext(repeatEnabled)";
        }
        // stop is omitted
    }
);