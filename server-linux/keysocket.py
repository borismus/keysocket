#!/usr/bin/python2
# Copyright (c) 2011 Adi Roiban.
# Public Domain .
# To run this script make sure you have twisted and python-bus installed.
# Get the latest version of AutoBahn http://pypi.python.org/pypi/autobahn/

# Explicitly install glib2reactor. Otherwise, the selectreactor is started.
from twisted.internet import glib2reactor
glib2reactor.install()

# Explicitly set dbus main loop.
from dbus.mainloop.glib import DBusGMainLoop
DBusGMainLoop(set_as_default=True)

from autobahn.websocket import (
    listenWS,
    WebSocketServerFactory,
    WebSocketServerProtocol,
    )

from dbus import SessionBus
from twisted.internet import reactor, task
from twisted.internet.protocol import Protocol, Factory

MEDIAKEY = {
    'Play': '16',
    'Next': '19',
    'Previous': '20',
    }

APP_NAME = 'WebSocketKeyLogger'


class DBusMediaKeyListener(object):
    '''Listen on DBus for media-key events.'''

    def __init__(self, callback=None):
        self._subscribers = []
        self.app = APP_NAME
        self.bus = SessionBus()
        self.bus_object = self.bus.get_object(
            'org.gnome.SettingsDaemon', '/org/gnome/SettingsDaemon/MediaKeys')
        self.bus_object.GrabMediaPlayerKeys(
            self.app, 0, dbus_interface='org.gnome.SettingsDaemon.MediaKeys')
        self.bus_object.connect_to_signal(
            'MediaPlayerKeyPressed', self._notify)
        if callback:
            self.subscribe(callback)

    def _notify(self, application, *mmkeys):
        for subscriber in self._subscribers:
            subscriber(mmkeys)

    def subscribe(self, callback):
        self._subscribers.append(callback)

    def unsubscribe(self, callback):
        self._subscribers.remove(callback)


class BroadcastServerProtocol(WebSocketServerProtocol):
    '''A simple protocol, that registers/unregisters itself.'''

    def onOpen(self):
        self.factory.register(self)

    def onMessage(self, msg, binary):
        '''Respond only on Ping requests.'''
        if not binary and msg == 'Ping':
            self.sendMessage('Pong')

    def connectionLost(self, reason):
        WebSocketServerProtocol.connectionLost(self, reason)
        self.factory.unregister(self)


class BroadcastServerFactory(WebSocketServerFactory):

    protocol = BroadcastServerProtocol

    def __init__(self, url):
        WebSocketServerFactory.__init__(self, url)
        self.keys_listener = DBusMediaKeyListener(
            callback=self._onMediaKeyEvent)
        self._clients = []

    def register(self, client):
        if not client in self._clients:
            self._clients.append(client)

    def unregister(self, client):
        if client in self._clients:
            self._clients.remove(client)

    def broadcast(self, msg):
        for client in self._clients:
            client.sendMessage(msg)

    def _onMediaKeyEvent(self, keys):
        '''Broadcast the keycode for each pressed keys.'''
        for key in keys:
            try:
                self.broadcast(MEDIAKEY[key])
                return
            except KeyError:
                pass


if __name__ == '__main__':
  # Wake up the settings manager dbus service.
  SessionBus().get_object(
      'org.gnome.SettingsDaemon', '/org/gnome/SettingsDaemon').Awake(
           dbus_interface='org.gnome.SettingsDaemon')

  # Run the key monitor.
  uri = 'ws://localhost:1337'
  factory = BroadcastServerFactory(uri)
  listenWS(factory)
  print 'Starting %s on %s.' % (APP_NAME, uri)
  reactor.run()
