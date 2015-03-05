function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('button.next-btn'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('.play-btn').classList.contains('hidden') ? document.querySelector('button.pause-btn') : document.querySelector('.play-btn'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('button.previous-btn'));
  } else if(key === STOP) {
    simulateClick(document.querySelector('button.stop-btn'));
  }
}