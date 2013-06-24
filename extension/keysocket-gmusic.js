var PREV = 20;
var PLAY = 16;
var NEXT = 19;

var connection = null;
var isConnected = false;

// Inject javascript into the dom so we can call the native SJBpost function to
// control the player.
function gmusic_sjbpost(command) {
  var elem = document.createElement("script");
  elem.type = "text/javascript";
  elem.innerHTML = "SJBpost('"+ command +"'); void 0";

  var append = document.head.appendChild(elem);
  document.head.removeChild(append);
}

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
        gmusic_sjbpost("prevSong");
      } else if (key == NEXT) {
        // Play the next song
        gmusic_sjbpost("nextSong");
      } else if (key == PLAY) {
        // Play the next song
        gmusic_sjbpost("playPause");
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
