var activeTabs = [];

chrome.commands.onCommand.addListener(
  function(command) {
    console.log('Command:', command);
    for(var i = 0; i < activeTabs.length; i++){
      chrome.tabs.sendMessage(activeTabs[i], {command: command});
    }
  }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('Received tab message: ', request);
    if(request.command == 'activateTab' && sender.tab) {
      if(activeTabs.indexOf(sender.tab.id) == -1) {
        activeTabs.push(sender.tab.id);
      }
        chrome.pageAction.show(sender.tab.id);
        chrome.pageAction.setTitle({tabId: sender.tab.id, title: 'Click to disable media keys for this tab'});
    }
  }
);

chrome.tabs.onRemoved.addListener(
  function onRemoved(tabId, removeInfo) {
    var index = activeTabs.indexOf(tabId);
    if(index > -1) {
      activeTabs.splice(index, 1);
    }
  }
);

chrome.pageAction.onClicked.addListener(
  function(tab) {
    var index = activeTabs.indexOf(tab.id);
    if(index < 0) {
      activeTabs.push(tab.id);
      chrome.pageAction.setIcon({tabId: tab.id, path: {'19': 'icons/icon19.png', '38': 'icons/icon38.png'}});
      chrome.pageAction.setTitle({tabId: tab.id, title: 'Click to disable media keys for this tab'});
    } else {
      activeTabs.splice(index, 1);
      chrome.pageAction.setIcon({tabId: tab.id, path: {'19': 'icons/icon19-inactive.png', '38': 'icons/icon38-inactive.png'}});
      chrome.pageAction.setTitle({tabId: tab.id, title: 'Click to enable media keys for this tab'});
    }
  }
);
