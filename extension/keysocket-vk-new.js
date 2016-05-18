var playTarget = {
        audio_modal: 'top_audio_player_play'
    },
    nextTarget = {
        audio_modal: 'top_audio_player_next'
    },
    prevTarget = {
        audio_modal: 'top_audio_player_prev'
    };

function clickMany(targets) {
    for (var elementId in targets) {
        if (targets.hasOwnProperty(elementId))
            simulateClick(document.getElementsByClassName(targets[elementId])[0]);
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
