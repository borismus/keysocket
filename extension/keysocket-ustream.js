/*
 * In ustream.tv webpage there is an object that controls the player
 * this object cannot be called by a extension content script, so I
 * inject a script in the DOM to call the play/pause funcions of
 * this object.
 * I think that ustream.tv has a HTML5 controller also, but I didn't
 * test the code with the HTML5 player.
 */

window.extisplaing = true;

/*
 * Remove the injection code added by ustream_play and ustream_pause
 * that won't be used anymore.
*/
function clean_injection () {
    var elem;
    while((elem = document.getElementById("injplay"))){
        elem.remove();
    }
    while((elem = document.getElementById("injpause"))){
        elem.remove();
    }
}

/*
 * Inject a call to the play function of window.ustream.flash.viewer.UstreamViewer
 * that isn't accessible by extension script.
*/
function ustream_play () {
    clean_injection();
    var injscript = document.createElement('script');
    injscript.id = "injplay";
    injscript.appendChild(document.createTextNode("window.ustream.app.player.viewer.play()"));
    (document.body || document.head || document.documentElement).appendChild(injscript);
    window.extisplaing = true;
}

/*
 * Inject a call to the pause function of window.ustream.flash.viewer.UstreamViewer
 * that isn't accessible by extension script.
*/
function ustream_pause () {
    clean_injection();
    var injscript = document.createElement('script');
    injscript.id = "injpause";
    injscript.appendChild(document.createTextNode("window.ustream.app.player.viewer.pause()"));
    (document.body || document.head || document.documentElement).appendChild(injscript);
    window.extisplaing = false;
}

function onKeyPress(key) {
    if (key === PLAY) {
        if (window.extisplaing) {
            ustream_pause();
        } else {
            ustream_play();
        }
    }
}
