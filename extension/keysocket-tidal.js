function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('button.play-controls__next'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('button.play-controls__play').offsetParent != null ? document.querySelector('button.play-controls__play') : document.querySelector('button.play-controls__pause'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('button.play-controls__previous'));
  } else if(key === STOP) {
    simulateClick(document.querySelector('button.play-controls__pause'))
  }
}