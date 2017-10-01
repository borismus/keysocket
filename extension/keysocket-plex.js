// can't simulate click, not working

keySocket.init(
    "plex",
    {
        "play-pause": "button[aria-label=\"Play\"], button[aria-label=\"Pause\"]",
        "prev": "button[aria-label=\"Previous\"]",
        "next": "button[aria-label=\"Next\"]"
        // stop is omitted
    }
);