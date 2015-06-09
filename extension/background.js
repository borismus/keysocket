/*
 * Copyright 2015 Boris Smus. All Rights Reserved.
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

var registeredTabs = [];
var registerTab = function (tabId) {
    if (registeredTabs.indexOf(tabId) == -1) {
        registeredTabs.push(tabId);

        chrome.pageAction.show(tabId);
        chrome.pageAction.setTitle({
            tabId: tabId,
            title: 'Click to disable media keys for this tab'
        });
    }
};
var unregisterTab = function(tabId) {
    var index = registeredTabs.indexOf(tabId);
    if (index > -1) {
        registeredTabs.splice(index, 1);
    }
};

chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);

    for (var i = 0; i < registeredTabs.length; i++) {
        chrome.tabs.sendMessage(registeredTabs[i], {command: command});
    }
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('Received tab message: ', request);

        if (request.command == 'registerTab' && sender.tab) {
            registerTab(sender.tab.id);
        } else if (request.command == 'unregisterTab' && sender.tab) {
            unregisterTab(sender.tab.id);
        }
    }
);

chrome.tabs.onRemoved.addListener(unregisterTab);

chrome.pageAction.onClicked.addListener(function(tab) {
    var index = registeredTabs.indexOf(tab.id);
    if (index < 0) {
        registeredTabs.push(tab.id);
        chrome.pageAction.setIcon({
            tabId: tab.id,
            path: {
                '19': 'icons/icon19.png',
                '38': 'icons/icon38.png'
            }
        });
        chrome.pageAction.setTitle({
            tabId: tab.id,
            title: 'Click to disable media keys for this tab'
        });
    } else {
        registeredTabs.splice(index, 1);
        chrome.pageAction.setIcon({
            tabId: tab.id,
            path: {
                '19': 'icons/icon19-inactive.png',
                '38': 'icons/icon38-inactive.png'
            }
        });
        chrome.pageAction.setTitle({
            tabId: tab.id,
            title: 'Click to enable media keys for this tab'
        });
    }
});
