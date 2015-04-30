function onKeyPress(key) {
    var eventType = "Media";
    switch (key) {
        case PREV:
            eventType += "Prev";
            break;
        case PLAY:
            eventType += "PlayPause";
            break;
        case NEXT:
            eventType += "Next";
            break;
        case STOP:
            eventType += "Stop";
            break;
    }
    
    var event = new Event(eventType);
    document.dispatchEvent(event);
}
