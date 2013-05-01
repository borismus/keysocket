var PREV = 20;
var PLAY = 16;
var NEXT = 19;
var SPACE = 32;
var LEFT = 37;
var RIGHT = 39;

function simulateKeyPress(keyCode, shift) {
  // keypress event can't be created in the isolated extension environment and
  // has to be injected into the page itself
  var code = '(' + function(keyCode, shift) {
    el = document.body

    var eventObj = document.createEventObject ?
        document.createEventObject() : document.createEvent("Events");

    if(eventObj.initEvent){
      eventObj.initEvent("keydown", true, true);
    }

    eventObj.keyCode = keyCode;
    eventObj.which = keyCode;
    eventObj.shiftKey = shift

    el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj);
  } + ')(' + JSON.stringify(keyCode) + ', ' + JSON.stringify(shift) + ');';
  var s = document.createElement("script");
  s.textContent = code;
  (document.head||document.documentElement).appendChild(s);
  s.parentNode.removeChild(s);
}

var connection = null;
var isConnected = false;

function connect() {
  // Connect to a websocket server
  connection = new WebSocket('ws://localhost:1337/');

  // When the connection is open, send some data to the server
  connection.onopen = function() {
    console.log('WS open');
    isConnected = true;
    connection.send('Ping'); // Send the message 'Ping' to the server

    // Log errors
    connection.onerror = function(error) {
      console.log('WS error', error);
    };

    // Log messages from the server
    connection.onmessage = function(e) {
      console.log('WS message', e);
      var key = e.data;
      if (key == PREV) {
        // Play the previous song
        simulateKeyPress(LEFT, true);
      } else if (key == NEXT) {
        // Play the next song.
        simulateKeyPress(RIGHT, true);
      } else if (key == PLAY) {
        simulateKeyPress(SPACE, false);
      }
    };

    connection.onclose = function(e) {
      console.log('WS close', e);
      isConnected = false;
      reconnect();
    };
  };
}

function reconnect() {
  // If we're not connected,
  if (!isConnected) {
    // Attempt to connect.
    connect();
    // Then ensure we're connected.
    setTimeout(reconnect, 1000);
  }
}

reconnect();
