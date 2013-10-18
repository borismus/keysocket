# PyObjC-related imports
import objc
from Foundation import *
from AppKit import *
from PyObjCTools import AppHelper

# Twisted and autobahn imports
try:
     from twisted.internet import _threadedselect as threadedselectreactor
except:
     from twisted.internet import threadedselectreactor
try:
     threadedselectreactor.install()
except:
     pass
from twisted.internet import reactor
from broadcast import BroadcastServerFactory

KEY_UP = 11

class KeySocketApp(NSApplication):

    def finishLaunching(self):
        statusbar = NSStatusBar.systemStatusBar()
        self.statusitem = statusbar.statusItemWithLength_(
            NSSquareStatusItemLength)

        self.icon = NSImage.alloc().initByReferencingFile_('icon.png')
        self.icon.setSize_((20, 20))
        self.statusitem.setImage_(self.icon)

        self.iconHighlight = NSImage.alloc().initByReferencingFile_('icon-hi.png')
        self.iconHighlight.setSize_((20, 20))
        self.statusitem.setAlternateImage_(self.iconHighlight)

        self.statusitem.setHighlightMode_(1)

        menu = NSMenu.alloc().init()
        menuitem = NSMenuItem.alloc().initWithTitle_action_keyEquivalent_(
            'Quit', 'terminate:', '')
        menu.addItem_(menuitem)
        self.statusitem.setMenu_(menu)

        # Also start twisted
        reactor.interleave(AppHelper.callAfter)
        reactor.addSystemEventTrigger(
            'after', 'shutdown', AppHelper.stopEventLoop)


    def sendEvent_(self, event):
        if event.type() is NSSystemDefined and event.subtype() is 8:
            data = event.data1()
            keyCode = (data & 0xFFFF0000) >> 16
            keyFlags = (data & 0x0000FFFF)
            keyState = (keyFlags & 0xFF00) >> 8
            keyRepeat = keyFlags & 0x1

            self.callback(keyCode, keyState)

        NSApplication.sendEvent_(self, event)


    def applicationShouldTerminate_(self, sender):
        if reactor.running:
            reactor.stop()
            return False
        return True

    def applicationDidFinishLaunching_(self, aNotification):
        """Create and display a new connection window
        """


if __name__ == '__main__':
    factory = BroadcastServerFactory()
    reactor.listenTCP(1337, factory)

    def callback(code, state):
        if state is KEY_UP:
            factory.broadcast(str(code))

    app = KeySocketApp.sharedApplication()
    app.callback = callback
    AppHelper.runEventLoop()

