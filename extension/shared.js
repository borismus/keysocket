var PREV = '20';
var PLAY = '16';
var NEXT = '19';
var reconnectTimeout;

function connect(audioController, connection, isConnected) {
    console.log("keysocket: connecting to WS");
    window[connection] = new WebSocket('ws://localhost:1337/');

    window[connection].onopen = function() {
        window[isConnected] = true;
        window[connection].send('Ping');
    };

    window[connection].onerror = function(error) {
        console.log('keysocket: WebSocket Error:', error);
    };

    window[connection].onmessage = function(e) {
        console.log("keysocket: Got Key:", e.data);
        var key = e.data;
        audioController(key);
    };
    window[connection].onclose = function(e) {
      console.log('keysocket: WS close', e);
      window[isConnected] = false;
      clearTimeout(reconnectTimeout);
      reconnectTimeout = setTimeout(function() { reconnect(audioController, connection, isConnected); }, 1000);
    };
}

function reconnect(audioController, connection, isConnected) {
    if(!window[isConnected]) {
        connect(audioController, connection, isConnected);
        reconnectTimeout = setTimeout(function() { reconnect(audioController, connection, isConnected); }, 1000);
    }
}

function simulateClick(element) {
    var click = document.createEvent('MouseEvents');
    click.initMouseEvent('click', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    element.dispatchEvent(click);
}
