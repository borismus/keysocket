function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('button#fwd'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('button#play.hide') != null ? document.querySelector('button#pause') : document.querySelector('button#play'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('button#rew'));
  } else if(key === STOP) {
    simulateClick(document.querySelector('button#pause'));
  }
}