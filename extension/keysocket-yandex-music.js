"use strict";

var PREV = 18,
    PLAY = 16,
    NEXT = 17,

    connection  = null,
    isConnected = false,

    playTarget = '.b-jambox__play',
    nextTarget = '.b-jambox__next',
    prevTarget = '.b-jambox__prev';

var simulateClick = function (target) {
    var evt = document.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.querySelectorAll(target)[0].dispatchEvent(evt);
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

            if (key == PREV) {
                simulateClick(prevTarget);
            } else if (key == NEXT) {
                simulateClick(nextTarget);
            } else if (key == PLAY) {
                simulateClick(playTarget);
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