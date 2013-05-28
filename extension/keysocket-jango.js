"use strict";
console.log(123);

var PREV = 20,
    PLAY = 16,
    NEXT = 19,

    connection  = null,
    isConnected = false;

var simulateClick = function (selector) {
    var event,
        context,
        doc = frames['content'].document;

    event = doc.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, doc, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    var elements = doc.querySelectorAll(selector);

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
            if (key == NEXT) {
                simulateClick('#btn-ff');
            } else if (key == PLAY) {
                simulateClick('#btn-playpause');
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