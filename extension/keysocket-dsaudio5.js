function onKeyPress(key){
    if(key === PREV) {
        var prevButton = document.querySelector(".player-prev [type='button']");
        simulateClick(prevButton);
    } else if(key === NEXT) {
      var nextButton = document.querySelector(".player-next [type='button']");
      simulateClick(nextButton);
    } else if(key === PLAY) {
      var playPauseButton = document.querySelector(".player-play [type='button']");
      simulateClick(playPauseButton);
    }
}

console.log("keysocket: Loading Synology extension");