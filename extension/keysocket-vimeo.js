keySocket.init(
    "vimeo",
    {
        "play-pause": '.controls button',
        "prev": function () {
            location.href = document.querySelector("a[rel=prev]").getAttribute("href");
        },
        "next": function () {
            location.href = document.querySelector("a[rel=next]").getAttribute("href");
        },
        "stop": function () {
            location.href = document.querySelector("link[rel=canonical]").getAttribute("href");
        },
    }
);