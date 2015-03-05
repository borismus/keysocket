function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('.b-jambox__next, .player-controls__btn_next'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('.b-jambox__play, .player-controls__btn_play'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('.b-jambox__prev, .player-controls__btn_prev'));
  }
}