var PREV = '20';
var PLAY = '16';
var NEXT = '19';
var reconnectTimeout;
var dupTimeout = 100;

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
      // if the message has been received within the last dupTimeout, ignore it.
      if( window[connection].msgReceived ) { return; }
      window[connection].msgReceived = setTimeout(function() {
          window[connection].msgReceived = null;
      },dupTimeout);
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
    if(!element){
        console.log('keysocket: Cannot simulate click, element undefined');
        return false;
    } 

    var click = document.createEvent('MouseEvents');
    click.initMouseEvent('click', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    return element.dispatchEvent(click);
}
