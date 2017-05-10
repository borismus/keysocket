/*
 * NRK radio only supports a flash player on chrome desktop at the moment,
 * so we have to talk to an api in the browser window to get media buttons working.
 */

injectionInit(function (key) {
    if (key === "play-pause") {
        nrk.modules.player.getApi().toggleplay();
    }
});
