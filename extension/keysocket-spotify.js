var PREV = '20';
var PLAY = '16';
var NEXT = '19';

function simulateClick(id) {
  iframe = document.getElementById('app-player');
  var evt = document.createEvent('MouseEvents');
  evt.initMouseEvent('mousedown', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  iframe.contentDocument.getElementById(id).dispatchEvent(evt);
  evt = document.createEvent('MouseEvents');
  evt.initMouseEvent('mouseup', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  iframe.contentDocument.getElementById(id).dispatchEvent(evt);
  evt = document.createEvent('MouseEvents');
  evt.initMouseEvent('click', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  iframe.contentDocument.getElementById(id).dispatchEvent(evt);
}

var connection = null;
var isConnected = false;

function connect() {
  // Connect to a websocket server
  connection = new WebSocket('ws://localhost:1337/');

  // When the connection is open, send some data to the server
  connection.onopen = function() {
    isConnected = true;
    connection.send('Ping'); // Send the message 'Ping' to the server


    // Log errors
    connection.onerror = function(error) {
      console.log('WS error', error);
    };

    // Log messages from the server
    connection.onmessage = function(e) {
      var key = e.data;
      if (key === NEXT) {
        console.log("Pressing next");
        simulateClick('next');
      } else if (key === PLAY) {
        simulateClick('play-pause');
      } else if (key === PREV) {
        simulateClick('previous');
      }
    };

    connection.onclose = function(e) {
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
