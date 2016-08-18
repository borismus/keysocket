var playTarget = '.player-controls__play';
var nextTarget = '.button_round';

function onKeyPress(key) {
    if (key === NEXT) {
        var nextCard = document.querySelector('.slider__item_next');

        console.log(nextCard);
        simulateClick(nextCard.querySelectorAll(nextTarget)[2]);
    } else if (key === PLAY) {
        simulateClick(document.querySelector(playTarget));
    }
}
