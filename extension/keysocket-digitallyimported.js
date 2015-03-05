function onKeyPress(key) {
  if(key === PLAY) {
    simulateClick(document.querySelector('#webplayer-region .controls a:first-child'));
  }
}