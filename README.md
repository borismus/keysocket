Global keyboard bindings to control your Chrome-based music player.
Allows your keyboard media keys (play/pause, next, previous) to work
when you're listening to music on various streaming websites.

# Supported Sites

   * 163 Music
   * 8tracks
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
   * iloveradio.de
   * Jamstash
   * Jango.com
   * Mixcloud
   * Music Choice (untested)
   * Myspace
   * Myzuka.fm
   * Naxos Music Library
   * Netflix
   * Noon Pacific (untested)
   * NRK Radio
   * Ok.ru
   * Overcast (untested)
   * Pandora
   * Phish Tracks
   * Picarto.tv
   * Plex (untested)
   * Pocketcasts.com
   * Prostopleer
   * Qobuz
   * Relax-Hub.com
   * Saavn.com
   * Slacker
   * Sirius XM Radio
   * SomaFM
   * Soundcloud
   * Sowndhaus
   * Spotify
   * Spreaker
   * Streamsquid
   * Subsonic (and Madsonic)
   * Superplayer.fm (untested)
   * Synology Audio Station v.5 (untested)
   * thesixtyone
   * Tidal (untested)
   * tunein.com
   * Twitch.tv
   * Ustream.tv
   * vk.com (Vkontakte)
   * XFINITY (untested)
   * Xiami Music
   * YouTube
   * Zvooq
   * Яндекс.Музыка (Yandex.Music)
   * Яндекс.Радио (Yandex.Radio)

# Untested Sites (after latest changes)

   * Music Choice (account is needed)
   * Noon Pacific (account is needed)
   * Overcast (account is needed)
   * Plex (can't simulate click, not working)
   * Superplayer.fm (regional restrictions)
   * Synology (special environment is needed)
   * Tidal (regional restrictions)
   * XFINITY (account is needed)

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

* Looking for adapters for other music players. Create Pull Requests to contribute. Create Issues to inform us about
broken sites (but PR is preferable). 

[crx]: https://chrome.google.com/webstore/detail/fphfgdknbpakeedbaenojjdcdoajihik
