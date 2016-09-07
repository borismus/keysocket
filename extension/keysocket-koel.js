var baseTarget = "#playerControls .control";

function onKeyPress(key) {
    if (key === PREV) {
    	var target = baseTarget+'.prev';
        simulateClick(document.querySelector(target));
    } else if (key === NEXT) {
    	var target = baseTarget+'.next';
        simulateClick(document.querySelector(target));
    } else if (key === PLAY) {
    	var playButton  = document.querySelector(baseTarget+'.play');
    	var pauseButton = document.querySelector(baseTarget+'.pause');
    	var target 		= (null != playButton) ? playButton : pauseButton;

        simulateClick(target);
    }
}
