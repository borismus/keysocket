function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('.skipControl__next'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('.playControl'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('.skipControl__previous'));
  } else if(key === STOP) {
    if(document.querySelector('.playControl.playing') != null) simulateClick(document.querySelector('.playControl'));
  }
}