var PREV = 'prev';
var PLAY = 'play-pause';
var NEXT = 'next';
var STOP = 'stop';


function simulateClick(element) {
    if (!element) {
        console.log('keysocket: Cannot simulate click, element undefined');
        return false;
    }

    var click = new MouseEvent('click', {
        bubbles: true,
        cancelable: false,
        view: window,
    });
    return element.dispatchEvent(click);
}

function clickHelper(element, frame) {
    if (!element) {
        console.log('keysocket: Cannot simulate click, element undefined');
        return false;
    }

    var click = new MouseEvent('click', {
        bubbles: true,
        cancelable: false,
        view: window,
    });

    if (frame !== 'undefined') {
      clickOn = document.querySelector(frame).contentDocument;
    } else {
      clickOn = document;
    }
    return clickOn.querySelector(element).dispatchEvent(click);
}

chrome.runtime.onMessage.addListener(
    function(request) {
        console.log('Received keypress: ', request);
        onKeyPress(request.command);
    }
);

chrome.runtime.sendMessage({command: 'activateTab'});
