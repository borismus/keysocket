var PREV = 20;
var PLAY = 16;
var NEXT = 19;

function simulateClick(elementId) {
  var evt = document.createEvent('MouseEvents');
  evt.initMouseEvent('mousedown', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  document.getElementById(elementId).dispatchEvent(evt);
  evt = document.createEvent('MouseEvents');
  evt.initMouseEvent('mouseup', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  document.getElementById(elementId).dispatchEvent(evt);
}

// Connect to a websocket server
var connection = new WebSocket('ws://localhost:1337/');

// When the connection is open, send some data to the server
connection.onopen = function () {
  connection.send('Ping'); // Send the message 'Ping' to the server
};

// Log errors
connection.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
  var key = e.data;
  if (key == PREV) {
    // Play the previous song
    simulateClick('rew');
  } else if (key == NEXT) {
    // Play the next song
    simulateClick('ff');
  } else if (key == PLAY) {
    // Play the next song
    simulateClick('playPause');
  }
};
