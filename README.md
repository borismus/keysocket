Global keyboard bindings to control your Chrome-based music player. Allows your keyboard media keys (play/pause, next, previous) to work when you're listening to music on common streamning websites.

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
   * SoundCloud
   * Spotify
   * Synology Audio Station v.5
   * thesixtyone
   * Tracksflow.com
   * vk.com (Vkontakte)
   * Яндекс.Музыка (Yandex.Music)
   * Youtube.com

# Usage

You need two things in order to work:

 * Install **Chrome extension from the [chrome web store][crx]**
 * Install the KeySocket daemon/server (see below depending on your OS)

## Installing the KeySocket daemon 

The Chrome extension and the daemon should both be running on the same machine. The daemon is just a small program running in background that will send media keys inputs to the Chrome extension.

### Mac

Install either:
 * Pre-built Binaries: Install [Key Socket.app][dl-mac].
 * From Source: 
    1. Prerequisites:
        * [Autobahn](https://github.com/oberstet/Autobahn/) for websockets.
        * [PyObjC](http://pyobjc.sourceforge.net) for keyboard events.
    2. Clone this repository:  
       `git clone git@github.com:borismus/keysocket.git`
    3. Go into the `server-mac` directory and run setup.py:  
       `python setup.py py2app`  
       The app is built in `./dist/Key Socket.app`.

### Windows

Install either:
 * Pre-build Binaries: Download and run [KeySocket.windows.msi][dl-windows].
 * From Source:
    1. Prerequisites:
        * [Autobahn](https://github.com/oberstet/Autobahn/) for websockets.
        * [cx_Freeze](http://pypi.python.org/pypi/cx_Freeze) for building an executable.
    2. Clone this repository:  
       `git clone git@github.com:borismus/keysocket.git`
    3. Go into the `server-windows` directory and run setup.py:  
       `python setup.py build`  
       The executable is built in `./dist/KeySocket.exe`.

### Linux GTK for GNOME

First install prerequisites:

 * [Autobahn](https://github.com/oberstet/Autobahn/),
 * [PyGTK](http://pypi.python.org/pypi/PyGTK) and 
 * [dbus-python](https://pypi.python.org/pypi/dbus-python/).

To install the prerequisites on Ubuntu/Debian you can do:

    $ sudo apt-get install python-dbus python-gtk2 gnome-settings-daemon
    $ sudo easy_install autobahn

Then install either:
 * Pre-build Binaries: Download and run [KeySocket.linux.py][dl-linux].
   Note that `gnome-settings-daemon` must be running for KeySocket to work.
   It is installed by default on Gnome- and Unity-based systems, but may need
    to be installed and started separately on systems using other deskstop
    environments (KDE, XFCE, etc.).
 * From Source:
    1. Clone this repository:  
       `$ git clone https://github.com/borismus/keysocket.git`
    2. No building required. Just run `./server-linux/keysocket.py`.

### Linux Go for all Linux distributions

Linux Go version is less user friendly but should work on any Linux.

Install either:
 * Pre-build Binaries: Download and run [keyserver.bz2][dl-linux-alt]. 
   Note that this has no gui and requires that you know something of how X maps media keys.
 * From Source:
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
