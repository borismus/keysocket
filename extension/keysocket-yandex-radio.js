var nodes = document.querySelectorAll('.slider__item.slider__item_track');

var playTarget = '.player-controls__play';
var nextTarget = '.button.button_round.skip';

function onKeyPress(key) {
    if (key === NEXT) {
        var nextCard = nodes[nodes.length - 2];
        simulateClick(nextCard.querySelector(nextTarget));
    } else if (key === PLAY) {
        simulateClick(document.querySelector(playTarget));
    }
}
