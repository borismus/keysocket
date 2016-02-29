function onKeyPress(key) {
    /**
     * Look for the play dom button to check if its playing
     * @returns {boolean} Returns true if the dom element was found and not hidden with ng-hide
     * @private
      */
    function _isPlaying(){
        var playButtonElement = document.querySelector('.scrub-controls [ng-click^=play]');
        if (playButtonElement) {
            for (var i = 0; i < playButtonElement.classList.length; i++) {
                var className = playButtonElement.classList[i];
                if (className === 'ng-hide') {
                    return false;
                }
            }

            return true;
        }

        return false;
    }

    if (key === NEXT) {
        var nextButton = document.querySelector('.scrub-controls [ng-click^=skip]');
        simulateClick(nextButton);
    } else if (key === PLAY) {

        var buttonEl;
        if (_isPlaying()) {
            buttonEl = document.querySelector('.scrub-controls [ng-click^=play]');
        } else {
            buttonEl = document.querySelector('.scrub-controls [ng-click^=pause]');
        }
        simulateClick(buttonEl);
    } else if (key === PREV) {
        var backButton = document.querySelector('.scrub-controls [ng-click^=rewind]');
        simulateClick(backButton);
    }

}
