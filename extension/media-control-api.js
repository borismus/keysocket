// Media Events emitter
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
document.addEventListener("MediaControlStateChanged", function (event) {
    if (event instanceof CustomEvent && event.detail) {
        if (event.detail === 'enabled') {
            registerOrUnregisterPage(true);
        } else if (event.detail === 'disabled') {
            registerOrUnregisterPage(false);
        }
    } else {
        registerOrUnregisterPage(isPageMediaControllable());
    }
});

// Unregister tab before move to another URI
window.onunload = function() {
    chrome.runtime.sendMessage({command: "unregisterTab"});
};

// Initial tab registration by meta tag
registerOrUnregisterPage(isPageMediaControllable());

function isPageMediaControllable() {
    var tags = document.getElementsByName("media-controllable");
    if (tags.length > 0) {
        for (var i = 0; i < tags.length; i++) {
            if (tags[i].getAttribute("content") === "no") {
                return false;
            }
        }
        return true;
    }
    return true;
}

function registerOrUnregisterPage(register) {
    chrome.runtime.sendMessage({command: register ? "registerTab" : "unregisterTab"});
}