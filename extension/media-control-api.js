// Media Events emmiter
chrome.runtime.onMessage.addListener(function(request) {
    switch (request.command) {
        case "play-pause":
            document.dispatchEvent(new Event("MediaPlayPause"));
            break;
        
        case "stop":
            document.dispatchEvent(new Event("MediaStop"));
            break;

        case "prev":
            document.dispatchEvent(new Event("MediaPrev"));
            break;

        case "next":
            document.dispatchEvent(new Event("MediaNext"));
            break;
    }
});

// Tab registration/unregistration by MediaControlStateChanged event
document.addEventListener("MediaControlStateChanged", function () {
    registerOrUnregisterPage();
});

// Unregister tab before move to another URI
window.onunload = function() {
    chrome.runtime.sendMessage({command: "unregisterTab"});
}

// Initial tab registration by meta tag
registerOrUnregisterPage();

function isPageMediaControllable() {
    var tags = document.getElementsByName("media-controllable");
    if (tags.length > 0) {
        for (var i = 0; i < tags.length; i++) {
            if (tags[i].getAttribute("content") !== 'no') {
                return true;
            }
        }
    }
    return false;
}

function registerOrUnregisterPage() {
    chrome.runtime.sendMessage({command: isPageMediaControllable() ? "registerTab" : "unregisterTab"});
}