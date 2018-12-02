/*
 * Copyright 2015 Feedbee. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * This file is running in tab context. It defines API for communication between extension background page script
 * and web page. Use keySocket.init to initialise the tab to be controlled wia keySocket events (hot keys).
 */
keySocket = {};

keySocket.PREV = "prev";
keySocket.PLAY = "play-pause";
keySocket.NEXT = "next";
keySocket.STOP = "stop";

/**
 * Registers handler(s) for keysocket commands.
 *
 * handlers can be a function taking one argument (key) or a hash/array. If the argument is function, it's called on
 * every event. It's argument provides the command (key) that user have pressed. If the argument is a hash/array,
 * it will be searched for keys named as keysocket events (prev, play-pause, next, stop). If one will be found, it
 * will either be called (if the key's value is a function) or used as a selector to emulate click (in other way).
 *
 * @param name Plugin name for logging
 * @param handlers Function or hash/array
 */
keySocket.init = function (name, handlers) {
    chrome.runtime.onMessage.addListener(
        function (request) {
            console.log('keysocket: keypress received: ', request);

            // single handler
            if (typeof handlers === "function") {
                handlers(request.command);
            } else { // independent handlers (per command (key) -- function or selector)
                switch (request.command) {
                    case keySocket.PLAY: handlers[keySocket.PLAY] && keySocket.call(handlers[keySocket.PLAY]); break;
                    case keySocket.STOP: handlers[keySocket.STOP] && keySocket.call(handlers[keySocket.STOP]); break;
                    case keySocket.PREV: handlers[keySocket.PREV] && keySocket.call(handlers[keySocket.PREV]); break;
                    case keySocket.NEXT: handlers[keySocket.NEXT] && keySocket.call(handlers[keySocket.NEXT]); break;
                }
            }
        }
    );

    chrome.runtime.sendMessage({command: 'registerTab'});

    window.onunload = function () {
        chrome.runtime.sendMessage({command: "unregisterTab"});
    };

    console.log("keysocket: plugin " + name + " loaded");
};

keySocket.call = function (what) {
    if (typeof what === "function") {
        what();
    } else {
        keySocket.simulateClick(document.querySelector(what));
    }
};


/**
 * Use keySocket.simulateClick to emulate user click on web page control (button, link or other active element).
 *
 * @param element
 * @param options
 * @returns {boolean}
 */
keySocket.simulateClick = function (element, options) {
    if (!element) {
        console.log('keysocket: cannot simulate click, element undefined');
        return false;
    }

    var clickConfig = {
        bubbles: true,
        cancelable: false,
        view: window
    };
    if (options && options.cancelable) {
        clickConfig.cancelable = options.cancelable;
    }

    console.log(options);

    if (options && options.complex) {
        var clickDown = new MouseEvent('mousedown', clickConfig);
        var clickUp = new MouseEvent('mouseup', clickConfig);
        return element.dispatchEvent(clickDown) && element.dispatchEvent(clickUp);
    }

    var click = new MouseEvent('click', clickConfig);
    return element.dispatchEvent(click);
};

/**
 * keySocket.injectHandler is used for players that have an API on web page side.
 * Extension can't execute web page JS functions in raw way from the extension's scope.
 * keySocket.injectHandler inject JS code into the page scope and communicate with it
 * through browser's messages bus (window.postMessage).
 *
 * Initialize injection. `keysocketEventHandler` is a function
 * that will handle keysocket event on the web page side.
 *
 * @param keysocketEventHandler
 */
keySocket.injectHandler = function (keysocketEventHandler)
{
    var handleKeysocketMessages = function () {
        window.addEventListener("message", function(event) {
            if (event.source !== window) {
                return;
            }

            if (event.data.type && (event.data.type === "keysocket-media-event")) {
                window.keysocketOnKeyPressed(event.data.command);
            }
        });
    };

    injectFunction(handleKeysocketMessages);

    injectCode('window.keysocketOnKeyPressed = ' + keysocketEventHandler);

    function injectFunction(injectionFunction) {
        injectCode('(' + injectionFunction + ')()');
    }

    function injectCode(injection) {
        var injectedScript = document.createElement('script');
        injectedScript.textContent = injection;
        (document.head || document.documentElement).appendChild(injectedScript);
        injectedScript.parentNode.removeChild(injectedScript);
    }

    return function (key) {
        window.postMessage({ type: "keysocket-media-event", command: key }, "*");
    };
};
