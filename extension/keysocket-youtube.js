function onKeyPress(key) {
    if(key === NEXT) {
        var nextButton = document.querySelector('.yt-uix-button-icon-playlist-bar-next,.yt-uix-button-icon-watch-appbar-play-next'); 
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var video = document.querySelector('#movie_player');
        
        // The extension has no access to this function when using the HTML-5 <video>-player
        // but we can still access the controls on the <video>-element itself
        if(!video.getPlayerState) {
            video = document.querySelector('#movie_player video'); // HTML-5 <video>-player
        
            if(video.paused) {
                video.play();
            } else {
                video.pause();
            }
        } else {
            if(video.getPlayerState() === 2) {
                video.playVideo();
            } else {
                video.pauseVideo();
            }
        }
    } else if(key === PREV) {
        var backButton = document.querySelector('.yt-uix-button-icon-playlist-bar-prev,.yt-uix-button-icon-watch-appbar-play-prev');
        simulateClick(backButton);
    }
}