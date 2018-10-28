keySocket.init(
    "castbox",
    function (key) {
        if (key === keySocket.NEXT) {
            document.querySelector('.PlayControl .forward').click();
        } else if (key === keySocket.PLAY) {
            document.querySelector('.PlayControl .playBtn').click();
        } else if (key === keySocket.PREV) {
            document.querySelector('.PlayControl .back').click();
        }
    }
);
