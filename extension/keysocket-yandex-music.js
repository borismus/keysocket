"use strict";

var connection  = null,
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
            var key = parseInt(e.data);

            if (18 === key || 20 === key) {
                simulateClick(prevTarget);
            } else if (17 === key || 19 === key) {
                simulateClick(nextTarget);
            } else if (16 === key) {
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