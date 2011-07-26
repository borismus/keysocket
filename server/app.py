# objc-related imports
import objc
from Foundation import *
from AppKit import *
from PyObjCTools import AppHelper

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


    def sendEvent_(self, event):
        if event.type() is NSSystemDefined and event.subtype() is 8:
            data = event.data1()
            keyCode = (data & 0xFFFF0000) >> 16
            keyFlags = (data & 0x0000FFFF)
            keyState = (keyFlags & 0xFF00) >> 8
            keyRepeat = keyFlags & 0x1

            self.callback(keyCode, keyState)

        NSApplication.sendEvent_(self, event)

def initialize(callback):
    app = KeySocketApp.sharedApplication()
    app.callback = callback
    AppHelper.runEventLoop()
