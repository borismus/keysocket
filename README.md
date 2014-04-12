Global keyboard bindings to control your Chrome-based music player.

**UPDATE: Now works for all versions of Chrome**

**Supported sites:**
   * Amazon music player
   * Deezer
   * Google Music
   * Grooveshark
   * Jamstash
   * Jango.com
   * Naxos Music Library
   * Pandora
   * Slacker
   * Songza
   * Spotify
   * Synology Audio Station v.5
   * thesixtyone
   * Tracksflow.com
   * vk.com (Vkontakte)
   * Яндекс.Музыка (Yandex.Music)
   * Youtube.com

# Usage

1. Install extension from the [chrome web store][crx].
2. Install the KeySocket server.
   * **Mac**  
     Install [Key Socket.app][dl-mac].
   * **Windows**  
     Download and run [KeySocket.windows.msi][dl-windows].
   * **Linux**  
     Download and run [KeySocket.linux.py][dl-linux].
     Note that `gnome-settings-daemon` must be running for KeySocket to work.
     It is installed by default on Gnome- and Unity-based systems, but may need
     to be installed and started separately on systems using other deskstop
     environments
     (KDE, XFCE, etc.). The script also depends on
     [Autobahn](https://github.com/oberstet/Autobahn/),
     [PyGTK](http://pypi.python.org/pypi/PyGTK) and 
     [dbus-python](https://pypi.python.org/pypi/dbus-python/).

   * **Linux Alternate**
     Download and run [keyserver.bz2][dl-linux-alt].

     Note that this has no gui and requires that you know something of how X
     maps media keys.

# Building

### Mac

1. Prerequisites:
    * [Autobahn](https://github.com/oberstet/Autobahn/) for websockets.
    * [PyObjC](http://pyobjc.sourceforge.net) for keyboard events.
2. Clone this repository:  
   `git clone git@github.com:borismus/keysocket.git`
3. Go into the `server-mac` directory and run setup.py:  
   `python setup.py py2app`  
   The app is built in `./dist/Key Socket.app`.

### Windows

1. Prerequisites:
    * [Autobahn](https://github.com/oberstet/Autobahn/) for websockets.
    * [cx_Freeze](http://pypi.python.org/pypi/cx_Freeze) for building an executable.
2. Clone this repository:  
   `git clone git@github.com:borismus/keysocket.git`
3. Go into the `server-windows` directory and run setup.py:  
   `python setup.py build`  
   The executable is built in `./dist/KeySocket.exe`.

### Linux GTK Client

1. Prerequisites:
    * [Autobahn](https://github.com/tavendo/Autobahn/) for websockets.
    * [PyGTK](http://pypi.python.org/pypi/PyGTK) for the tray icon.
    * [dbus-python](https://pypi.python.org/pypi/dbus-python/) for media key interception.

2. Installation of Prerequisites on Ubuntu/Debian
    * `sudo apt-get install python-dbus python-gtk2 gnome-settings-daemon`
    * `sudo easy_install autobahn`

3. Clone this repository:  
   `git clone https://github.com/borismus/keysocket.git`

4. No building required. Just run `./server-linux/keysocket.py`.

### Linux Go Client (less user friendly)

1. Prerequisites:
    * [Golang](http://golang.org/doc/install#bsd_linux) for Go

2. Once your go environment is setup:
    * `go install -u -v github.com/hobeone/keysocket-server`
    * `$GOPATH/bin/keysocket-server -help`

3. If you've setup X Media Keys the Go Server listens to XF86AudioNext,Prev and
   Play by default.  These can be changed with command line flags.


# Contribute please!

* Looking for adapters for other music players.

[crx]: https://chrome.google.com/webstore/detail/fphfgdknbpakeedbaenojjdcdoajihik
[dl-mac]: https://github.com/borismus/keysocket/raw/master/downloads/KeySocket.mac.zip
[dl-windows]: https://github.com/borismus/keysocket/raw/master/downloads/KeySocket.windows.msi
[dl-linux]: https://github.com/borismus/keysocket/raw/master/downloads/KeySocket.linux.py
[dl-linux-alt]: https://keysocket-server.googlecode.com/files/keyserver.bz2
