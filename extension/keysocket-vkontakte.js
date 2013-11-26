var PREV = 20,
    PLAY = 16,
    NEXT = 19,

    connection  = null,
    isConnected = false,

    playTarget = {
        audio_page   : 'ac_play',
        audio_modal  : 'pd_play',
        audio_widget : 'gp_play',
        head_button  : 'head_play_btn'
    },
    nextTarget = {
        audio_page  : 'ac_next',
        audio_modal : 'pd_next'
    },
    prevTarget = {
        audio_page  : 'ac_prev',
        audio_modal : 'pd_prev'
    };

var simulateClick = function (target) {
    var event,
        context,
        elementId;

    event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    for (elementId in target) {
        context = document.getElementById(target[elementId]);

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
