function onKeyPress(key) {
  if(key === NEXT) {
    simulateClick(document.querySelector('[data-control=next]'));
  } else if(key === PLAY) {
    simulateClick(document.querySelector('[data-control=togglePause]'));
  } else if(key === PREV) {
    simulateClick(document.querySelector('[data-control=prev]'));
  }
}