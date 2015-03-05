function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('div.player_wrapper > a.next'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('div.player_wrapper > a.playPause.pause') ? document.querySelector('div.player_wrapper > a.playPause.pause') : document.querySelector('div.player_wrapper > a.playPause.play'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('div.player_wrapper > a.prev'));
  } else if(key === STOP) {
    simulateClick(document.querySelector('div.player_wrapper > a.playPause.play'));
  }
}