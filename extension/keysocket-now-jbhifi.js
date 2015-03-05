function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('li.next'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('li.play-pause'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('li.prev'));
  } else if(key === STOP) {
    if(document.querySelector('li.playing') != null) simulateClick(document.querySelector('li.playing'));
  }
}