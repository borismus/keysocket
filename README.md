Global keyboard bindings to control your Chrome-based music player.

**UPDATE: Now works for all versions of Chrome**

**Supported sites:**
   * Google Music
   * Grooveshark
   * thesixtyone
   * Amazon music player
   * Pandora
   * vk.com (Vkontakte)
   * Youtube.com
   * Slacker
   * Яндекс.Музыка (Yandex.Music)
   * Tracksflow.com
   * Jango.com
   * Spotify

# Usage instructions:

+ Install extension from the [chrome web store][crx].

## For Mac:
+ Install Key Socket.app from the [github downloads][app].

## For Linux
+ Install keysocket_server from the [code.google.com downloads][linuxapp].

# Build instructions:

To build Key Socket.app,

0. Prerequisites:

    * [Autobahn](https://github.com/oberstet/Autobahn/) for websockets.
    * [PyObjC](http://pyobjc.sourceforge.net) for keyboard events.

1. Clone this repository:

    git clone git@github.com:borismus/keysocket.git

2. Go into the `server` directory and run setup.py:

    python setup.py py2app

3. The app is built in ./dist/Key\ Socket.app

# Contribute please!

* Looking for adapters for other music players.
* Looking for Key Socket servers for Windows.

[crx]: https://chrome.google.com/webstore/detail/fphfgdknbpakeedbaenojjdcdoajihik
[app]: https://github.com/downloads/borismus/keysocket/KeySocket.zip
[linuxapp]: https://keysocket-server.googlecode.com/files/keyserver.bz2
