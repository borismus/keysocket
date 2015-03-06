function onKeyPress(key) {
    if (key == NEXT) {
        var nextbutton = document.querySelector('button#fwd');
        simulateClick(nextbutton);
    } else if (key == PREV) {
        var prevbutton = document.querySelector('button#rew');
        simulateClick(prevbutton);
    } else if (key == PLAY) {
        var playbutton = document.querySelector('button#play');
        var pausebutton = document.querySelector('button#pause');
        var hidebutton = document.querySelector('button.controls.hide');
        if (hidebutton != null) {
            if (hidebutton.id == 'play')
                simulateClick(pausebutton);
            else
                simulateClick(playbutton);
        }
    }

}
