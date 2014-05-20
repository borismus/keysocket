var PREV = 'prev';
var PLAY = 'play-pause';
var NEXT = 'next';

function simulateClick(element) {
    if(!element){
        console.log('keysocket: Cannot simulate click, element undefined');
        return false;
    } 

    var click = document.createEvent('MouseEvents');
    click.initMouseEvent('click', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    return element.dispatchEvent(click);
}

chrome.runtime.onMessage.addListener(
    function(request) {
        console.log("Received keypress: ", request);
        onKeyPress(request.command);
    }
);

chrome.runtime.sendMessage({command: "activateTab"});