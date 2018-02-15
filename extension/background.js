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

var tabsState = {};
var controllableTabs = {}
var lastPlayingTab = -1;
var activeTab = -1;
var playingTabs = {};

function sendCommand(tabId, command) {
	
	if (command === 'play-pause') {
		
		if (playingTabs[tabId]) {
			delete playingTabs[tabId]
		} else {
			playingTabs[tabId] = true;
		}
		
	}
	
	chrome.tabs.sendMessage(tabId, {command: command});
}

function registerTab(tabId) {
    if (!controllableTabs.hasOwnProperty(tabId)) {
        controllableTabs[tabId] = true;
		
		chrome.tabs.get(tabId, function(tab) {
			if (tab.audible) {
				playingTabs[tabId] = true;
			}
		});

        chrome.pageAction.show(tabId);
		//TODO: save state in local storage
        toggleState(tabId, true)
    }
};

function unregisterTab(tabId) {
    if (controllableTabs.hasOwnProperty(tabId)) {
        delete controllableTabs[tabId];
		delete tabsState[tabId];
		
		if (playingTabs.hasOwnProperty(tabId)) {
			delete playingTabs[tabId];
		}

    }
};

function checkActive(tabId, changeInfo) {
	if (!changeInfo.hasOwnProperty('audible')) {
		return;
	}
	
	if (!controllableTabs.hasOwnProperty(tabId)) {
		console.log('ignore unregistered');
		return;
	}
	
	var audible = changeInfo.audible;
	
	if (audible) {
		playingTabs[tabId] = true;
		lastPlayingTab = tabId;
		console.log('update playingTabs', playingTabs);
	} else {
		
		if (playingTabs[tabId] !== undefined) {
			delete playingTabs[tabId];
			console.log('delete tab', playingTabs);
		}
		
		lastPlayingTab = tabId;
	}
}

function toggleState(tabId, state) {
	tabId = tabId.id || tabId
	tabsState[tabId] = state !== undefined && state || !tabsState[tabId]
	postfix = ''
	
	if (!tabsState[tabId]) {
		postfix = '-inactive'
	}
	
	chrome.pageAction.setIcon({
		tabId: tabId,
		path: {
			'19': 'icons/icon19' + postfix + '.png',
			'38': 'icons/icon38' + postfix + '.png'
		}
	});

}

function processAction(command) {
    console.log('Command:', command);

	var isPlaying = false;
	
	for (tabId in playingTabs) {
		
		if (playingTabs.hasOwnProperty(tabId) && tabsState[tabId]) {
			isPlaying = true;
			sendCommand(+tabId, command);
			console.log('control playing', tabId);
		}
		
	}
	
	if (isPlaying) {
		return;
	}
	
	if (controllableTabs[activeTab] && tabsState[activeTab]){
		console.log('control active', activeTab);
		sendCommand(activeTab, command)
	} else if (lastPlayingTab !== -1 && tabsState[lastPlayingTab]) {
		console.log('control lastPlayingTab', lastPlayingTab)
		sendCommand(lastPlayingTab, command);
	}
}

chrome.commands.onCommand.addListener(processAction);
chrome.tabs.onRemoved.addListener(unregisterTab);
chrome.tabs.onUpdated.addListener(checkActive);
chrome.pageAction.onClicked.addListener(toggleState);

chrome.tabs.onActivated.addListener(function (evt) {
	activeTab = evt.tabId;
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log('Received tab message: ', request);

        if (request.command == 'registerTab' && sender.tab) {
            registerTab(sender.tab.id);
        } else if (request.command == 'unregisterTab' && sender.tab) {
            unregisterTab(sender.tab.id);
        }
    }
);
