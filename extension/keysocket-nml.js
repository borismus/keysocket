function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('#ctrl-next'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('#ctrl-play').style.display == 'none' ? document.querySelector('#ctrl-pause') : document.querySelector('#ctrl-play'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('#ctrl-previous'));
  } else if(key === STOP) {
    simulateClick(document.querySelector('#ctrl-pause'));
  }
}