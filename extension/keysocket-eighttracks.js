var usCanadaVersionSelectors = {
    playButtonSelector:'#player_play_button',
    pauseButtonSelector:'#player_pause_button',
    skipButtonSelector: '#player_skip_button',
    nextMixButtonSelector: '#next_mix_button'
};

var youtubeVersionSelectors = {
    playButtonSelector: '#youtube_play_button',
    pauseButtonSelector: '#youtube_pause_button',
    skipButtonSelector: '#youtube_skip_button',
    nextMixButtonSelector: '#youtube_mix_button'
};

function isYoutubeVersionRendered(){
    return document.querySelector('.international_message')
}

function getSelectorsForTheVersion() {
    if (isYoutubeVersionRendered()){
        return youtubeVersionSelectors
    }
    return usCanadaVersionSelectors
}

function pressOneButtonOrAnother(oneButtonSelector, anotherButtonSelector) {
    var oneButton = document.querySelector(oneButtonSelector);
    if(window.getComputedStyle(oneButton).display !== "none"){
        keySocket.simulateClick(oneButton);
    }
    else{
        var anotherButton = document.querySelector(anotherButtonSelector);
        keySocket.simulateClick(anotherButton);
    }
}

keySocket.init(
    "8tracks",
    {
        "play-pause": function () {
            var selectors = getSelectorsForTheVersion();
            pressOneButtonOrAnother(selectors.playButtonSelector, selectors.pauseButtonSelector)
        },
        // "prev": ".previous",
        "next": function () {
            var selectors = getSelectorsForTheVersion();
            pressOneButtonOrAnother(selectors.skipButtonSelector, selectors.nextMixButtonSelector)
        }
        // stop is omitted
    }
);