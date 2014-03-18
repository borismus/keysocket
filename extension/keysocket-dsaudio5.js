var connection = null;
var isConnected = false;

function controlDsAudio5(key) {
    if(key === PREV) {
        var prevButton = document.querySelector(".player-prev [type='button']");
        simulateClick(prevButton);
    }if(key === NEXT) {
		var nextButton = document.querySelector(".player-next [type='button']");
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var playPauseButton = document.querySelector(".player-play [type='button']");
        simulateClick(playPauseButton);
    }
}

reconnect(controlDsAudio5, connection, isConnected);



function simulateClick(element) {
    var click = document.createEvent('MouseEvents');
    click.initMouseEvent('click', true, false,  document, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	element.dispatchEvent(click);
}