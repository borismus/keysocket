Global keyboard bindings to control your Chrome-based music player.

# Usage

1. Install extension from the [chrome web store][crx].
2. Install the KeySocket server.
   * **Mac**  
     Install [Key Socket.app][dl-mac].
   * **Windows**  
     Download [KeySocket.zip][dl-windows], unzip it and run `KeySocket.exe`.
   * **Linux**  
     Download [KeySocket.zip][dl-linux], unzip it and run `keysocket.py`.
     Note that `gnome-settings-daemon` must be running for KeySocket to work.
     It is installed by default on Gnome- and Unity-based systems, but may need
     to be installed and started separately on systems using other deskstop environments
     (KDE, XFCE, etc.). The script also depends on
     [Autobahn](https://github.com/oberstet/Autobahn/),
     [PyGTK](http://pypi.python.org/pypi/PyGTK) and 
     [dbus-python](https://pypi.python.org/pypi/dbus-python/).

# Building

### Mac

1. Prerequisites:
    * [Autobahn](https://github.com/oberstet/Autobahn/) for websockets.
    * [PyObjC](http://pyobjc.sourceforge.net) for keyboard events.
2. Clone this repository:  
   `git clone git@github.com:max99x/keysocket.git`
3. Go into the `server-mac` directory and run setup.py:  
   `python setup.py py2app`  
   The app is built in `./dist/Key Socket.app`.

### Windows

1. Prerequisites:
    * [Autobahn](https://github.com/oberstet/Autobahn/) for websockets.
    * [cx_Freeze](http://pypi.python.org/pypi/cx_Freeze) for building an executable.
2. Clone this repository:  
   `git clone git@github.com:max99x/keysocket.git`
3. Go into the `server-windows` directory and run setup.py:  
   `python setup.py build`  
   The executable is built in `./dist/KeySocket.exe`.

### Linux

1. Prerequisites:
    * [Autobahn](https://github.com/oberstet/Autobahn/) for websockets.
    * [PyGTK](http://pypi.python.org/pypi/PyGTK) and 
    * [dbus-python](https://pypi.python.org/pypi/dbus-python/).
2. Clone this repository:  
   `git clone git@github.com:max99x/keysocket.git`
3. No building required. Just run `./server-linux/keysocket.py`.

# Contribute please!

* Looking for adapters for other music players.

[crx]: https://chrome.google.com/webstore/detail/fphfgdknbpakeedbaenojjdcdoajihik
[dl-mac]: https://github.com/max99x/keysocket/raw/master/downloads/KeySocket.mac.zip
[dl-windows]: https://github.com/max99x/keysocket/raw/master/downloads/KeySocket.windows.zip
[dl-linux]: https://github.com/max99x/keysocket/raw/master/downloads/KeySocket.linux.zip
