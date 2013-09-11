"use strict";

var PREV = '20';
var PLAY = '16';
var NEXT = '19';

var connection  = null;
var isConnected = false;

var simulateClick = function (selector) {
  var event, context;

  event = document.createEvent('MouseEvents');
  event.initMouseEvent('click', true, false, document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

  var elements = document.querySelectorAll(selector);

  for (var i = 0, max = elements.length; i < max; i++) {
    context = elements[i];
    if (context !== null) {
      context.dispatchEvent(event);
      break;
    }
  }
};

var reconnect = function () {
  if (!isConnected) {
    connect();
    setTimeout(reconnect, 1000);
  }
};

var connect = function () {
  connection = new WebSocket('ws://localhost:1337/');

  connection.onopen = function () {
    isConnected = true;

    connection.send('Ping');
    connection.onerror = function(error) {
      console.log('WS error', error);
    };

    connection.onmessage = function (e) {
      var key = e.data;
      if (key === PREV) {
        simulateClick('.player-controls .js-rewind');
      } else if (key === NEXT) {
        simulateClick('.player-controls .js-forward');
      } else if (key === PLAY) {
        simulateClick('.player-controls .js-play');
      }
    };

    connection.onclose = function (e) {
      isConnected = false;
      reconnect();
    };
  };
};

var initApp = function () {
  reconnect();
};

initApp();
