function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('.mus_player-controls_i.__forward'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('.mus_player-controls_i.__pause, .toolbar_music-play'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('.mus_player-controls_i.__back'));
  }
}