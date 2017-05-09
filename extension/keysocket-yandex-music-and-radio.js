// Require shared-injection.js

/**
 * Initialize shared-injection.js
 *
 * The argument is a function that gets `key` as argument (possible
 * values are `pause-play`, `prev`, `next`) and calls needed API functions
 * to manage player depending on `key` argument.
 */
injectionInit(function (key) {
    switch (key) {
        case "play-pause": externalAPI.togglePause(); break;
        case "prev": externalAPI.prev(); break;
        case "next": externalAPI.next(); break;
    }
});

pluginLoaded('Yandex.Music');