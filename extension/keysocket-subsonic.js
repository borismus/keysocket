function onKeyPress(key) {
  if (this.jwplayer) {
    if (key === NEXT) {
      location.href = "javascript:window.onNext(repeatEnabled)";
    } else if (key === PLAY) {
      location.href = "javascript:window.jwplayer().play()";
    } else if (key === PREV) {
      location.href = "javascript:window.onPrevious()";
    }
  }
}
