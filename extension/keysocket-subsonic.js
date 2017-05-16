function onKeyPress(key) {
  if (key === NEXT) {
    location.href = "javascript:window.onNext(repeatEnabled)";
  } else if (key === PLAY) {
    location.href = "javascript:if(localPlayer.paused)window.onStart();else window.onStop();console.log(1)";
  } else if (key === PREV) {
    location.href = "javascript:window.onPrevious()";
  }
}
