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

keySocket = {};

keySocket.PREV = "prev";
keySocket.PLAY = "play-pause";
keySocket.NEXT = "next";
keySocket.STOP = "stop";

keySocket.init = function (name, handlers) {
    chrome.runtime.onMessage.addListener(
        function(request) {
            console.log('keysocket: keypress received: ', request);

            switch (request.command) {
                case keySocket.PLAY: handlers["play-pause"] && keySocket.call(handlers["play-pause"]); break;
                case keySocket.STOP: handlers["stop"] && keySocket.call(handlers["stop"]); break;
                case keySocket.PREV: handlers["prev"] && keySocket.call(handlers["prev"]); break;
                case keySocket.NEXT: handlers["next"] && keySocket.call(handlers["next"]); break;
            }
        }
    );

    chrome.runtime.sendMessage({command: 'registerTab'});

    window.onunload = function() {
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
    var click = new MouseEvent('click', clickConfig);
    return element.dispatchEvent(click);
};