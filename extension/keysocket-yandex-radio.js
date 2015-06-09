var playTarget = '.player-controls__play';
var nextTarget = '.button_round';

function onKeyPress(key) {
    if (key === NEXT) {
        var cards = document.querySelectorAll('.slider__item')
        var nextCard = cards[cards.length - 3];
        
        console.log(nextCard);
        simulateClick(nextCard.querySelector(nextTarget));
    } else if (key === PLAY) {
        simulateClick(document.querySelector(playTarget));
    }
}
