function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('.icon-next')[0]);
  } else if(key === PLAY) {
    simulateClick(document.querySelector('.wrapper-icon-play-pause')[0]);
  } else if(key === PREV) {
    simulateClick(document.querySelector('.icon-previous')[0]);
  }
}