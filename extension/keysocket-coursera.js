keySocket.init(
    "coursera",
    function (key) {
        if (key === keySocket.NEXT) {
            document.querySelector('[aria-label="Next Item"]').click();
        } else if (key === keySocket.PLAY) {
            document.querySelector('[aria-label="Play"], [aria-label="Pause"').click();
        } else if (key === keySocket.PREV) {
            document.querySelector('[aria-label="Previous Item').click();
        }
    }
);
