function onKeyPress(key) {
  if (this.jwplayer) {
    if (key === NEXT) {

      // Subsonic impl
      var nextButton = document.querySelector('img[onclick="onNext(false)"]');

      // Madsonic impl
      if(!nextButton){
        nextButton = document.querySelector('a[onclick="onNext(false)"]');
      }

      simulateClick(nextButton);

    } else if (key === PLAY) {
      location.href = "javascript:window.jwplayer().play()";
    } else if (key === PREV) {

      // Subsonic impl
      var backButton = document.querySelector('img[onclick="onPrevious()"]');

       // Madsonic impl
      if(!backButton){
        backButton = document.querySelector('a[onclick="onPrevious()"]');
      }

      simulateClick(backButton);
    }
  }
}
