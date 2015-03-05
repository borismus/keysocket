function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('#playerSkipButton'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('#playerPlayPauseButton'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('#playerSkipBackButton'));
  }
}