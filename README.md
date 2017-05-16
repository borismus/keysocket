Global keyboard bindings to control your Chrome-based music player.
Allows your keyboard media keys (play/pause, next, previous) to work
when you're listening to music on various streaming websites.

# Supported Sites
   * 8tracks
   * 22tracks
   * Amazon Cloud Player
   * Bandcamp
   * Birp
   * Bop
   * Bugs Music
   * Chrome Built-In Player
   * Comcast/Xfinity
   * Deezer
   * Digitally Imported (di.fm)
   * Gaana.com
   * Google Play Music
   * Groove Music
   * Hype Machine
   * Jamstash
   * Jango.com
   * JB Hi-Fi Now
   * Livestream.com
   * Mixcloud
   * Music Choice
   * Myspace
   * Myzuka.fm
   * Naxos Music Library
   * Netflix
   * Noon Pacific
   * NRK Radio
   * Ok.ru
   * Overcast
   * Pandora
   * Phish Tracks
   * Picarto.tv
   * Plex
   * Pocketcasts.com
   * Prostopleer
   * Qobuz
   * Rdio
   * Relax-Hub.com
   * Saavn.com
   * Slacker
   * Sirius XM Radio
   * SomaFM
   * Songza
   * Soundcloud
   * Spotify
   * Spreaker
   * Streamsquid
   * Subsonic
   * Superplayer.fm
   * Synology Audio Station v.5
   * thesixtyone
   * Tidal
   * Tracksflow.com
   * Twitch.tv
   * Ustream.tv
   * vk.com (Vkontakte)
   * Xiami Music
   * YouTube
   * Zvooq
   * Яндекс.Музыка (Yandex.Music)
   * Яндекс.Радио (Yandex.Radio)

# Usage

1. Install extension from the [chrome web store][crx].
2. Edit the `Keyboard shortcuts` to give Keysocket 'Global' permissions
    * Open a browser tab to [chrome://extensions](chrome://extensions)
    * Scroll to the bottom & click `Keyboard shortcuts`
    * Find `Keysocket Media Keys` and change each desired key to `Global`

# API

Keysocket also provides an API that websites can use to bind their
players without the need to wait for their PR to be accepted and
released in the Chrome Webstore extension.  Keysocket fires events
for each media key, which the website can add event listeners for.
Below is an example from http://www.relax-hub.com, written by the
current project maintainer, Feedbee:

```javascript
// Web Page Media Control API interaction (v0.4)
// https://github.com/feedbee/web-page-media-control-api-spec
// for Key Socket Media Keys Chrome extension
// https://chrome.google.com/webstore/detail/key-socket-media-keys/fphfgdknbpakeedbaenojjdcdoajihik?hl=en

document.addEventListener("MediaPlayPause", function () {
  playerCollection.send("toggle");
});
document.addEventListener("MediaStop", function () {
  playerCollection.send("stop");
});
document.addEventListener("MediaPrev", function () {
  var player = playerCollection.getPrevPlayer();
  if (player) {
      player.send("play");
  }
});
document.addEventListener("MediaNext", function () {
  var player = playerCollection.getNextPlayer();
  if (player) {
      player.send("play");
  }
});
```

# Please contribute!

* Looking for adapters for other music players.

[crx]: https://chrome.google.com/webstore/detail/fphfgdknbpakeedbaenojjdcdoajihik
