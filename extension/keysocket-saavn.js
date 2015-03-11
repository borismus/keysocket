function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick('button#fwd');
    } else if (key === PREV) {
        simulateClick('button#rew');
    } else if (key === PLAY) {
        var hidebutton = document.querySelector('button.controls.hide');
        if (hidebutton != null) {
            if (hidebutton.id == 'play')
                simulateClick('button#pause');
            else
                simulateClick('button#play');
        }
    }

}
