[![LICENSE](https://img.shields.io/badge/license-Apache_2.0-lightgrey.svg)](https://github.com/borismus/keysocket/blob/master/COPYING)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/users/fphfgdknbpakeedbaenojjdcdoajihik.svg)](https://chrome.google.com/webstore/detail/key-socket-media-keys/fphfgdknbpakeedbaenojjdcdoajihik)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/rating-count/fphfgdknbpakeedbaenojjdcdoajihik.svg)](https://chrome.google.com/webstore/detail/key-socket-media-keys/fphfgdknbpakeedbaenojjdcdoajihik)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/stars/fphfgdknbpakeedbaenojjdcdoajihik.svg)](https://chrome.google.com/webstore/detail/key-socket-media-keys/fphfgdknbpakeedbaenojjdcdoajihik)
[![github-stars-image](https://img.shields.io/github/stars/borismus/keysocket.svg?label=github%20stars)](https://github.com/borismus/keysocket)

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
   * Brain.fm
   * Bugs Music
   * Castbox.fm
   * Chrome Built-In Player
   * Comcast/Xfinity
   * Coursera
   * Crunchyroll
   * Deezer
   * Digitally Imported (di.fm)
   * Gaana.com
   * Google Play Music
   * Groove Music
   * HearThis.at
   * Hype Machine
   * iloveradio.de
   * BBC iPlayer
   * Jamendo
   * Jamstash
   * Jango.com
   * Mixcloud
   * Zing MP3
   * Met Opera Season On-Demand
   * Musi.sh
   * Music Choice (untested)
   * Myspace
   * Myzuka.fm
   * Napster
   * Naxos Music Library
   * Netflix
   * Noisli (only without account tested)
   * Noon Pacific (untested)
   * NRK Radio
   * Ok.ru
   * Openload.co
   * Overcast
   * Pandora
   * Phish Tracks
   * Picarto.tv
   * Plex
   * Pluralsight
   * Pocketcasts.com
   * Qobuz
   * Relax-Hub.com
   * Saavn.com
   * Showmax
   * Sirius XM Radio
   * Slacker
   * SomaFM
   * Soundcloud
   * Sowndhaus
   * Spotify
   * Spreaker
   * Streamsquid
   * Subsonic (and Madsonic)
   * Superplayer.fm (untested)
   * Supersport.com
   * Synology Audio Station v.5 (untested)
   * thesixtyone
   * Tidal (untested)
   * tunein.com
   * tver.jp
   * Twitch.tv
   * Ustream.tv
   * vk.com (Vkontakte)
   * Vimeo
   * XFINITY (untested)
   * Xiami Music
   * YouTube
   * YouTube Music
   * Zvooq
   * Яндекс.Музыка (Yandex.Music)
   * Яндекс.Радио (Yandex.Radio)
   * IbizaSonica.com

# Untested Sites (after latest changes)

   * Music Choice (account is needed)
   * Noon Pacific (account is needed)
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

Web Page Media Control API documentation is [available here](https://github.com/feedbee/web-page-media-control-api-spec).

# Please, contribute!

* Looking for plugins for other music players. Create Pull Requests to contribute. Create Issues to inform us about
broken sites (but PR is preferable). 

Plugin creation is simple. If you have found a website with media content, that isn't supported by keysocket, just
write a plugin by yourself and create new Pull Request to share it with others. How to do it?

First of all, determine the fixed part of website's URL, where a media content is shown. In `extension/manifest.json`
add an item into `content_scripts` array like this:

```
    {
      "matches": ["*://example.com/player*"],
      "js": ["plugin-api.js", "keysocket-example-service-name.js"]
    },
```

Create new file into `extension` folder using the pattern `keysocket-example-service-name.js` (use your service name to
replace `example-service-name` part). Write plugin's code there. Check other plugins for examples.

Typically, plugin can interact with a player using either button press simulation or public API call. The second option
implies you writing custom JS code to talk to player, while the first one requires just to mention DOM selectors to
configure keysocket.

```javascript
keySocket.init('example-service-name', {
    "play-pause": '...',
    "prev": '...',
    "next": '...',
    "stop": '...'
});
```

In the code above two arguments were passed to `keySocket.init` function. The first argument is a plugin name, it used for
logging and can be anything you want. The second argument is a map used to bind keysocket events (which is caused by
user pressing control keys) to buttons or code, that handles this event. The events are `play-pause`, `prev`, `next`
and `stop`. Any of them can be omitted in the map.

So, passing a function as an event handler, you set the code, that will be called when event is thrown. Passing anything
else, which expected to be a string, you define DOM selector to look up for a DOM object to simulate click on it.

Different websites require different approaches to dial with them. So, make a research to find the best solution in
your case. Look through the other plugins (`extension/keysocket-*.js` files) for the reference.

[crx]: https://chrome.google.com/webstore/detail/fphfgdknbpakeedbaenojjdcdoajihik
