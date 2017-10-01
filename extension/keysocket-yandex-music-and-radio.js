keySocket.init("Yandex.Music & Yandex.Radio", keySocket.injectHandler(function (key) {
    switch (key) {
        case "play-pause": externalAPI.togglePause(); break;
        case "prev": externalAPI.prev(); break;
        case "next": externalAPI.next(); break;
    }
}));