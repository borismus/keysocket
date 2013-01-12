Global keyboard bindings to control your Chrome-based music player.

# Usage instructions:

1. Install extension from the [chrome web store][crx].
2. Install Key Socket.app from the [github downloads][app].

# Build instructions:

1. Prerequisites:
    * [Autobahn](https://github.com/oberstet/Autobahn/) for websockets.
    * **Mac**:[PyObjC](http://pyobjc.sourceforge.net) for keyboard events.
    * **Windows**:[cx_Freeze](http://pypi.python.org/pypi/cx_Freeze) for building an executable.
2. Clone this repository:  
   `git clone git@github.com:max99x/keysocket.git`
3. Build the app for your system:
    * **Mac**  
      Go into the `server` directory and run setup.py:  
      `python setup.py py2app`  
      The app is built in `./dist/Key Socket.app`.
    * **Windows**  
      Go into the `server-windows` directory and run setup.py:  
      `python setup.py build`  
      The executable is built in `./dist/KeySocket.exe`.

# Contribute please!

* Looking for adapters for other music players.
* Looking for a Key Socket server for Linux.

[crx]: https://chrome.google.com/webstore/detail/fphfgdknbpakeedbaenojjdcdoajihik
[app]: https://github.com/downloads/max99x/keysocket/KeySocket.zip
