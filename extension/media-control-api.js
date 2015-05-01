// Tab registration by MediaControlled event
document.addEventListener("MediaControlled", function () {
    chrome.runtime.sendMessage({command: "registerTab"});
});

// Tab unregistration by MediaUncontrolled event
document.addEventListener("MediaUncontrolled", function () {
    chrome.runtime.sendMessage({command: "unregisterTab"});
});

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

// Tell document that we are ready
console.log('Keysocket Media Control API initialized');
document.dispatchEvent(new Event("MediaControlApiInit"));

// Tab registration by meta tag
if (document.getElementsByName("media-controlled").length > 0) {
    chrome.runtime.sendMessage({command: "registerTab"});
}

// Unregister tab before move to another URI
window.onunload = function() {
    chrome.runtime.sendMessage({command: "unregisterTab"});
}