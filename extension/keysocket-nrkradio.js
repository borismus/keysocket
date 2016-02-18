/*
 * NRK radio only supports a flash player on chrome desktop at the moment,
 * so we have to talk to an api in the browser window to get media buttons working.
 */


/* Runs function in actual window */
function injectScript(injectFunction) {
    var script = document.createElement('script');
    script.textContent = '(' + injectFunction + ')();';
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
}

/* Call toggleplay in nrk flash API */
function nrkToggleplay() {
    injectScript(function() {
        nrk.modules.player.getApi().toggleplay();
    });
}

/* Seek forward */
function nrkSeekForward() {
    injectScript(function() {
        var api = nrk.modules.player.getApi();
        api.seek(api.getPosition()+30);
    });
}

/* Seek backward */
function nrkSeekBackward() {
    injectScript(function() {
        var api = nrk.modules.player.getApi();
        api.seek(api.getPosition()-30);
    });
}

function onKeyPress(key) {
    if (key === PLAY) {
        nrkToggleplay();
    } else if (key === PREV) {
        nrkSeekBackward();
    } else if (key === NEXT) {
        nrkSeekForward();
    }    
}
