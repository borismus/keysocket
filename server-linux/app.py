#! /usr/bin/python
import gtk

from pyxhook import HookManager

from twisted.internet import gtk2reactor
gtk2reactor.install()
from twisted.internet import reactor, threads
from autobahn.websocket import WebSocketServerFactory, WebSocketServerProtocol, listenWS

'''
KeySocket Linux Server
@author geekingreen
'''

PORT = 1337

# 171 = Prev, 172 = Play/Pause, 173 = Next, 174 = Stop
keys = [171, 172, 173, 174]
# Convert local keys to what the client is expecting
key_map = { '171': '19', '172': '16', '173': '20', '174': '16' }

class KeySocketServerProtocol(WebSocketServerProtocol):
    """
    The Protocol simply adds the client to a list of
    clients that will be broadcasted to when the Server
    receives the first message "Ping".
    """
    def onMessage(self, message, binary):
        if self not in self.factory.clients:
            self.factory.clients.append(self)

class KeySocketServerFactory(WebSocketServerFactory):
    """
    The Factory implements the broadcast method which
    sends the media key to the clients. 
    """
    protocol = KeySocketServerProtocol
    clients = []

    def broadcast(self, msg):
        print "broadcasting key '%s' .." % msg
        for client in self.clients:
            client.sendMessage(msg)
            print "message sent to " + client.peerstr

class KeySocket:
    """
    The KeySocket class which creates GTK2 StatusIcon and
    starts the server.
    """
    def __init__(self):
        self.hm = HookManager()
        self.hm.HookKeyboard()
        self.hm.KeyUp = self.key_press
        self.hm.start() 

        self.statusicon = gtk.StatusIcon()
        self.statusicon.set_from_file('icon48.png')
        self.statusicon.connect('popup-menu', self.right_click_event)
        self.statusicon.set_tooltip('KeySockets')      

        self.factory = KeySocketServerFactory('ws://localhost:{}'.format(PORT), debug=True)

        listenWS(self.factory)
        reactor.run()

    def main_quit(self, widget):
        self.hm.cancel()
        gtk.main_quit()
        reactor.stop()

    def key_press (self, event):
            if event.ScanCode in keys:
                for client in self.factory.clients:
                    self.factory.broadcast(key_map[str(event.ScanCode)])

    def right_click_event(self, icon, button, time):
        menu = gtk.Menu()

        quit = gtk.MenuItem('Quit')

        quit.connect('activate', self.main_quit)

        menu.append(quit)

        menu.show_all()

        menu.popup(None, None, gtk.status_icon_position_menu, button, time, self.statusicon)

KeySocket()
