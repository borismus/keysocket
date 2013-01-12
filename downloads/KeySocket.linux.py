#!/usr/bin/python2
# Copyright (c) 2011 Adi Roiban.
# Public Domain.
# To run this script make sure you have twisted and python-bus installed.
# Get the latest version of AutoBahn http://pypi.python.org/pypi/autobahn/

import base64
import gtk
import tempfile

# Explicitly install glib2reactor. Otherwise, the selectreactor is started.
from twisted.internet import glib2reactor
glib2reactor.install()
from twisted.internet import reactor, task
from twisted.internet.protocol import Protocol, Factory
from autobahn.websocket import (listenWS,
                                WebSocketServerFactory,
                                WebSocketServerProtocol,)

from dbus import SessionBus
from dbus.exceptions import DBusException
from dbus.mainloop.glib import DBusGMainLoop


MEDIAKEY = {
  'Play': '16',
  'Next': '19',
  'Previous': '20',
}
APP_NAME = 'KeySocket'
ICON = 'iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEVlLWcGCgY9PzxlZ2R1Noz4\nAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfd\nAQwKBwBXFCBIAAAA1UlEQVQoz7WSMRKCMBBFAxkLCuk8AgUHoMDKI9h8YJRxKJ3RIkfgEugJHBsL\nj8AlaOxtPIUbdkm4AKn2Jfm7+X+i1MLrdu89DDh7yIDWwRq4OtDAYS6a3SORmYuaqf6RqJI6RTvg\nKNChyVA4qEjkIQLs83Rv1QKhCQlWwI4gqAlqeWpY6g77RAD9F41AAJMX72E6qeMXdR8baJTjKPZg\nJ2zBc2jTxHRQiMsT1QIbjIstJAxsLmJg2zEDBxIySFQPuGZK5RameO29wgWaAhef++fZL/wd/tEy\nTx5kmQKPAAAAAElFTkSuQmCC\n'
GSM_NOT_FOUND_MESSAGE='''
Could not find the gnome-settings-daemon, which is required for KeySocket.
Note that it can be installed and run safely even if you are not using Gnome
as your desktop environment.
'''.strip().replace('\n', ' ')


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
    self.keys_listener = DBusMediaKeyListener(callback=self._onMediaKeyEvent)
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


def showPopupMenu(*_):
  menu = gtk.Menu()
  menu_item = gtk.MenuItem('Quit')
  menu_item.connect('activate', lambda *_, **__: gtk.main_quit())
  menu.append(menu_item)
  menu_item.show()
  menu.show()
  menu.popup(None, None, None, 1, gtk.get_current_event_time())


def createTrayIcon():
  staticon = gtk.StatusIcon()

  icondata = base64.b64decode(ICON)
  iconfile = tempfile.NamedTemporaryFile(suffix='.png', delete=False)
  iconfile.write(icondata)
  iconfile.close()
  staticon.set_from_file(iconfile.name)

  staticon.connect('activate', showPopupMenu)
  staticon.connect('popup_menu', showPopupMenu)
  staticon.set_visible(True)
  return staticon


def main():
  # Explicitly set dbus main loop.
  DBusGMainLoop(set_as_default=True)

  # Wake up the settings manager dbus service.
  try:
    settings_bus = SessionBus().get_object(
        'org.gnome.SettingsDaemon', '/org/gnome/SettingsDaemon')
  except DBusException as e:
    dialog = gtk.MessageDialog(
        None,
        gtk.DIALOG_DESTROY_WITH_PARENT,
        gtk.MESSAGE_ERROR,
        gtk.BUTTONS_CLOSE,
        GSM_NOT_FOUND_MESSAGE)
    dialog.run()
    dialog.destroy()
    return
  try:
    settings_bus.Awake(dbus_interface='org.gnome.SettingsDaemon')
  except DBusException as e:
    # May not always be wakeable. That's Ok.
    pass

  # Create server.
  factory = BroadcastServerFactory('ws://localhost:1337')
  listenWS(factory)

  # Start twisted.
  reactor.startRunning()

  # Create the tray icon. Must keep reference to prevent GC.
  icon = createTrayIcon()

  #Run GTK loop.
  gtk.main()

  # Kill twisted if it's still alive.
  if reactor.running:
    reactor.stop()


if __name__ == '__main__':
  main()
