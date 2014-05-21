var playTarget = {
        audio_page   : 'ac_play',
        audio_modal  : 'pd_play',
        audio_widget : 'gp_paly',
        head_button  : 'head_play_btn'
    },
    nextTarget = {
        audio_page  : 'ac_next',
        audio_modal : 'pd_next'
    },
    prevTarget = {
        audio_page  : 'ac_prev',
        audio_modal : 'pd_prev'
    };

function clickMany(targets){
    for (var elementId in targets) {
        if(targets.hasOwnProperty(elementId))
            simulateClick(document.getElementById(targets[elementId]));
    }
}

function onKeyPress(key) {
    if (key == PREV) {
        clickMany(prevTarget);
    } else if (key == NEXT) {
        clickMany(nextTarget);
    } else if (key == PLAY) {
        clickMany(playTarget);
    }
}