function onKeyPress(key) {
    if (key === NEXT) {
        simulateSelectorClick('button#fwd');
    } else if (key === PREV) {
        simulateSelectorClick('button#rew');
    } else if (key === PLAY) {
        var hidebutton = document.querySelector('button.controls.hide');
        if (hidebutton != null) {
            if (hidebutton.id == 'play')
                simulateSelectorClick('button#pause');
            else
                simulateSelectorClick('button#play');
        }
    }

}
