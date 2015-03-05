function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('#play-next'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('#play-pause'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('#play-prev'));
  }
}