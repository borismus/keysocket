function onKeyPress(key) {
  if (this.jwplayer) {
    if (key === NEXT) {
      var playPauseButton = document.querySelector('img[onclick="onNext(false)"]');
      simulateClick(playPauseButton);
    } else if (key === PLAY) {
      location.href = "javascript:window.jwplayer().play()";
    } else if (key === PREV) {
      var backButton = document.querySelector('img[onclick="onPrevious()"]');
      simulateClick(backButton);
    }
  }
}
