function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('.iconPlayerNext'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('.iconPlayerPause') || document.querySelector('.iconPlayerPlay'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('.iconPlayerPrevious'));
  } else if(key === STOP) {
    simulateClick(document.querySelector('.iconPlayerPause'));
  }
}