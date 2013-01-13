Global keyboard bindings to control your Chrome-based music player.

**UPDATE: Now works for all versions of Chrome**

**Supported sites:**
   * Google Music
   * Grooveshark
   * thesixtyone
   * Amazon music player
   * Pandora
   * vk.com (Vkontakte)

# Usage instructions:

1. Install extension from the [chrome web store][crx].
2. Install Key Socket.app from the [github downloads][app]

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
* Looking for Key Socket servers for Windows and Linux.

[crx]: https://chrome.google.com/webstore/detail/fphfgdknbpakeedbaenojjdcdoajihik
[app]: https://github.com/downloads/borismus/keysocket/KeySocket.zip
