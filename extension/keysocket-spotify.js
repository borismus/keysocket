function onKeyPress(key) {
var frame = document.querySelector('#app-player');
  if(key === NEXT) {
    simulateClick(frame.contentDocument.querySelector('#next'));
  } else if(key === PLAY) {
    simulateClick(frame.contentDocument.querySelector('#play-pause'));
  } else if(key === PREV) {
    simulateClick(frame.contentDocument.querySelector('#previous'));
  } else if(key === STOP) {
    if(frame.contentDocument.querySelector('#play-pause.playing') != null) simulateClick(frame.contentDocument.querySelector('#play-pause'));
  }
}