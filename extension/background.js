var activeTabs = [];

chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);

    for(var i=0; i<activeTabs.length; i++){
        chrome.tabs.sendMessage(activeTabs[i], {command: command});
    }
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Received tab message: ", request);
        if(request.command == "activateTab" && sender.tab && activeTabs.indexOf(sender.tab.id) == -1){
            activeTabs.push(sender.tab.id);
            chrome.pageAction.show(sender.tab.id);
        }
    }
);

chrome.tabs.onRemoved.addListener(function onRemoved(tabId, removeInfo){
    var index = activeTabs.indexOf(tabId);
    if(index > -1){
        activeTabs.splice(index,1);
    }
});