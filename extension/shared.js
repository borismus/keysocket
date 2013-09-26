var PREV = '20';
var PLAY = '16';
var NEXT = '19';

function connect(audioController, connection, isConnected) {
    window[connection] = new WebSocket('ws://localhost:1337/');

    window[connection].onopen = function() {
        window[isConnected] = true;
        window[connection].send('Ping');
    };

    window[connection].onerror = function(error) {
        console.log('WebSocket Error:', error);
    };

    window[connection].onmessage = function(e) {
        var key = e.data;
        audioController(key);
    };
}

function reconnect(audioController, connection, isConnected) {
    if(!window[isConnected]) {
        console.log("Reconnecting")
        console.log(window[isConnected])
        connect(audioController, connection, isConnected);
        setTimeout(function() { reconnect(audioController, connection, isConnected) }, 1000);
    }
}

function simulateClick(element) {
    var mousedown = document.createEvent('MouseEvents');
    mousedown.initMouseEvent('mousedown', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    element.dispatchEvent(mousedown);

    var mouseup = document.createEvent('MouseEvents');
    mouseup.initMouseEvent('mouseup', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    element.dispatchEvent(mouseup)

    var click = document.createEvent('MouseEvents');
    click.initMouseEvent('click', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    element.dispatchEvent(click)
}
