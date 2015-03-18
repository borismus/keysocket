window.extisplaing = true;

function clean_injection () {
    var elem;
    while((elem = document.getElementById("injplay"))){
        elem.remove();
    }
    while((elem = document.getElementById("injpause"))){
        elem.remove();
    }
}

function ustream_play () {
    clean_injection();
    var injscript = document.createElement('script');
    injscript.id = "injplay";
    injscript.appendChild(document.createTextNode("window.ustream.flash.viewer.UstreamViewer.play()"));
    (document.body || document.head || document.documentElement).appendChild(injscript);
    window.extisplaing = true;
}

function ustream_pause () {
    clean_injection();
    var injscript = document.createElement('script');
    injscript.id = "injpause";
    injscript.appendChild(document.createTextNode("window.ustream.flash.viewer.UstreamViewer.pause()"));
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
